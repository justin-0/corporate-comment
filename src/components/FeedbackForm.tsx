import { Pencil1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

type FeedbackFormProps = {
  handleAddItemToList: (text: string) => void;
};

export default function FeedbackForm({
  handleAddItemToList,
}: FeedbackFormProps) {
  const [feedback, setFeedback] = useState("");
  const charsLeft = MAX_CHARACTERS - feedback.length;
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = evt.target.value;

    if (feedback.length > MAX_CHARACTERS) return;

    setFeedback(input);
  };

  return (
    <form
      className="form"
      onSubmit={(evt) => {
        evt.preventDefault();
        handleAddItemToList(feedback);
        setFeedback("");
      }}
    >
      <textarea
        id="feedback-textarea"
        placeholder=" "
        spellCheck="false"
        maxLength={MAX_CHARACTERS}
        value={feedback}
        onChange={handleChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, must #hashtag company
        <Pencil1Icon />
      </label>
      <div>
        <p className="u-italic">{charsLeft}</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
