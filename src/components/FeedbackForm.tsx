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
  const [validInput, setValidInput] = useState<boolean>();
  const [invalidInput, setInvalidInput] = useState<boolean>();

  const charsLeft = MAX_CHARACTERS - feedback.length;
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = evt.target.value;

    if (feedback.length > MAX_CHARACTERS) return;

    setFeedback(input);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (feedback.length >= 5 && feedback.includes("#")) {
      setValidInput(true);
      setTimeout(() => setValidInput(false), 2000);
    } else {
      setInvalidInput(true);
      setTimeout(() => setInvalidInput(false), 2000);
      return;
    }

    handleAddItemToList(feedback);
    setFeedback("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${validInput ? "form--valid" : ""} ${
        invalidInput ? "form--invalid" : ""
      }`}
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
