import { Image, Text } from "@/components";

import styles from "./SkillSummary.module.scss";

interface SkillSummaryProps {
  label: string;
  imageUrl?: string;
  firstColor?: string;
  secondColor?: string;
  url?: string;
  projectCount: number;
}

const SkillSummary = ({
  label,
  imageUrl,
  firstColor,
  secondColor,
  url,
  projectCount,
}: SkillSummaryProps) => {
  const resolvedImageUrl = imageUrl ?? "/assets/logo/default.png";
  const resolvedFirstColor = firstColor ?? "#FF5C7C";
  const resolvedSecondColor = secondColor ?? "#C846FF";
  const gradient = `linear-gradient(160deg, ${resolvedFirstColor} 0%, ${resolvedSecondColor} 100%)`;

  return (
    <aside className={styles.side} style={{ "--side-grad": gradient } as any}>
      <div className={styles.logo}>
        <Image src={resolvedImageUrl} alt={label} width={80} height={80} />
      </div>

      <Text tag="h2" size="d-small" color="white" className={styles.sideTitle}>
        {label}
      </Text>

      <div className={styles.divider} />

      <Text tag="span" size="small" color="grey-400" className={styles.linkLabel}>
        Official Site
      </Text>
      <div className={styles.links}>
        <a href={url || "#"} target="_blank" rel="noopener noreferrer">
          <Text tag="span" size="small" color="white" weight="semibold">
            ↗ Visit
          </Text>
        </a>
      </div>

      <div className={styles.divider} />

      <Text tag="span" size="small" color="grey-400" className={styles.statsLabel}>
        Usage Stats
      </Text>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <Text tag="span" size="d-small" color="white" weight="semibold">
            {projectCount}
          </Text>
          <Text tag="span" size="xsmall" color="grey-500">
            Projects
          </Text>
        </div>
        <div className={styles.stat}>
          <Text tag="span" size="d-small" color="white" weight="semibold">
            3+
          </Text>
          <Text tag="span" size="xsmall" color="grey-500">
            Years
          </Text>
        </div>
      </div>
    </aside>
  );
};

export default SkillSummary;
