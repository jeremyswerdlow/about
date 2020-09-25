import React from "react";
import {
  BranchesOutlined,
  ClockCircleOutlined,
  CodeOutlined,
  DashboardOutlined,
  GithubOutlined,
  HomeOutlined,
  LinkedinFilled,
  MailOutlined,
  MobileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

export enum projectStatus {
  notStarted = "default",
  inProgress = "processing",
  stable = "success",
  blocked = "warning",
}

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
    + "team in NYC, first providing machine learning models to enrich legal documents, "
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
  header: "Experience",
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
  ratingInfo: "Skills are self-graded on a scale of 1-5, from (1: beginner) to "
  + "(5: proficient).",
};

export const projects = {
  header: "Portfolio",
  buttonText: "See the code here",
  projectList: [
    {
      title: "Grook",
      summary: "Grook is a Turing complete (TC) language meant to be a parody of the "
      + "Ook programming language, but instead of it being so easy a monkey could "
      + "write it, it's so that a Groot can.",
      link: "https://github.com/jeremyswerdlow/grook",
      image: <CodeOutlined />,
      status: projectStatus.stable,
    },
    {
      title: "Dynamic Decision Trees",
      summary: "Decision Trees are an easily understood machine learning algorithm "
      + "based on splitting data depending on a calculated value at each level of the "
      + "tree, such that the data grouped by the split is most similar. This allows "
      + "for then using the model to predict the outcome of a similarly formatted "
      + "occurrence of data. This project extends the functionality of these trees, "
      + "allowing for new data to be added even after the initial training of the tree "
      + "has completed. By doing this, the costly operation of training does not "
      + "reoccur, but instead is delayed while still benefitting from newer data.",
      link: "https://github.com/jeremyswerdlow/Dynamic-Decision-Trees",
      image: <BranchesOutlined />,
      status: projectStatus.stable
    },
    {
      title: "Personal Website",
      summary: "This website was built after starting a new position which involved "
      + "more front end development than I had done in previous experiences. It is "
      + "written in Typescript with React and the Ant Design framework.",
      link: "https://github.com/jeremyswerdlow/about",
      image: <HomeOutlined />,
      status: projectStatus.stable,
    },
    {
      title: "Isolation Clock",
      summary: "This was a way to track when I'd interacted with people during Covid. "
      + "It uses Docker to run a PostgreSQL database for storing the data, with Python "
      + "3 using Flask for the frontend API interactions. This does not provide any "
      + "user interface, but instead makes use of Python's built in CLI tooling, "
      + "argparse.",
      link: "https://github.com/jeremyswerdlow/isolation-clock",
      image: <ClockCircleOutlined />,
      status: projectStatus.notStarted,
    },
    {
      title: "Random Shuffle",
      summary: "Just a simple project I threw together to allow people to get a random "
      + "permutation of a set of options that uses all the options. Useful for teams "
      + "trying to decide an order, or shuffling a playlist of music, whatever you "
      + "need. Written in Typescript with React and Material UI.",
      link: "https://github.com/jeremyswerdlow/random-shuffle",
      image: <SyncOutlined />,
      status: projectStatus.stable,
    },
    {
      title: "OSRS Skills Dashboard",
      summary: "Old School Runescape is an MMORPG meant to capture the nostalgia of "
      + "the Runescape prior to its Evolution of Combat transformation. While this "
      + "provides an enjoyable and fun reminder of a game I love, its website leaves "
      + "much to be desired in terms of tracking your progress towards goals. This "
      + "site provides a more modern delivery of the skills tracked on the highscores "
      + "not just for OSRS itself, but for private servers as well. It relies on React "
      + "written in Typescript with Ant Design for its interface, while scraping data "
      + "from the respective websites themselves with Axios and Cheerio.",
      link: "https://github.com/jeremyswerdlow/rs-skills-dashboard",
      image: <DashboardOutlined />,
      status: projectStatus.stable,
    },
  ]
}

export const contacts = {
  header: "Contact",
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
      "key": "email",
    }, {
      "title": "Phone",
      "icon": <MobileOutlined />,
      "link": "tel:+1-207-712-1044",
      "text": "207 712 1044",
      "key": "phone",
    }, {
      "title": "LinkedIn",
      "icon": <LinkedinFilled />,
      "link": "https://linkedin.com/in/jeremyswerdlow",
      "text": "/in/jeremyswerdlow",
      "key": "linkedin",
    }, {
      "title": "GitHub",
      "icon": <GithubOutlined />,
      "link": "https://github.com/jeremyswerdlow",
      "text": "github.com/jeremyswerdlow",
      "key": "github",
    },
  ]
};