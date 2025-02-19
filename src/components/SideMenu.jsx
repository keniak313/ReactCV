import React from "react";
import { useState, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/SideMenu.css";

import DynamicCategory from "./DynamicCategory";
import PersonalInfo from "./PersonalInformation";
import Contact from "./Contact";
import { DataContext } from "./Data";

export default function SideMenu() {
  const [openMenu, setOpenMenu] = useState(true);
  const { dataContent } = useContext(DataContext);

  const personalInfoRef = useRef(null);
  const contactRef = useRef(null);

  const refs = [personalInfoRef, contactRef];

  function closeAll() {
    console.log(refs)
    refs.forEach((r) => {
      r.current.close();
    });
  }

  return (
    <section id="sideMenu" className={openMenu ? "" : "closeMenu"}>
      <button className="sideMenu" onClick={() => setOpenMenu(!openMenu)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h2>CV Maker</h2>
      <PersonalInfo onUp={closeAll} ref={personalInfoRef} />
      <Contact onUp={closeAll} ref={contactRef} />
      {dataContent.dynamic.map((i, index) => {
        const newRef = React.createRef();
        refs.push(newRef)
        return (
          <DynamicCategory
            title={i.title}
            category={i.key}
            key={i.key}
            index={index}
            haveSubCats={i.haveSubCats}
            isList={i.isList}
            onUp={closeAll}
            ref={newRef}
          />
        );
      })}
    </section>
  );
}
