import Link from "next/link";

import { DetailGrid, DetailShell, ExperienceSummary, PrevNext, SectionHeading, Text, TopBack } from "@/components";
import { getProjects } from "@/services/project";

import styles from "./experience-detail.module.scss";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getProjects();
  const companySlugs = new Set<string>();

  projects?.forEach(project => {
    if (project.company?.slug) {
      companySlugs.add(project.company.slug);
    }
  });

  return Array.from(companySlugs).map(slug => ({ slug }));
}

async function getExperienceBySlug(slug: string) {
  const projects = await getProjects();
  const relatedProjects = projects?.filter(p => p.company?.slug === slug) || [];

  if (!relatedProjects.length) return null;

  const company = relatedProjects[0].company;
  return { ...company, relatedProjects };
}

interface ExperienceDetailProps {
  params: { slug: string };
}

const ExperienceDetail = async (props: ExperienceDetailProps) => {
  const { params } = props;
  const experienceData = await getExperienceBySlug(params.slug);

  if (!experienceData) {
    return <div>Experience not found</div>;
  }

  const { companyName, companyAlias, image, website, startedAt, endedAt, role, accomplishments, relatedProjects, firstColor, secondColor } = experienceData as any;

  const startYear = startedAt?.split("-")[0];
  const endYear = endedAt?.split("-")[0];

  return (
    <main>
      <TopBack href="/#work" />

      <DetailShell>
        <DetailGrid>
          <ExperienceSummary
            companyName={companyName}
            image={image}
            firstColor={firstColor}
            secondColor={secondColor}
            role={role}
            startedAt={startedAt}
            endedAt={endedAt}
            website={website}
          />

          <div className={styles.content}>
            <section className={styles.detailSummary} id="summary">
              <Text tag="span" size="xsmall" color="grey-600" className={styles.eyebrow}>
                Company · Experience
              </Text>

              <Text tag="h1" size="d-xlarge" color="white" className={styles.heading}>
                <em>{companyName}</em>
              </Text>

              <Text tag="p" size="large" color="grey-500" className={styles.role}>
                {role}
              </Text>

              <Text tag="p" size="medium" color="grey-500" className={styles.description}>
                Worked as {role} at {companyName} from {startYear} to {endYear}. Contributed to multiple projects and initiatives.
              </Text>
            </section>

            {/* ACCOMPLISHMENTS */}
            <section className={styles.section} id="accomplishments">
              <SectionHeading num="02" title="Accomplishments" />

              <ul className={styles.accomplishmentsList}>
                {accomplishments?.map((achievement: any, idx: number) => (
                  <li key={idx}>
                    <Text tag="span" size="medium" color="grey-500">
                      {achievement}
                    </Text>
                  </li>
                ))}
              </ul>
            </section>

            {/* PROJECTS */}
            <section className={styles.section} id="projects">
              <SectionHeading num="03" title="Projects" />

              <div className={styles.projectsList}>
                {relatedProjects.map((project: any) => (
                  <Link key={project.slug} href={`/projects/${project.slug}`} className={styles.projectItem}>
                    <Text tag="span" size="medium" color="white" weight="semibold">
                      {project.title}
                    </Text>
                    <Text tag="span" size="small" color="grey-500">
                      {project.summary}
                    </Text>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </DetailGrid>
      </DetailShell>

      {/* PREV/NEXT */}
      <DetailShell padBottom>
        <section>
          <PrevNext
            items={[
              {
                href: "/#work",
                label: "Back to",
                name: "All Experiences",
                dir: "prev",
              },
            ]}
          />
        </section>
      </DetailShell>
    </main>
  );
};

export default ExperienceDetail;
