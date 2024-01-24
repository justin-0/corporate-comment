import { Pencil1Icon } from "@radix-ui/react-icons";

export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea id="feedback-textarea" placeholder=" " spellCheck="false" />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, must #hashtag company
        <Pencil1Icon />
      </label>
      <div>
        <p className="u-italic">150 chars</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
