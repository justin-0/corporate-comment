type HashtagProps = {
  hashtagCompanies: string[];
  status: string;
  selectedCompany: string;
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
};

export default function HashtagList({
  hashtagCompanies,
  status,
  setSelectedCompany,
  selectedCompany,
}: HashtagProps) {
  return (
    <ul className="hashtags">
      {status === "complete"
        ? hashtagCompanies.map((item) => (
            <HashtagListItem
              company={item}
              id={item}
              setSelectedCompany={setSelectedCompany}
              selectedCompany={selectedCompany}
            />
          ))
        : null}
    </ul>
  );
}

function HashtagListItem({
  company,
  id,
  setSelectedCompany,
  selectedCompany,
}: {
  company: string;
  id: string;
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
  selectedCompany: string;
}) {
  return (
    <li
      key={id}
      onClick={(e) => {
        const company = (e.target as HTMLElement).textContent?.substring(1);

        if (selectedCompany === "") {
          if (!company) return;
          setSelectedCompany(company);
        }

        if (selectedCompany) {
          if (!company) return;
          setSelectedCompany(company);
        }

        if (company === selectedCompany) {
          setSelectedCompany("");
        }
      }}
    >
      <button>#{company}</button>
    </li>
  );
}
