import FeedbackList from "./FeedbackList";
import Header from "./Header";
import { UserFeedback } from "../lib/types";

export default function Container({
  status,
  userFeedback,
}: {
  status: string;
  userFeedback: UserFeedback[];
}) {
  return (
    <main className="container">
      <Header />
      <FeedbackList status={status} userFeedback={userFeedback} />
    </main>
  );
}
