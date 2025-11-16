import { Suspense } from "react";

import ExperienceSection from "@/app/sections/experience.section";
import {
  EducationCard,
  ExperienceCard,
  Memoji,
  ProfileCard,
  ProjectCard,
  SkillCard,
} from "@/components";
import { Image, Layout, RunningText, Text, TypingText } from "@/components";
import { education } from "@/constants/education";

import { ExpertiseSection, ProjectSection } from "./sections";

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
        <RunningText color="#bbffb7" className="mt-[5vh]">
          Sampurasun! 안녕하세요! Hello! もしもし! Hi! Sampurasun! 안녕하세요!
          Hello! もしもし! Hi! Sampurasun! 안녕하세요! Hello! もしもし! Hi!
        </RunningText>
        <Layout>
          <div className={styles.entryCard}>
            <TypingText
              weight="semibold"
              size="d-small"
              color="white"
              sequence={[
                "Hello!",
                1000,
                "Hi!",
                1000,
                "Hi! I'm Riza Fauzi",
                10000,
              ]}
            />
            <Memoji />
            <Text color="white" size="large" weight="semibold">
              Software Engineer • UI Designer • Fulltime Lerner
            </Text>
            <Text color="white">Resume</Text>
            <Text color="white">Portfolio</Text>
          </div>
        </Layout>
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
      <Suspense>
        <ExpertiseSection />
      </Suspense>
      <RunningText color="#b7bdff">WORK-EXPERIENCES</RunningText>
      <Suspense>
        <ExperienceSection />
      </Suspense>
      <RunningText color="#fffeb7">CONTACT</RunningText>
      <Layout>
        {education.map((item) => (
          <EducationCard data={item} key={item.university} />
        ))}
      </Layout>
    </main>
  );
};

export default HomePage;
