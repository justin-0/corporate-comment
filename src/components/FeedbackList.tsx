import FeedbackItem from "./FeedbackItem";

const usersFeedback = [
  {
    upvotes: 420,
    badge: "J",
    company: "JustinCorp",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolores!",
    timestamp: 4,
  },
  {
    upvotes: 42069,
    badge: "C",
    company: "Coinbase",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolores!",
    timestamp: 7,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {usersFeedback.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
