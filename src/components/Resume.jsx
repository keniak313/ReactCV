import "../styles/Resume.css";
import { useContext } from "react";
import { DataContext } from "./Data";

export default function Resume() {
  return (
    <section id="resume">
      <TopSection />
      <MainSection />
      <SideSection />
    </section>
  );
}

function TopSection() {
  const { dataContent } = useContext(DataContext);
  const personalInfo = dataContent.static.personalInfo;

  const firstName = personalInfo.firstName;
  const lastName = personalInfo.lastName;
  const jobTitle = personalInfo.jobTitle;
  const shortBio = personalInfo.shortBio;

  return (
    <section id="top">
      {/* <div className="picture">
        <img className="picture" href="#" />
      </div> */}
      <div className="person">
        <h1 className="fullName">{firstName + " " + lastName}</h1>
        <h2 className="title">{jobTitle}</h2>
        <p className="shortBio">{shortBio}</p>
      </div>
    </section>
  );
}

function SideSection() {
  const { dataContent } = useContext(DataContext);
  const contact = dataContent.static.contact;

  const address = contact.address;
  const phone = contact.phone;
  const email = contact.email;
  const website = contact.website;

  const dynamicData = dataContent.dynamic;
  const additionalInfo = dynamicData.findIndex(
    (i) => i.key === "additionalInfo"
  );
  return (
    <section id="side">
      <div className="contact">
        <h2 className="title">Contact</h2>
        <div className="content">
          <ul>
            <li>{address}</li>
            <li>{phone}</li>
            <li>{email}</li>
            <li>{website}</li>
          </ul>
        </div>
        {dynamicData[additionalInfo].items.map((i) => {
          return <SideItem item={i} key={i.key} subItems={i.subItems} />;
        })}
      </div>
    </section>
  );
}

function SideItem({ item, subItems }) {
  return (
    <div className="custom">
      <h2 className="title">{item.value}</h2>
      <div className="content">
        <ul>
          {subItems.map((i) => {
            return <li key={i.key}>{i.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

function MainSection() {
  const { dataContent } = useContext(DataContext);
  const dynamicData = dataContent.dynamic;

  const experiance = dynamicData.findIndex((i) => i.key === "experiance");
  return (
    <section id="main">
      <div className="experiance">
        <h2 className="title">Experiance</h2>
        {dynamicData[experiance].items.map((item, index) => {
          return (
            <div className="subExperiance" id={item.key} key={item.key}>
              {dynamicData[experiance].items[index].subItems.map((subItem) => {
                return (
                  <p className={subItem.key} key={subItem.key}>
                    {subItem.value}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
