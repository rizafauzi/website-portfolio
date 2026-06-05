import { DetailGrid, DetailShell, HTMLRenderer, InfiniteGallery, PrevNext, ProjectSummary, SectionHeading, Text, TopBack } from "@/components";
import { getProjects } from "@/services/project";
import { getProjectAssets } from "@/services/projectAssets";

import styles from "./project-detail.module.scss";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects?.map(p => ({ slug: p.slug })) || [];
}

async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects?.find(p => p.slug === slug);
}

interface ProjectDetailProps {
  params: { slug: string };
}

const ProjectDetail = async (props: ProjectDetailProps) => {
  const { params } = props;
  const project = await getProjectBySlug(params.slug);

  console.info('project: ', project);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, description, summary, startedAt, details } = project;
  const projectAssets = await getProjectAssets(params.slug);

  return (
    <main>
      <TopBack href="/#projects" />

      <DetailShell>
        <DetailGrid>
          <ProjectSummary project={project} />

          {/* CONTENT */}
          <div className={styles.content}>
            {/* {project?.description} */}
            {/* 01 SUMMARY */}
            <section className={styles.detailSummary} id="summary">
              <Text tag="span" size="xsmall" color="grey-600" className={styles.eyebrow}>
                Project · {startedAt}
              </Text>

              <Text tag="h1" size="d-xlarge" color="white" className={styles.heading}>
                <em>{title}</em>
              </Text>

              <Text tag="p" size="large" color="grey-500" className={styles.tagLine}>
                {summary}
              </Text>

              <Text tag="p" size="medium" color="grey-500" className={styles.description}>
                {description}
              </Text>
            </section>

            {/* DETAILS FROM CONTENTFUL */}
            {details && <HTMLRenderer document={details as any} />}

            {/* 05 SCREENSHOTS */}
            <section className={styles.section} id="gallery">
              <SectionHeading num="05" title="Screenshots" />
            </section>
          </div>
        </DetailGrid>
      </DetailShell>

      {/* GALLERY */}
      <div className={styles.gallerySection}>
        <InfiniteGallery images={projectAssets} title="Project screenshots" />
      </div>

      {/* PREV/NEXT */}
      <DetailShell padBottom>
        <section>
          <PrevNext
            items={[
              {
                href: "/#projects",
                label: "Prev project",
                name: "Project Name",
                dir: "prev",
              },
              {
                href: "/#projects",
                label: "Next project",
                name: "Another Project",
                dir: "next",
              },
            ]}
          />
        </section>
      </DetailShell>
    </main>
  );
};

export default ProjectDetail;
