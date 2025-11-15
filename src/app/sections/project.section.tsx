import { indexOf, orderBy } from "lodash";
import Link from "next/link";

import { Layout, Text } from "@/components";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import { getProjectConfig } from "@/services/configuration";
import { getProjects } from "@/services/project";

import styles from "../home.module.scss";

const ProjectSection = async () => {
  const rawData = await getProjects();
  const config = await getProjectConfig();
  const data = orderBy(
    rawData?.filter(dt => config.includes(dt.slug)),
    [project => indexOf(config, project.slug)],
    ["asc"],
  );

  console.info("data: ", data?.map(dt => dt?.slug));
  console.info("data[0]: ", data[0]?.slug);

  if (!data?.length) {
    return <div />;
  }

  return (
    <Layout>
      <div className={styles.project}>
        <div className={styles.grid}>
          <ProjectThumbnail data={data[0]} minHeight="50vh" />
          <ProjectThumbnail data={data[3]} minHeight="50vh" />
        </div>
        <div className={styles.grid}>
          <ProjectThumbnail data={data[1]} minHeight="40vh" />
          <ProjectThumbnail data={data[4]} minHeight="60vh" />
        </div>
        <div className={styles.grid}>
          <ProjectThumbnail data={data[2]} minHeight="60vh" />
          <ProjectThumbnail data={data[5]} minHeight="40vh" />
        </div>
      </div>
      <Link href="/projects" className={styles.cta}>
        <Text weight="semibold" color="white">
          See More
        </Text>
      </Link>
    </Layout>
  );
};

export default ProjectSection;
