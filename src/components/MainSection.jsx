import { useImmer } from "use-immer";
import SideMenu from "./SideMenu";
import Resume from "./Resume";
import { DataContext, initData } from "./Data";

export default function MainSection() {
  const [dataContent, setDataContent] = useImmer(() => initData);

  function updateStaticData(event, category, id) {
    //const newData = { ...dataContent };
    switch (category) {
      case "personalInfo":
        setDataContent((draft) => {
          draft.static[category][id] = event.target.value;
        });
        break;
      case "contact":
        setDataContent((draft) => {
          draft.static[category][id] = event.target.value;
        });
        break;
    }
  }

  function updateDynamicData(
    event,
    index,
    itemIndex,
    isSubItem = false,
    subIndex
  ) {
    if (!isSubItem) {
      setDataContent((draft) => {
        draft.dynamic[index].items[itemIndex].value = event.target.value;
      });
    } else {
      setDataContent((draft) => {
        draft.dynamic[index].items[itemIndex].subItems[subIndex].value =
          event.target.value;
      });
    }
  }

  function newData(index = 0, subIndex = 0, isList = false) {
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
    switch (dataContent.dynamic[index].key) {
      case "experiance":
        setDataContent((draft) => {
          draft.dynamic[index].items.push(newExperiance);
        });
        break;
      case "additionalInfo":
        if (!isList) {
          setDataContent((draft) => {
            draft.dynamic[index].items.push(newAdditionalInfo);
          });
          break;
        } else {
          const newSubAdditionalInfo = {
            key: crypto.randomUUID(),
            value: "",
          };
          setDataContent((draft) => {
            draft.dynamic[index].items[subIndex].subItems.push(
              newSubAdditionalInfo
            );
          });
          break;
        }
    }
  }

  function removeData(index = 0, itemIndex = 0, subIndex = 0, isList = false) {
    if (!isList) {
      setDataContent((draft) => {
        draft.dynamic[index].items.splice(itemIndex, 1);
      });
    } else {
      setDataContent((draft) => {
        draft.dynamic[index].items[itemIndex].subItems.splice(subIndex, 1);
      });
    }
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
