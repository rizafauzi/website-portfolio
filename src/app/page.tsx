import { Suspense } from "react";

import ExperienceSection from "@/app/sections/experience.section";
import {
  AboutCard,
  EducationCard,
  ExperienceCard,
  ProfileCard,
  ProjectCard,
  SkillCard,
} from "@/components";
import { Image, Layout, RunningText, Text, TypingText } from "@/components";
import { education } from "@/constants/education";

import { AboutSection, ExpertiseSection, ProjectSection } from "./sections";

import styles from "./home.module.scss";

const HomePage = async () => {
  return (
    <main className={styles.container}>
      <AboutSection />
      {/* <RunningText color="#bbffb7">ABOUT</RunningText>
      <Layout>
        <ProfileCard />
      </Layout> */}
      <RunningText color="#fdffb7">PROJECTS</RunningText>
      <ProjectSection />

      <RunningText color="#ffb7ff">SOFTWARE-SKILLS</RunningText>
      {/* <Suspense fallback={<PromoSectionLoading />}>
        <PromoSection data={data} />
      </Suspense> */}
      <Suspense>
        <ExpertiseSection />
      </Suspense>
      <RunningText color="#b7bdff">WORK-EXPERIENCES</RunningText>
      <Suspense>
        <ExperienceSection />
      </Suspense>
      <RunningText color="#fffeb7">EDUCATION</RunningText>
      <Layout>
        {education.map(item => (
          <EducationCard data={item} key={item.university} />
        ))}
      </Layout>
    </main>
  );
};

export default HomePage;
