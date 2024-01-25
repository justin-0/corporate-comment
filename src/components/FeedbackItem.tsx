import { TriangleUpIcon } from "@radix-ui/react-icons";

type UserFeedback = {
  upvotes: number;
  badge: string;
  company: string;
  feedback: string;
  timestamp: number;
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
        <p>{feedbackItem.badge}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.feedback}</p>
      </div>
      <p>{feedbackItem.timestamp}d</p>
    </li>
  );
}
