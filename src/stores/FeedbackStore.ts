import { create } from "zustand";
import { UserFeedback } from "../lib/types";

const API_URL =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

export const useFeedbackStore = create((set, get) => ({
  feedback: [],
  status: "loading",
  selectedCompany: "",
  getCompanyList: () => {
    return get()
      .feedback.map((item: UserFeedback) => item.company)
      .filter((company: string, index: number, array: []) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredCompanies: () => {
    const state = get();
    return state.feedback.filter((feedback) => {
      if (state.selectedCompany)
        return feedback.company === state.selectedCompany;

      return feedback;
    });
  },
  addItemToList: async (feedback: string) => {
    const extractCompany = (text: string) => {
      const hashtags = text.match(/#(\w+)/g) || [];
      const extractedWord = hashtags.map((tag) => tag.substring(1));

      return extractedWord.toString();
    };

    const newItem: UserFeedback = {
      upvoteCount: Math.floor(Math.random() * 10) + 69,
      badgeLetter: extractCompany(feedback)[0].toUpperCase(),
      company: extractCompany(feedback),
      text: feedback,
      daysAgo: Math.floor(Math.random() * 10) + 1,
      id: feedback.length + 1,
    };

    // setUserFeedback([...feedback, newItem]);
    set((state) => ({ feedback: [...state.feedback, newItem] }));

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  selectCompany: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const company = (e.target as HTMLElement).textContent?.substring(1);

    if (get().selectedCompany === "") {
      if (!company) return;
      set(() => ({ selectedCompany: company }));
      // setSelectedCompany(company);
    }
    if (get().selectedCompany) {
      if (!company) return;
      set(() => ({ selectedCompany: company }));
    }

    if (company === get().selectedCompany) {
      set(() => ({ selectedCompany: company }));
    }
  },
  getFeedback: async () => {
    set(() => ({ status: "loading" }));
    try {
      const resp = await fetch(API_URL);
      const { feedbacks } = await resp.json();
      set(() => ({ feedback: feedbacks }));
      set(() => ({ status: "complete" }));
    } catch (error: any) {
      console.log(error.message);
      set(() => ({ status: "error" }));
    }
  },
}));
