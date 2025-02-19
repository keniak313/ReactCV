import { useContext } from "react";
import { DataContext} from "./Data";
import Category from "./Category";
import InputField from "./InputField";

export default function PersonalInfo({ ref, onUp }) {
  const { dataContent, updateStaticData } = useContext(DataContext);
  const personalInfoKey = "personalInfo";

  const data = dataContent.static.personalInfo;

  return (
    <Category
      title="Personal Information"
      classKey={personalInfoKey}
      key={personalInfoKey}
      initExpand={true}
      ref={ref}
      onUp={(e) => {
        onUp(e);
      }}
    >
      <InputField
        id={"firstName"}
        label={"First Name"}
        value={data.firstName}
        onChange={(e) => {
          updateStaticData(e, personalInfoKey, "firstName");
        }}
      />
      <InputField
        id={"lastName"}
        label={"Last Name"}
        value={data.lastName}
        onChange={(e) => {
          updateStaticData(e, personalInfoKey, "lastName");
        }}
      />
      <InputField
        id={"jobTitle"}
        label={"Job Title"}
        value={data.jobTitle}
        onChange={(e) => {
          updateStaticData(e, personalInfoKey, "jobTitle");
        }}
      />
      <InputField
        id={"shortBio"}
        label={"Short Bio"}
        value={data.shortBio}
        onChange={(e) => {
          updateStaticData(e, personalInfoKey, "shortBio");
        }}
        isTextArea={true}
      />
    </Category>
  );
}
