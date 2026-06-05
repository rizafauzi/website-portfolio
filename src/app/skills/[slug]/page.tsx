import Link from "next/link";

import { DetailGrid, DetailShell, PrevNext, SectionHeading, SkillSummary, Text, TopBack } from "@/components";
import { getProjects } from "@/services/project";

import styles from "./skill-detail.module.scss";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getProjects();
  const skillSlugs = new Set<string>();

  projects?.forEach(project => {
    project.techUsed?.forEach(tech => {
      skillSlugs.add(tech.slug);
    });
  });

  return Array.from(skillSlugs).map(slug => ({ slug }));
}

async function getSkillBySlug(slug: string) {
  const projects = await getProjects();
  const relatedProjects = projects?.filter(p => p.techUsed?.some(t => t.slug === slug)) || [];

  if (!relatedProjects.length) return null;

  const skill = relatedProjects[0].techUsed?.find(t => t.slug === slug);
  return { ...skill, relatedProjects };
}

interface SkillDetailProps {
  params: { slug: string };
}

const SkillDetail = async (props: SkillDetailProps) => {
  const { params } = props;
  const skillData = await getSkillBySlug(params.slug);

  if (!skillData) {
    return <div>Skill not found</div>;
  }

  const { label, imageUrl, firstColor, secondColor, url, relatedProjects } = skillData as any;

  return (
    <main>
      <TopBack href="/#skills" />

      <DetailShell>
        <DetailGrid>
          <SkillSummary
            label={label}
            imageUrl={imageUrl}
            firstColor={firstColor}
            secondColor={secondColor}
            url={url}
            projectCount={relatedProjects.length}
          />

          <div className={styles.content}>
            <section className={styles.detailSummary} id="summary">
              <Text tag="span" size="xsmall" color="grey-600" className={styles.eyebrow}>
                Technology · Skill
              </Text>

              <Text tag="h1" size="d-xlarge" color="white" className={styles.heading}>
                <em>{label}</em>
              </Text>

              <Text tag="p" size="large" color="grey-500" className={styles.description}>
                This is a dummy description for {label}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </section>

            {/* PROJECTS USING THIS SKILL */}
            <section className={styles.section} id="projects">
              <SectionHeading num="02" title="Projects" />

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
                href: "/#skills",
                label: "Back to",
                name: "All Skills",
                dir: "prev",
              },
            ]}
          />
        </section>
      </DetailShell>
    </main>
  );
};

export default SkillDetail;
