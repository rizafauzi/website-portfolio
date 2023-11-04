import { Suspense } from "react";

import { Image, Layout, RunningText, Text } from "@/components";
import { education } from "@/constants/education";
import { experiences } from "@/constants/experience";
import { projects } from "@/constants/projects";
import { skills } from "@/constants/skills";
import { getCompanies } from "@/services/skills";

import { SkillCard } from "../components";

import styles from "../home.module.scss";

const SkillSection = async () => {
  const data = await getCompanies();
  return (
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
  );
};

export default SkillSection;
