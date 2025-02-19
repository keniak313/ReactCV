import { createContext } from "react";

export const initDataContext = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Miner",
    shortBio: "Mining here and there, everywhere!",
  },
  contact: {
    address: "Universe",
    phone: "293-204-984",
    email: "something@somewhere.com",
    website: "http://www.something.pl",
  },
  experiance: [
    {
      company: "Mariolka C.O.",
      jobTitle: "Super Miner",
      date: "329 b.c - Present",
      place: "Universe",
      desc: "Mining gems mostly",
      key: 0,
    },
    {
      company: "Super Miners C.O.",
      jobTitle: "Welder",
      date: "The Future",
      place: "Moon",
      desc: "Doing something always!",
      key: 1,
    },
  ],
  custom: [
    {
      name: "Skills",
      key: 0,
      items: [
        { name: "Sculpting", key: 0 },
        { name: "Texturing", key: 1 },
      ],
    },
    {
      name: "Software",
      key: 1,
      items: [
        { name: "Blender", key: 0 },
        { name: "Zbrush", key: 1 },
      ],
    },
  ],
};

export const initData = {
  static: {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      jobTitle: "Miner",
      shortBio: "Mining here and there, everywhere!",
    },
    contact: {
      address: "Universe",
      phone: "293-204-984",
      email: "something@somewhere.com",
      website: "http://www.something.pl",
    },
    about: {
      about: "Something about you...",
    },
  },

  dynamic: [
    {
      title: "Professional Experiance",
      key: "experiance",
      items: [
        {
          key: 0,
          subItems: [
            { label: "Company", key: "company", value: "Super Miners C.O." },
            { label: "Job Title", key: "jobTitle", value: "Junior Miner" },
            { label: "Start / End Date", key: "date", value: "Junior Miner" },
            { label: "Location", key: "place", value: "Junior Miner" },
            {
              label: "Description",
              key: "desc",
              value: "Junior Miner",
              isTextArea: true,
            },
          ],
        },
        {
          key: 1,
          subItems: [
            { label: "Company", key: "company", value: "Mini Miners C.O." },
            { label: "Job Title", key: "jobTitle", value: "Grand Miner" },
            {
              label: "Start / End Date",
              key: "date",
              value: "Jun 1982 / Apr 2034",
            },
            { label: "Location", key: "place", value: "Red Moon" },
            {
              label: "Description",
              key: "desc",
              value: "Mining mostly.",
              isTextArea: true,
            },
          ],
        },
      ],
    },
    {
      title: "Additional Information",
      key: "additionalInfo",
      isList: true,
      items: [
        {
          label: "Title",
          key: 0,
          value: "Skills",
          subItems: [
            { key: 0, value: "Sculpting" },
            { key: 1, value: "Modeling" },
            { key: 2, value: "Texturing" },
          ],
        },
        {
          label: "Title",
          key: 1,
          value: "Software",
          subItems: [
            { key: 0, value: "Blender" },
            { key: 1, value: "Zbrush" },
            { key: 2, value: "Photoshop" },
          ],
        },
      ],
    },
  ],
};
export const DataContext = createContext("");
