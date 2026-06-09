import { Fragment } from "react";
import { Image, Text } from "@/components";

import styles from "./ExperienceSummary.module.scss";

interface ExperienceSummaryProps {
  companyName: string;
  image?: string;
  firstColor?: string;
  secondColor?: string;
  role?: string;
  startedAt?: string;
  endedAt?: string;
  website?: string;
}

const ExperienceSummary = ({
  companyName,
  image,
  firstColor,
  secondColor,
  role,
  startedAt,
  endedAt,
  website,
}: ExperienceSummaryProps) => {
  const resolvedImage = image ?? "/assets/memoji_mac.png";
  const resolvedFirstColor = firstColor ?? "#FF5C7C";
  const resolvedSecondColor = secondColor ?? "#C846FF";
  const gradient = `linear-gradient(160deg, ${resolvedFirstColor} 0%, ${resolvedSecondColor} 100%)`;
  const startYear = startedAt?.split("-")[0];
  const endYear = endedAt?.split("-")[0];

  return (
    <aside className={styles.side} style={{ "--side-grad": gradient } as any}>
      <div className={styles.logo}>
        <Image src={resolvedImage} alt={companyName} width={80} height={80} />
      </div>

      <Text tag="h2" size="d-small" color="white" className={styles.sideTitle}>
        {companyName}
      </Text>
      {role && (
        <Text tag="span" size="medium" color="white" className={styles.role}>
          {role}
        </Text>
      )}

      <div className={styles.metadata}>
        <Text
          tag="label"
          size="small"
          color="grey-500"
          weight="semibold"
          className={styles.metaLabel}
        >
          Period
        </Text>
        <Text tag="span" size="small" color="grey-400">
          {startYear} — {endYear}
        </Text>
        <Text
          tag="label"
          size="small"
          color="grey-500"
          weight="semibold"
          className={styles.metaLabel}
        >
          Role
        </Text>
        <Text tag="span" size="small" color="grey-400">
          {role}
        </Text>
        <Text
          tag="label"
          size="small"
          color="grey-500"
          weight="semibold"
          className={styles.metaLabel}
        >
          Status
        </Text>
        <Text tag="span" size="small" color="grey-400">
          Ongoing
        </Text>
      </div>

      {!!website && (
        <Fragment>
          <div className={styles.divider} />

          <div className={styles.links}>
            <a href={website || "#"} target="_blank" rel="noopener noreferrer">
              <Text tag="span" size="small" color="white" weight="semibold">
                Website
              </Text>
            </a>
          </div>
        </Fragment>
      )}
    </aside>
  );
};

export default ExperienceSummary;
