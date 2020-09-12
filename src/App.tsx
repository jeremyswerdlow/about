import React, { FC } from 'react';
import { Layout } from 'antd';
import { SiteMenu } from './SiteMenu';
import { ContactSidebar } from './ContactSidebar';
import { contacts, links, welcome, about, experience, ratings, skills, projects } from './common';
import { WelcomeSection, AboutSection, SkillsSection, ProjectSection } from './sections';
import { ExperienceSection } from './sections/ExperienceSection';
import { ContactSection } from './sections/ContactSection';

const App: FC = () => {
  return (
    <Layout>
      <Layout.Header style={{padding: "0px", position: "fixed", width: "100%", zIndex: 100}} >
        <SiteMenu links={links} />
      </Layout.Header>
      <Layout>
        <ContactSidebar contacts={contacts.list} />
        <Layout.Content style={{margin: "175px 125px 50px 125px", alignItems: "end"}} >
          <WelcomeSection welcome={welcome} />
          <AboutSection about={about} />
          <ExperienceSection experience={experience} />
          <SkillsSection skills={skills} ratings={ratings} />
          <ProjectSection projects={projects} />
          <ContactSection contacts={contacts} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default App;
