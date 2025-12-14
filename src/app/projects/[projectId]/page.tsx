import { Article, Header, Image, Layout, Text } from "@/components";
import { getProjects } from "@/services/project";

import styles from "./project.module.scss";

const ProjectDetailPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params;

  const projects = await getProjects();

  const data = projects?.find(dt => dt?.slug === projectId);

  if (!data) {
    return <div />;
  }

  const { company, imgMobile, imgDesktop, summary, techStacks, title, description, details } = data;

  return (
    <Layout>
      <Header title={title} />
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <Image alt="arrow" width={250} src={imgDesktop} className={styles.imgDesktop} />
          <Image alt="arrow" width={180} src={imgMobile} className={styles.imgMobile} />
        </div>
        <div className={styles.description}>
          <Article content={details} />
        </div>
      </div>
      <div className={styles.footer}>
        <hr />
        <div className={styles.wrapper}>
          <button className={styles.otherProject}>
            <Image
              width={15}
              height={15}
              alt="arrow"
              className="rotate-225"
              src="/assets/icons/arrow.icon.svg"
            />
            <Text size="xlarge">Simobiplus</Text>
          </button>
          <button className={styles.otherProject}>
            <Text size="xlarge">Simobiplus</Text>
            <Image
              width={15}
              height={15}
              alt="arrow"
              className="rotate-45"
              src="/assets/icons/arrow.icon.svg"
            />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetailPage;
