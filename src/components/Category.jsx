import { useState, useImperativeHandle, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import RemoveButton from "./RemoveButton";

export default function Category({
  title = "Not Defined",
  children,
  classKey = "",
  initExpand = false,
  isSubCat = false,
  ref,
  onUp,
  onAnimEnd,
}) {
  const [expand, setExpand] = useState(() => initExpand);
  const [remove, setRemove] = useState(() => false);

  const thisRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      close() {
        setExpand(false);
      },
      catRef: thisRef.current,
    };
  });

  function expandHandler() {
    if (remove) {
      return "removeItem";
    } else {
      if (expand) {
        return "expand";
      } else {
        return "";
      }
    }
  }

  function clickHandle(e) {
    onUp(e);
    setExpand(!expand);
  }

  return (
    <div
      className={`${
        isSubCat ? "subCategory" : "category"
      } ${classKey} ${expandHandler()}`}
    >
      <button
        className={`${
          isSubCat ? "subCatTitle" : "catTitle"
        } ${expandHandler()}`}
        onClick={(e) => {
          clickHandle(e);
        }}
        // onMouseUp={onUp}
        onAnimationEnd={onAnimEnd}
        ref={thisRef}
      >
        {isSubCat ? <h3>{title}</h3> : <h2>{title}</h2>}
        <FontAwesomeIcon icon={faSortDown} className={expand ? "rotate" : ""} />
      </button>
      {isSubCat && (
        <RemoveButton
          onClick={() => {
            setRemove(!remove);
          }}
        />
      )}
      <div
        className={`${isSubCat ? "subContent" : "content"} ${expandHandler()}`}
      >
        <div className={`innerContent ${expandHandler()}`}>{children}</div>
      </div>
    </div>
  );
}
