import { useState } from "react";
import SideMenu from "./SideMenu";
import Resume from "./Resume";
import { DataContext, initDataContext, initData } from "./Data";

export default function MainSection() {
  const [dataContent, setDataContent] = useState(() => initData);

  function updateStaticData(event, category, id) {
    const newData = { ...dataContent };
    switch (category) {
      case "personalInfo":
        newData.static[category][id] = event.target.value;
        break;
      case "contact":
        newData.static[category][id] = event.target.value;
        break;
    }
    setDataContent(newData);
  }

  function updateDynamicData(
    event,
    index,
    itemIndex,
    isSubItem = false,
    subIndex
  ) {
    const newData = { ...dataContent };
    if (!isSubItem) {
      newData.dynamic[index].items[itemIndex].value = event.target.value;
    } else {
      newData.dynamic[index].items[itemIndex].subItems[subIndex].value =
        event.target.value;
    }

    setDataContent(newData);
  }

  function newData(index = 0, subIndex = 0, isList = false) {
    const newData = { ...dataContent };

    const newExperiance = {
      key: crypto.randomUUID(),
      subItems: [
        { label: "Company", key: "company", value: "" },
        { label: "Job Title", key: "jobTitle", value: "" },
        { label: "Start / End Date", key: "date", value: "" },
        { label: "Location", key: "place", value: "" },
        { label: "Description", key: "desc", value: "", isTextArea: true },
      ],
    };

    const newAdditionalInfo = {
      label: "Title",
      key: crypto.randomUUID(),
      value: "",
      subItems: [],
    };

    console.log(`Index ${index}, SubIndex ${subIndex}`);
    switch (newData.dynamic[index].key) {
      case "experiance":
        newData.dynamic[index].items.push(newExperiance);
        break;
      case "additionalInfo":
        if (!isList) {
          newData.dynamic[index].items.push(newAdditionalInfo);
          break;
        } else {
          const newSubAdditionalInfo = {
            key: crypto.randomUUID(),
            value: "",
          };
          newData.dynamic[index].items[subIndex].subItems.push(
            newSubAdditionalInfo
          );
          break;
        }
    }

    setDataContent(newData);
  }

  function removeData(
    index = 0,
    itemIndex = 0,
    subIndex = 0,
    isList = false
  ) {
    console.log("PPstryk");
    const newData = { ...dataContent };
    if (!isList) {
      newData.dynamic[index].items.splice(itemIndex, 1);
    } else {
      newData.dynamic[index].items[itemIndex].subItems.splice(subIndex, 1);
    }

    setDataContent(newData);
  }

  return (
    <DataContext.Provider
      value={{
        dataContent,
        newData,
        updateStaticData,
        updateDynamicData,
        removeData,
      }}
    >
      <SideMenu />
      <Resume />
    </DataContext.Provider>
  );
}
