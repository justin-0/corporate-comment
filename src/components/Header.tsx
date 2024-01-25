import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";
import FeedbackForm from "./FeedbackForm";

type HeaderProps = {
  handleAddItemToList: (text: string) => void;
};

export default function Header({ handleAddItemToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddItemToList={handleAddItemToList} />
    </header>
  );
}
