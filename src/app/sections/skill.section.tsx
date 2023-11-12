import { Suspense } from "react";

import { Image, Layout, RunningText, Text } from "@/components";
import { education } from "@/constants/education";
import { experiences } from "@/constants/experience";
import { projects } from "@/constants/projects";
import { skills } from "@/constants/skills";
import { getExpertise } from "@/services/skills";

import { SkillCard } from "../components";

import styles from "../home.module.scss";

const SkillSection = async () => {
  const data = await getExpertise();
  return (
    <Layout>
      {data?.map(item => (
        <div key={item.title}>
          <Text color="white">{item.title}</Text>
          <Text color="white">{item.description}</Text>
          {item.techUsed.map(dt => (
            <Text color="white" key={dt.label}>
              {dt.label}
            </Text>
          ))}
        </div>
      ))}
    </Layout>
  );
};

export default SkillSection;
