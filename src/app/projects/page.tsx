import { Image, Layout, Text } from "@/components";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ProjectThumbnail from "@/components/ProjectThumbnail";
// import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/services/project";

import styles from './projects.module.scss'

const ProjectPage = async () => {
  const data = await getProjects();

  return (
    <Layout>
      <Header title="PROJECTS" />
      <div className={styles.container}>
        {data?.map(item => (
          <ProjectCard data={item} key={item.alias} />
        ))}
      </div>
    </Layout>
  )
};

export default ProjectPage;
