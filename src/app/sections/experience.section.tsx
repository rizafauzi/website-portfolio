import { Suspense } from "react";

import { Layout } from "@/components";
import { experiences } from "@/constants/experience";
import { getCompanies } from "@/services/skills";
import { Company } from "@/types";

import { ExperienceCard } from "../components";

import styles from "../home.module.scss";

const ExperienceSection = async () => {
  const data = await getCompanies();

  if (!data) {
    return <div />;
  }

  return (
    <Layout>
      <div className={styles.experience}>
        <div className={styles.grid1}>
          {data
            .filter((_, index) => index % 2 === 0)
            .map(item => (
              <ExperienceCard key={item.slug} data={item} />
            ))}
        </div>
        <div className={styles.line} />
        <div className={styles.grid2}>
          {data
            .filter((_, index) => index % 2)
            .map(item => (
              <ExperienceCard key={item.slug} data={item} isRight />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default ExperienceSection;
