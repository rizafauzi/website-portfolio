import { Suspense } from "react";

import { ProjectCard } from "@/app/components";
import { Layout, Text } from "@/components";
import { projects } from "@/constants/projects";
import { getProjects } from "@/services/project";

import styles from "../home.module.scss";

const ProjectSection = async () => {
  const data = await getProjects();

  if (!data?.length) {
    return <div />;
  }

  return (
    <Layout>
      <div className={styles.project}>
        <div className={styles.grid}>
          <ProjectCard data={data[0]} minHeight="50vh" />
          <ProjectCard data={data[1]} minHeight="50vh" />
        </div>
        <div className={styles.grid}>
          <ProjectCard data={data[2]} minHeight="40vh" />
          <ProjectCard data={data[3]} minHeight="60vh" />
        </div>
        <div className={styles.grid}>
          <ProjectCard data={data[4]} minHeight="60vh" />
          <ProjectCard data={data[5]} minHeight="40vh" />
        </div>
      </div>
      <div className={styles.cta}>
        <Text weight="semibold" color="white">
          See More
        </Text>
      </div>
    </Layout>
  );
};

export default ProjectSection;
