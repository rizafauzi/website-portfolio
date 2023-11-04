import { Suspense } from "react";

import {
  EducationCard,
  ExperienceCard,
  ProfileCard,
  ProjectCard,
  SkillCard,
} from "@/app/components";
import ExperienceSection from "@/app/sections/experience.section";
import { Image, Layout, RunningText, Text } from "@/components";
import { education } from "@/constants/education";
import { experiences } from "@/constants/experience";
import { projects } from "@/constants/projects";
import { skills } from "@/constants/skills";

import { ProjectSection } from "./sections";

import styles from "./home.module.scss";

const HomePage = async () => {
  return (
    <main className={styles.container}>
      <div className={styles.entry}>
        <Image
          alt="copy"
          width="100%"
          height="100vh"
          className={styles.backgroundImg}
          src={`/assets/images/background_home.jpg`}
        />
        <div className={styles.card}>
          <h1>Hi, I`m Riza Fauzi</h1>
          <h2>Software Engineer • UI Designer • Fulltime Lerner</h2>
          <h4>Resume</h4>
          <h4>Portfolio</h4>
        </div>
        <RunningText color="#bbffb7">
          Sampurasun! 안녕하세요! Hello! もしもし! Sampurasun! 안녕하세요! Hello! もしもし!
          Sampurasun! 안녕하세요! Hello! もしもし!
        </RunningText>
      </div>
      <RunningText color="#bbffb7">ABOUT</RunningText>
      <Layout>
        <ProfileCard />
      </Layout>
      <RunningText color="#fdffb7">PROJECTS</RunningText>
      <ProjectSection />

      <RunningText color="#ffb7ff">SOFTWARE-SKILLS</RunningText>
      {/* <Suspense fallback={<PromoSectionLoading />}>
        <PromoSection data={data} />
      </Suspense> */}

      <Layout>
        {skills.map(item => (
          <>
            <Text color="white" size="xxlarge">
              {item.title}
            </Text>
            <hr />
            <div className={styles.skillGrid}>
              {item.value.map(skill => (
                <SkillCard key={skill.slug} data={skill} />
              ))}
            </div>
          </>
        ))}
      </Layout>
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
