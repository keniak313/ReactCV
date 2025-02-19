import React from "react";
import { useContext } from "react";

import Category from "./Category";
import InputField from "./InputField";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";

import { DataContext } from "./Data";

export default function DynamicCategory({
  title,
  category,
  index,
  onUp,
  ref,
  isList,
}) {
  const { dataContent, updateDynamicData, newData, removeData } =
    useContext(DataContext);

  const data = dataContent.dynamic[index];

  const refs = [];

  function closeAll() {
    refs.forEach((r) => {
      r.current.close();
    });
  }

  return (
    <Category
      title={title}
      classKey={category}
      onUp={(e) => {
        onUp(e);
        closeAll();
      }}
      ref={ref}
    >
      {data.items.map((item, itemIndex) => {
        const newRef = React.createRef();
        refs[itemIndex] = newRef;
        return (
          <Category
            initExpand={true}
            title={
              isList
                ? item.value === ""
                  ? "(Not Specified)"
                  : item.value
                : item.subItems[0].value === ""
                ? "(Not Specified)"
                : item.subItems[0].value
            }
            isSubCat={true}
            key={item.key}
            onUp={() => {
              closeAll();
            }}
            onAnimEnd={(e) => {
              console.log(e);
              if (e.animationName === "removeItem") {
                removeData(index, itemIndex);
              }
            }}
            ref={newRef}
          >
            {isList && (
              <InputField
                id={item.label}
                label={item.label}
                value={item.value}
                onChange={(e) => {
                  updateDynamicData(e, index, itemIndex);
                }}
              />
            )}
            <div className={`${category} items`}>
              {data.items[itemIndex].subItems.map((subItem, subIndex) => {
                return (
                  <div
                    className={isList ? "item" : subItem.key}
                    key={subItem.key}
                  >
                    <InputField
                      id={subItem.value}
                      label={subItem.label}
                      isTextArea={subItem.isTextArea}
                      value={subItem.value}
                      onChange={(e) => {
                        updateDynamicData(e, index, itemIndex, true, subIndex);
                      }}
                      key={subItem.key}
                    />
                    {isList && (
                      <RemoveButton
                        onClick={() => {
                          removeData(index, itemIndex, subIndex, true);
                        }}
                      />
                    )}
                  </div>
                );
              })}
              {isList && (
                <AddButton
                  onClick={() => {
                    newData(index, itemIndex, true);
                  }}
                />
              )}
            </div>
          </Category>
        );
      })}

      <AddButton
        onClick={() => {
          newData(index);
          closeAll();
        }}
      />
    </Category>
  );
}
