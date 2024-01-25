import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import LoadingSpinner from "./LoadingSpinner";

const API_URL =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

type Status = "loading" | "complete" | "error";

export default function FeedbackList() {
  const [userFeedback, setUserFeedback] = useState([]);
  const [status, setStatus] = useState<Status>();

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
    <ol className="feedback-list">
      {status === "loading" ? <LoadingSpinner /> : null}
      {status === "complete"
        ? userFeedback.map((feedbackItem) => (
            <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
          ))
        : null}
      {status === "error" && (
        <h1 style={{ color: "red", textAlign: "center" }}>
          Error occurred requesting data
        </h1>
      )}
    </ol>
  );
}
