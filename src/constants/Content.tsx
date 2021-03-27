// TODO: Revamp/update content for current/ongoing project statuses, updated metrics, etc.

import React from "react";
import {
  FaAssistiveListeningSystems,
  FaClock,
  FaCodeBranch,
  FaDog,
  FaDollarSign,
  FaGamepad,
  FaGithubAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaLaptopMedical,
  FaLinkedinIn,
  FaMicroscope,
  FaMobile,
  FaMusic,
  FaPaperPlane,
  FaRandom,
  FaUserCircle,
} from "react-icons/fa";

import { ratings } from "./Ratings";

export enum ProjectStatus {
  notStarted = "default",
  inProgress = "processing",
  stable = "success",
  blocked = "warning",
}

export const welcome = {
  greeting: "Hey, my name's",
  name: "Jeremy Swerdlow.",
  statement: "I deliver robust, scalable solutions.",
  summary:
    "I'm a software engineer based out of Los Angeles, CA with experience " +
    "designing and implementing full stack services built on serverless " +
    "architecture to provide customers with what they want, when they want.",
};

export const about = {
  header: "About Me",
  paragraphs: [
    "Hi! I'm Jeremy. I'm a software engineer working at Amazon Music in Los Angeles, " +
      "California. I enjoy creating and innovating backends people can rely on.",
    "In any situation, I aim to deliver a product and level of service my customers " +
      "can rely on that can be supported and expanded by others as well.",
    "After graduating Earlham College in 2018, I joined Bloomberg LP's engineering " +
      "team in NYC, first providing machine learning models to enrich legal documents, " +
      "then designing and implementing a scalable framework for testing code " +
      "involving containerization in continuous integration within an isolated " +
      "environment.",
    "More recently I have joined Amazon Music's development team, helping to work on " +
      "ways for artists to connect with their fans.",
  ],
  recentSkills: {
    summary: "Here are some of the technologies I've used the most lately:",
    skills: [
      "AWS Suite",
      "Java 8",
      "Guice",
      "Python 3",
      "React",
      "TypeScript",
      "Cloud Development Kit (CDK)",
    ],
  },
};

export const experience = {
  header: "Experience",
  summary:
    "Below is a summary of experiences which have shaped who I am as an individual " +
    "and an engineer. It covers work, education, research, and things in between. " +
    "To see more complete information on any experience, please click on it.",
  jobs: [
    {
      company: "Amazon Music For Artists",
      companyLink: "https://artists.amazonmusic.com/",
      title: "Software Development Engineer",
      location: "Los Angeles, California",
      start: "Jul 2020",
      end: "Present",
      points: [
        "Provide more than 60,000 artists and labels with information and tools to " +
          "connect with fans based in a cross-platform application supported by a " +
          "serverless backend built with Amazon Web Services's API Gateway, Elastic " +
          "Container Service, and Lambda with DynamoDB, being monitored using " +
          "CloudWatch.",
        "Notify over 55,000,000 fans when their favorite artists are livestreaming by " +
          "allowing musicians to link their Twitch accounts to their Amazon Music " +
          "profiles.",
        "Allow artists to display their creativity outside of just their music through " +
          "curated collections of merchandise, displayed as part of their detail page.",
      ],
      icon: <FaMusic />,
    },
    {
      company: "Bloomberg LP",
      companyLink: "https://www.bloomberg.com/company",
      title: "Software Engineer",
      location: "New York, New York",
      start: "Sep 2018",
      end: "Jul 2020",
      points: [
        "Orchestrated machine allocation and state for more than 10,000 builds daily " +
          "across hundreds of Jenkins instances with a stateless, distributed service " +
          "written in Python, Java and Go using Apache Kafka for queueing.",
        "Led design and development of a testing framekwork to simplify and optimize " +
          "user onboarding for container-driven testing with Docker and Docker " +
          "Compose in an ephemeral, isolated environment allowing for meaningful " +
          "performance metrics in addition to testing success.",
        "Wrapped access to document enriching services in an API built with Java Spring " +
          "for use in an ingestion workflow processing more than a hundred thousand " +
          "documents daily and in a batch job marking up historic records.",
      ],
      icon: <FaDollarSign />,
    },
    {
      company: "Icelandic Field Studies, Earlham College",
      companyLink:
        "https://fieldscience.cs.earlham.edu/index.php/icelandic-field-studies/",
      title: "Researcher",
      location: "Multiple Locations",
      start: "Aug 2017",
      end: "Jun 2018",
      points: [
        "Ingested, transformed and enriched readings from a LiDAR sensor attached to " +
          "a UAV over network ports on a BeagleBoard, preparing for the generation " +
          "of point clouds. These generated clouds were used to track volumetric " +
          "changes and identify specific structures such as ground nests and " +
          "archaeologically significant Viking settlements.",
        "Tracked the impact of climate change YoY on the size of Iceland's " +
          "Sólheimajökull glacier.",
        "Generated three-dimensional representations of spaces using stitched images " +
          "from a UAV.",
        "Calculated and offset the carbon footprint of the research's travel, " +
          "housing, and computation to have a net-neutral impact.",
      ],
      icon: <FaMicroscope />,
    },
    {
      company: "Earlham College",
      companyLink: "https://www.earlham.edu",
      title: "Bachelor of Arts in Computer Science",
      location: "Richmond, Indiana",
      start: "Aug 2014",
      end: "May 2018",
      points: [
        "GPA (Major) - 3.76 (3.91)",
        "Collegiate Honor's",
        "Dean's List",
        "Student Researcher",
        "Work Study Recipient",
      ],
      icon: <FaGraduationCap />,
    },
    {
      company: "CoverMyMeds",
      companyLink: "https://www.covermymeds.com/main",
      title: "Data Science Intern",
      location: "Columbus, Ohio",
      start: "May 2017",
      end: "Aug 2017",
      points: [
        "Increased the F1-score of a random forest decision tree generated from more " +
          "than 300,000,000 data points with Python’s XGBoost library by more than 2%.",
        "Extended the Bokeh Python library to build a containerized standalone GUI for " +
          "business analysts to make informed decisions about client impact when " +
          "adjusting the confidence levels of our model.",
      ],
      icon: <FaLaptopMedical />,
    },
    {
      company: "Clio Muse Tours",
      companyLink: "https://cliomusetours.com",
      title: "Intern",
      location: "Athens, Greece",
      start: "Feb 2017",
      end: "Apr 2017",
      points: [
        "Gathered, cleaned, categorized, and presented data to the company’s business " +
          "analysts on potential expansion locations for tours across Europe and North " +
          "America as part of an effort to provide global service via their app.",
      ],
      icon: <FaAssistiveListeningSystems />,
    },
    {
      company: "Idexx Laboratories",
      companyLink: "https://www.idexx.com",
      title: "SAP Development Intern",
      location: "Portland, Maine",
      start: "May 2016",
      end: "Jul 2016",
      points: [
        "Modernized an internal enterprise resource planning tool using " +
          "SAPUI5, an XML with JavaScript controller to offer improved performance and " +
          "cross platform usability.",
      ],
      icon: <FaDog />,
    },
  ],
};

export const skills = {
  header: "Skills",
  summary:
    "Below is a scoring of different skills and ideas I have picked up as " +
    "part of my career trajectory. Each one is graded on a scale from 1 to 5, where 1 " +
    "indicates a basic knowledge, and 5 indicates thorough proficiency. These are " +
    "grouped by similarity and labelled accordingly in an effort to provide some " +
    "organization.",
  ratings: ratings,
};

export const projects = {
  header: "Portfolio",
  buttonText: "Check out details of the project by clicking here",
  projectList: [
    {
      title: "Grook",
      summary:
        "Grook is a Turing complete (TC) language meant to be a parody of the " +
        "Ook programming language, but instead of it being so easy a monkey could " +
        "write it, it's so that a Groot can.",
      link: "https://github.com/jeremyswerdlow/grook",
      image: <FaCodeBranch />,
      status: ProjectStatus.stable,
    },
    {
      title: "Dynamic Decision Trees",
      summary:
        "Decision Trees are an easily understood machine learning algorithm " +
        "based on splitting data depending on a calculated value at each level of the " +
        "tree, such that the data grouped by the split is most similar. This allows " +
        "for then using the model to predict the outcome of a similarly formatted " +
        "occurrence of data. This project extends the functionality of these trees, " +
        "allowing for new data to be added even after the initial training of the tree " +
        "has completed. By doing this, the costly operation of training does not " +
        "reoccur, but instead is delayed while still benefitting from newer data.",
      link: "https://github.com/jeremyswerdlow/Dynamic-Decision-Trees",
      image: <FaLaptopCode />,
      status: ProjectStatus.stable,
    },
    {
      title: "Personal Website",
      summary:
        "This website was built after starting a new position which involved " +
        "more front end development than I had done in previous experiences. It is " +
        "written in Typescript with React and the Ant Design framework.",
      link: "https://github.com/jeremyswerdlow/about",
      image: <FaUserCircle />,
      status: ProjectStatus.stable,
    },
    {
      title: "Isolation Clock",
      summary:
        "This was a way to track when I'd interacted with people during Covid. " +
        "It uses Docker to run a PostgreSQL database for storing the data, with Python " +
        "3 using Flask for the frontend API interactions. This does not provide any " +
        "user interface, but instead makes use of Python's built in CLI tooling, " +
        "argparse.",
      link: "https://github.com/jeremyswerdlow/isolation-clock",
      image: <FaClock />,
      status: ProjectStatus.notStarted,
    },
    {
      title: "Random Shuffle",
      summary:
        "Just a simple project I threw together to allow people to get a random " +
        "permutation of a set of options that uses all the options. Useful for teams " +
        "trying to decide an order, or shuffling a playlist of music, whatever you " +
        "need. Written in Typescript with React and Material UI.",
      link: "https://github.com/jeremyswerdlow/random-shuffle",
      image: <FaRandom />,
      status: ProjectStatus.stable,
    },
    {
      title: "OSRS Skills Dashboard",
      summary:
        "Old School Runescape is an MMORPG meant to capture the nostalgia of " +
        "the Runescape prior to its Evolution of Combat transformation. While this " +
        "provides an enjoyable and fun reminder of a game I love, its website leaves " +
        "much to be desired in terms of tracking your progress towards goals. This " +
        "site provides a more modern delivery of the skills tracked on the highscores " +
        "not just for OSRS itself, but for private servers as well. It relies on React " +
        "written in Typescript with Ant Design for its interface, while scraping data " +
        "from the respective websites themselves with Axios and Cheerio.",
      link: "https://github.com/jeremyswerdlow/rs-skills-dashboard",
      image: <FaGamepad />,
      status: ProjectStatus.stable,
    },
  ],
};

export const contacts = {
  header: "Contact",
  subheader: "Say Hello!",
  summary:
    "I always love to hear from other people interested or involved in tech. Please " +
    "make use of each of the below means of contact to reach out, whether it's just " +
    "to ask a question or invite me to collaborate on a project. Thanks!",
  list: [
    {
      title: "Email",
      icon: <FaPaperPlane />,
      link: "mailto:jeremyjswerdlow@gmail.com",
      text: "jeremy.j.swerdlow@gmail.com",
      key: "email",
    },
    {
      title: "Phone",
      icon: <FaMobile />,
      link: "tel:+1-207-712-1044",
      text: "207 712 1044",
      key: "phone",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com/in/jeremyswerdlow",
      text: "/in/jeremyswerdlow",
      key: "linkedin",
    },
    {
      title: "GitHub",
      icon: <FaGithubAlt />,
      link: "https://github.com/jeremyswerdlow",
      text: "github.com/jeremyswerdlow",
      key: "github",
    },
  ],
};
