import React, { FC, createRef, RefObject } from 'react';
import { Layout } from 'antd';
import {
  contacts,
  links,
  welcome,
  about,
  experience,
  ratings,
  skills,
  projects
} from './common';
import { ContactSidebar } from './ContactSidebar';
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  ProjectSection,
  SkillsSection,
  WelcomeSection,
} from './sections';
import { SiteMenu } from './SiteMenu';

const App: FC = () => {

  const sectionList = links.map(({ link }) => link);
  sectionList.push("#welcome");
  const sectionReducer = (
    accumulator: {[key: string]: RefObject<HTMLDivElement>}, val: string
  ) => {
    accumulator[val] = createRef<HTMLDivElement>()
    return accumulator
  };
  const sectionRefMap = sectionList.reduce(sectionReducer, {});

  const scrollIntoView = (obj: {key: string}) => {
    sectionRefMap[obj.key]!.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Layout>
      <Layout.Header style={{padding: "0px", position: "fixed", width: "100%", zIndex: 100}} >
        <SiteMenu links={links} onSectionClick={scrollIntoView}/>
      </Layout.Header>
      <Layout>
        <ContactSidebar contacts={contacts.list} />
        <Layout.Content style={{margin: "0px 125px 50px 125px", alignItems: "end"}} >
          <WelcomeSection welcome={welcome} ref={sectionRefMap["#welcome"]}/>
          <AboutSection about={about} ref={sectionRefMap["#about"]}/>
          <ExperienceSection experience={experience} ref={sectionRefMap["#jobs"]}/>
          <SkillsSection skills={skills} ratings={ratings} ref={sectionRefMap["#skills"]}/>
          <ProjectSection projects={projects} ref={sectionRefMap["#projects"]} />
          <ContactSection contacts={contacts} ref={sectionRefMap["#contact"]}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default App;
