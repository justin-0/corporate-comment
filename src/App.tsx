import { useEffect, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import { UserFeedback } from "./lib/types";

const API_URL =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

type Status = "loading" | "complete" | "error";

export default function App() {
  const [userFeedback, setUserFeedback] = useState<Array<UserFeedback>>([]);
  const [status, setStatus] = useState<Status>("loading");

  // Extract Company from Feeback input and remove #hashtag
  const extractCompany = (text: string) => {
    const hashtags = text.match(/#(\w+)/g) || [];
    const extractedWord = hashtags.map((tag) => tag.substring(1));

    return extractedWord.toString();
  };

  const handleAddItemToList = (feedback: string) => {
    const newItem: UserFeedback = {
      upvoteCount: Math.floor(Math.random() * 10) + 69,
      badgeLetter: extractCompany(feedback).toUpperCase(),
      company: extractCompany(feedback),
      text: feedback,
      daysAgo: Math.floor(Math.random() * 10) + 1,
      id: userFeedback.length + 1,
    };

    setUserFeedback([...userFeedback, newItem]);
  };

  // Fetch Data from API
  useEffect(() => {
    setStatus("loading"),
      (async function getUserData() {
        try {
          const resp = await fetch(API_URL);
          const { feedbacks } = await resp.json();
          setUserFeedback(feedbacks);
          setStatus("complete");
        } catch (error: any) {
          console.log(error.message);
          setStatus("error");
        }
      })();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container
        status={status}
        userFeedback={userFeedback}
        handleAddItemToList={handleAddItemToList}
      />
      <HashtagList />
    </div>
  );
}
