import { Suspense } from "react";

import {
  EducationCard,
  ExperienceCard,
  IntroCard,
  ProfileCard,
  ProjectCard,
  SkillCard,
} from "@/app/components";
import ExperienceSection from "@/app/sections/experience.section";
import { Image, Layout, RunningText } from "@/components";
import { education } from "@/constants/education";
import { experiences } from "@/constants/experience";
import { projects } from "@/constants/projects";
import { skills } from "@/constants/skills";

import { ProjectSection, SkillSection } from "./sections";

import styles from "./home.module.scss";

const HomePage = async () => {
  return (
    <main className={styles.container}>
      <div className={styles.entry}>
        <Image
          fill
          alt="copy"
          className={styles.backgroundImg}
          src="/assets/images/background_home.jpg"
        />
        <RunningText color="#bbffb7" className="mt-[5vh]">
          Sampurasun! 안녕하세요! Hello! もしもし! Hi! Sampurasun! 안녕하세요! Hello! もしもし! Hi!
          Sampurasun! 안녕하세요! Hello! もしもし! Hi!
        </RunningText>
        <Layout>
          <IntroCard />
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
        <SkillSection />
      </Suspense>

      {/* <Layout>
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
      </Layout> */}
      <RunningText color="#b7bdff">WORK-EXPERIENCES</RunningText>
      <Suspense>
        <ExperienceSection />
      </Suspense>
      <RunningText color="#fffeb7">CONTACT</RunningText>
      <Layout>
        {education.map(item => (
          <EducationCard data={item} key={item.university} />
        ))}
      </Layout>
    </main>
  );
};

export default HomePage;
