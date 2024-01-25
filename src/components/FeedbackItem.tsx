import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackItem() {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>69</span>
      </button>
      <div>
        <p>J</p>
      </div>
      <div>
        <p>JustinCorp</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
          dolore!
        </p>
      </div>
      <p>420d</p>
    </li>
  );
}
