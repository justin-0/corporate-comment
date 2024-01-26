import { TriangleUpIcon } from "@radix-ui/react-icons";
import { UserFeedback } from "../lib/types";
import { useState } from "react";

type UserFeedbackProps = { feedbackItem: UserFeedback };

export default function FeedbackItem({ feedbackItem }: UserFeedbackProps) {
  const [open, isOpen] = useState(false);

  return (
    <li
      className={`feedback ${open ? "feedback--expand" : ""}`}
      onClick={() => isOpen(!open)}
    >
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
}
