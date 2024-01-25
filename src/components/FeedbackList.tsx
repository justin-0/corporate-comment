import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";

const API_URL =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

export default function FeedbackList() {
  const [userFeedback, setUserFeedback] = useState([]);

  useEffect(() => {
    (async function getUserData() {
      const resp = await fetch(API_URL);
      const { feedbacks } = await resp.json();
      setUserFeedback(feedbacks);
    })();
  }, []);

  return (
    <ol className="feedback-list">
      {userFeedback.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
