import FeedbackItem from "./FeedbackItem";
import LoadingSpinner from "./LoadingSpinner";
import { UserFeedback } from "../lib/types";

export default function FeedbackList({
  status,
  userFeedback,
}: {
  status: string;
  userFeedback: UserFeedback[];
}) {
  return (
    <ol className="feedback-list">
      {status === "loading" && <LoadingSpinner />}
      {status === "complete" &&
        userFeedback.map((feedbackItem) => (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        ))}
      {status === "error" && (
        <h1 style={{ color: "red", textAlign: "center" }}>
          Error occurred requesting data
        </h1>
      )}
    </ol>
  );
}
