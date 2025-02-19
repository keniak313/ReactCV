import { useContext } from "react";
import Category from "./Category";
import InputField from "./InputField";
import { DataContext } from "./Data";

export default function Contact({ ref, onUp }) {
  const { dataContent, updateStaticData } = useContext(DataContext);
  const contactKey = "contact";
  const data = dataContent.static.contact;
  return (
    <Category
      title="Contact"
      classKey={contactKey}
      key={contactKey}
      onUp={(e) => {
        onUp(e);
      }}
      ref={ref}
    >
      <InputField
        id={"address"}
        label={"Location"}
        value={data.address}
        onChange={(e) => {
          updateStaticData(e, contactKey, "address");
        }}
      />
      <InputField
        id={"phone"}
        label={"Phone"}
        value={data.phone}
        onChange={(e) => {
          updateStaticData(e, contactKey, "phone");
        }}
      />
      <InputField
        id={"email"}
        label={"E-Mail"}
        value={data.email}
        onChange={(e) => {
          updateStaticData(e, contactKey, "email");
        }}
      />
      <InputField
        id={"website"}
        label={"Website"}
        value={data.website}
        onChange={(e) => {
          updateStaticData(e, contactKey, "website");
        }}
      />
    </Category>
  );
}
