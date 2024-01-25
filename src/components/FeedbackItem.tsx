import { TriangleUpIcon } from "@radix-ui/react-icons";

type UserFeedback = {
  upvotes: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

type UserFeedbackProps = { feedbackItem: UserFeedback };

export default function FeedbackItem({ feedbackItem }: UserFeedbackProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvotes}</span>
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
