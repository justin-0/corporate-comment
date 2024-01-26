import { UserFeedback } from "../lib/types";

type HashtagProps = {
  hashtagCompanies: string[];
  status: string;
};

export default function HashtagList({
  hashtagCompanies,
  status,
}: HashtagProps) {
  return (
    <ul className="hashtags">
      {status === "complete"
        ? hashtagCompanies.map((item) => <HashtagListItem company={item} />)
        : null}
    </ul>
  );
}

function HashtagListItem({ company }: { company: string }) {
  return (
    <li>
      <button>#{company}</button>
    </li>
  );
}
