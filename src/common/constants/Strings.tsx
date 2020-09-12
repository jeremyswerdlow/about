import {
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import React from "react";

export const links = [
  {
    title: "About Me",
    link: "#about",
  },
  {
    title: "Experience",
    link: "#jobs",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Portfolio",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
]

export const welcome = {
  greeting: "Hey, I'm",
  name: "Jeremy Swerdlow.",
  statement: "I deliver scalable, resilient services.",
  summary: "I'm a software engineer living in Los Angeles, CA with experience "
  + "designing and implementing scalable backend solutions built in containerized or "
  + "serverless architecture.",
};

export const about = {
  header: "About Me",
  paragraphs: [
    "Hi! I'm Jeremy, a software engineer based in Los Angeles, CA.",
    "I enjoy building backends people can rely on, supporting applications, middleware "
    + "or whatever else is needed. With any project I work on, I aim to deliver a "
    + "product my customers can rely on that can be easily monitored and extended by "
    + "others as well.",
    "After graduating Earlham College in 2018, I joined Bloomberg LP's engineering "
    + "team in NYC. first providing machine learning models to enrich legal documents, "
    + "then designing and implementing a scalable framework for tests involving "
    + "containerization as part of continuous integration in an isolated environment.",
    "More recently I have joined Amazon Music's development team, helping to work on "
    + "ways for artists to connect with their fans.",
  ],
  recentSkills: {
    summary: "These are some of the technologies I've been working with most recently:",
    skills: [
      "AWS Suite",
      "Java 8",
      "Python 3",
      "React",
      "React Native",
      "TypeScript",
    ]
  }
};

export const experience = {
  header: "Where I've Worked",
  jobs: [
    {
      company: "Amazon Music",
      companyLink: "https://music.amazon.com",
      title: "Software Development Engineer",
      location: "Los Angeles, California",
      start: "Jul 2020",
      end: "Present",
      points: [
        "Provide more than 35,000 artists and labels with data and tools to better "
        + "understand and connect with fans via a cross-platform application "
        + "supported by a serverless backend running on Amazon Web Services's Lambda "
        + "with DynamoDB, being monitored using CloudWatch.",
        "Notify over 55,000,000 fans when their favorite artists are livestreaming by "
        + "allowing musicians to link their Twitch accounts to their Amazon Music "
        + "profiles.",
      ],
    },
    {
      company: "Bloomberg LP",
      companyLink: "https://www.bloomberg.com/company",
      title: "Software Engineer",
      location: "New York, New York",
      start: "Sep 2018",
      end: "Jul 2020",
      points: [
        "Orchestrated machine allocation and state for more than 10,000 builds daily "
        + "across hundreds of Jenkins instances with a stateless, distributed service "
        + "written in Python, Java and Go using Apache Kafka for queueing.",
        "Led design and development of solution to simplify and optimize user "
        + "onboarding for container-driven testing with Docker and Docker Compose in an "
        + "ephemeral, isolated environment allowing for meaningful performance metrics "
        + "in addition to testing success.",
        "Wrapped access to document enriching services in an API built with Java Spring "
        + "for use in an ingestion workflow processing more than a hundred thousand "
        + "documents daily and in a batch job marking up historic records.",
      ],
    },
    {
      company: "CoverMyMeds",
      companyLink: "https://www.covermymeds.com/main",
      title: "Data Science Intern",
      location: "Columbus, Ohio",
      start: "May 2017",
      end: "Aug 2017",
      points: [
        "Increased the F1-score of a random forest decision tree generated from more "
        + "than 300,000,000 data points with Python’s XGBoost library by more than 2%.",
        "Extended the Bokeh Python library to build a containerized standalone GUI for "
        + "business analysts to make informed decisions about client impact when "
        + "adjusting the confidence levels of our model.",
      ],
    },
    {
      company: "Clio Muse Tours",
      companyLink: "https://cliomusetours.com",
      title: "Intern",
      location: "Athens, Greece",
      start: "Feb 2017",
      end: "Apr 2017",
      points: [
        "Gathered, cleaned, categorized, and presented data to the company’s business "
        + "analysts on potential expansion locations for tours across Europe and North "
        + "America as part of an effort to provide global service via their app.",
      ],
    },
    {
      company: "Idexx Laboratories",
      companyLink: "https://www.idexx.com",
      title: "SAP Development Intern",
      location: "Portland, Maine",
      start: "May 2016",
      end: "Jul 2016",
      points: [
        "Modernized an internal enterprise resource planning tool using "
        + "SAPUI5, an XML with JavaScript controller to offer improved performance and "
        + "cross platform usability.",
      ],
    },
  ],
};

export const skills = {
  header: "Skills",
  ratingInfo: "Skills graded on a scale of 1-5, from (1: beginner) to (5: proficient)",
};

export const projects = {
  header: "Projects",
  underConstruction: "This section is under construction. Please check back later!"
}

export const contacts = {
  header: "Next Steps",
  subheader: "Say Hello!",
  summary: "I always love to hear from other people interested or involved in tech. "
  + "Please make use of each of the below means of contact to reach out, whether it's "
  + "just to ask a question or invite me to collaborate on a project. Thanks!",
  list: [
    {
      "title": "Email",
      "icon": <MailOutlined />,
      "link": "mailto:jeremyjswerdlow@gmail.com",
      "text": "jeremy.j.swerdlow@gmail.com",
    }, {
      "title": "Phone",
      "icon": <MobileOutlined />,
      "link": "tel:+1-207-712-1044",
      "text": "207 712 1044",
    }, {
      "title": "LinkedIn",
      "icon": <LinkedinFilled />,
      "link": "https://linkedin.com/in/jeremyswerdlow",
      "text": "/in/jeremyswerdlow",
    }, {
      "title": "GitHub",
      "icon": <GithubOutlined />,
      "link": "https://github.com/jeremyswerdlow",
      "text": "github.com/jeremyswerdlow",
    },
  ]
};