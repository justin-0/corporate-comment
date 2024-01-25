import FeedbackList from "./FeedbackList";
import Header from "./Header";
import { UserFeedback } from "../lib/types";

type ContainerProps = {
  status: string;
  userFeedback: UserFeedback[];
  handleAddItemToList: (text: string) => void;
};

export default function Container({
  status,
  userFeedback,
  handleAddItemToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddItemToList={handleAddItemToList} />
      <FeedbackList status={status} userFeedback={userFeedback} />
    </main>
  );
}
