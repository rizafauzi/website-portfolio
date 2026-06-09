import { Suspense } from "react";

import {
  EducationCard,
  ExperienceCard,
  Memoji,
  ProfileCard,
  ProjectCard,
  SkillCard,
} from "@/app/components";
import ExperienceSection from "@/app/sections/experience.section";
import { Button, Card, Image, Layout, RunningText, Text, TypingText } from "@/components";
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
          alt="copy"
          width="100%"
          height="100vh"
          className={styles.backgroundImg}
          src={`/assets/images/background_home.jpg`}
        />
        <RunningText color="#bbffb7" className="mt-[5vh]">
          Sampurasun! 안녕하세요! Hello! もしもし! Hi! Sampurasun! 안녕하세요! Hello! もしもし! Hi!
          Sampurasun! 안녕하세요! Hello! もしもし! Hi!
        </RunningText>
        <Layout>
          <Card className={styles.entryCard}>
              <div className={styles.description}>
                <div>
                  <div>
                    <TypingText
                      color="white"
                      size="d-medium"
                      weight="semibold"
                      sequence={["Hi!", 1000, "Hello!", 3000]}
                    />
                    <div />
                    <TypingText
                      weight="semibold"
                      size="d-small"
                      color="white"
                      sequence={["I'm", 500, "I'm Riza!", 1000, "I'm Riza Fauzi", 10000]}
                    />
                  </div>

                  <Text color="white" size="small" className="my-4">
                    Software Engineer • UI Designer • Fulltime Lerner
                  </Text>
                  <Text color="white">
                    I’m a frontend-leaning engineer based in Indonesia, working at the intersection of
                    design and code. I'm experienced in designing and developing web & mobile apps
                    with a passion for bringing delightful, human-centric experiences to life. Also
                    interested in front-end engineering and everything related to visual —
                    photography, web & graphic design.
                  </Text>
                </div>

                <div className={styles.buttons}>
                  <Button label="Resume">
                  </Button>
                  <Button label="Portfolio">
                  </Button>
                </div>
              </div>
              <Memoji />
          </Card>
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
