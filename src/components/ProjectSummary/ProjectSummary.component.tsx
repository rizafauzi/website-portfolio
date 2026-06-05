import { Image, Text } from "@/components";
import { Project } from "@/types";

import styles from "./ProjectSummary.module.scss";

interface ProjectSummaryProps {
  project: Project;
}

const ProjectSummary = ({ project }: ProjectSummaryProps) => {
  const { title, firstColor, secondColor, company, role, startedAt, endedAt, techUsed, isActive } = project;
  const gradient = `linear-gradient(160deg, ${firstColor} 0%, ${secondColor} 100%)`;

  return (
    <aside className={styles.side} style={{ "--side-grad": gradient } as any}>
      <div className={styles.logo}>
        <Image
          src={company?.image || "/assets/memoji_mac.png"}
          alt={company?.companyName || "Company"}
          width={80}
          height={80}
        />
      </div>

      <Text tag="h2" size="d-small" color="white" className={styles.sideTitle}>
        {title}
      </Text>
      <Text tag="span" size="small" color="grey-500" className={styles.role}>
        {company?.companyName || "Project"} · {role}
      </Text>

      <div className={styles.metadata}>
        <Text tag="label" size="xsmall" color="grey-500" weight="semibold" className={styles.metaLabel}>
          Year
        </Text>
        <Text tag="span" size="xsmall" color="grey-400">
          {startedAt?.split("-")[0]} — {endedAt?.split("-")[0]}
        </Text>
        <Text tag="label" size="xsmall" color="grey-500" weight="semibold" className={styles.metaLabel}>
          Role
        </Text>
        <Text tag="span" size="xsmall" color="grey-400">
          {role}
        </Text>
        <Text tag="label" size="xsmall" color="grey-500" weight="semibold" className={styles.metaLabel}>
          Status
        </Text>
        <Text tag="span" size="xsmall" color="grey-400">
          {isActive ? "Active" : "Completed"}
        </Text>
      </div>

      <div className={styles.divider} />

      <Text tag="span" size="small" color="grey-400" className={styles.tocLabel}>
        On this page
      </Text>
      <nav className={styles.toc}>
        <a href="#summary" className={styles.tocLink}>
          <Text tag="span" size="xsmall" color="grey-500">
            01 Summary
          </Text>
        </a>
        <a href="#problem" className={styles.tocLink}>
          <Text tag="span" size="xsmall" color="grey-500">
            02 Problem
          </Text>
        </a>
        <a href="#solution" className={styles.tocLink}>
          <Text tag="span" size="xsmall" color="grey-500">
            03 Solution
          </Text>
        </a>
        <a href="#architecture" className={styles.tocLink}>
          <Text tag="span" size="xsmall" color="grey-500">
            04 Architecture
          </Text>
        </a>
        <a href="#gallery" className={styles.tocLink}>
          <Text tag="span" size="xsmall" color="grey-500">
            05 Screenshots
          </Text>
        </a>
      </nav>

      <div className={styles.divider} />

      <Text tag="span" size="small" color="grey-400" className={styles.stackLabel}>
        Stack
      </Text>
      <div className={styles.stack}>
        {techUsed?.map(tech => (
          <Text key={tech.slug} tag="span" size="xsmall" color="grey-400" className={styles.pill}>
            {tech.label}
          </Text>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.links}>
        <a href={company?.website || "#"} target="_blank" rel="noopener noreferrer">
          <Text tag="span" size="small" color="white" weight="semibold">
            ↗ Visit
          </Text>
        </a>
      </div>
    </aside>
  );
};

export default ProjectSummary;
