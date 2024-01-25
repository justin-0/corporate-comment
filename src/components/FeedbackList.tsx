import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import LoadingSpinner from "./LoadingSpinner";

const API_URL =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

type Status = "loading" | "complete";

export default function FeedbackList() {
  const [userFeedback, setUserFeedback] = useState([]);
  const [status, setStatus] = useState<Status>();

  useEffect(() => {
    setStatus("loading"),
      (async function getUserData() {
        const resp = await fetch(API_URL);
        const { feedbacks } = await resp.json();
        setUserFeedback(feedbacks);
        setStatus("complete");
      })();
  }, []);

  return (
    <ol className="feedback-list">
      {status === "loading" ? (
        <LoadingSpinner />
      ) : (
        userFeedback.map((feedbackItem) => (
          <FeedbackItem feedbackItem={feedbackItem} />
        ))
      )}
      {/* {userFeedback.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))} */}
    </ol>
  );
}
