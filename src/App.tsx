import styled from "@emotion/styled";
import React, { createRef, FC } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

import { AboutMe } from "./AboutMe";
import { Introduction } from "./Introduction";
import { WorkExperience } from "./experience";
import { Skills } from "./skills";
import { Portfolio } from "./portfolio";
import { Contact } from "./Contact";
import { SiteMenu } from "./SiteMenu";
import { colors } from "./constants";

const AppBody = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(25, 25, 35);
`;

const LinkButton = styled.button`
  font-family: Roboto;
  color: ${colors.primary};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  background-color: transparent;

  border: none;
  border-radius: 10px;

  user-select: none;

  margin: 0px 5px 10em 5px;
  padding: 15px;

  cursor: pointer;

  :focus {
    outline: 0;
  }

  transition: 1s ease;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: ${colors.highlight};
  }
`;

const App: FC = () => {
  const scrollTo = (ref: React.MutableRefObject<any>) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  const introRef = createRef<HTMLDivElement>();
  const aboutRef = createRef<HTMLDivElement>();
  const experienceRef = createRef<HTMLDivElement>();
  const skillRef = createRef<HTMLDivElement>();
  const portfolioRef = createRef<HTMLDivElement>();
  const contactRef = createRef<HTMLDivElement>();

  const links = [
    <LinkButton
      key="intro-link"
      id="intro-link"
      onClick={() => scrollTo(introRef)}
    >
      <FaAngleDoubleUp />
    </LinkButton>,
    <LinkButton
      key="about-link"
      id="about-link"
      onClick={() => scrollTo(aboutRef)}
    >
      About Me
    </LinkButton>,
    <LinkButton
      key="experiences-link"
      id="experiences-link"
      onClick={() => scrollTo(experienceRef)}
    >
      Experiences
    </LinkButton>,
    <LinkButton
      key="skills-link"
      id="skills-link"
      onClick={() => scrollTo(skillRef)}
    >
      Skills
    </LinkButton>,
    <LinkButton
      key="portfolio-link"
      id="portfolio-link"
      onClick={() => scrollTo(portfolioRef)}
    >
      Portfolio
    </LinkButton>,
    <LinkButton
      key="contact-link"
      id="contact-link"
      onClick={() => scrollTo(contactRef)}
    >
      Contact
    </LinkButton>,
  ];

  return (
    <AppBody>
      <SiteMenu>{links}</SiteMenu>
      <Introduction
        ref={introRef}
        onClickGetStarted={() => scrollTo(aboutRef)}
      />
      <AboutMe ref={aboutRef} sectionId="01." />
      <WorkExperience ref={experienceRef} sectionId="02." />
      <Skills ref={skillRef} sectionId="03." />
      <Portfolio ref={portfolioRef} sectionId="04." />
      <Contact ref={contactRef} sectionId="05." />
    </AppBody>
  );
};

export default App;
