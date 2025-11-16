import { Layout } from "@/components";
import { getExpertise } from "@/services/skills";

import ExpertiseCard from "../../components/ExpertiseCard";

import styles from "../home.module.scss";

const ExpertiseSection = async () => {
  const data = await getExpertise();
  return (
    <Layout>
      <div className={styles.expertise}>
        {data?.map(item => <ExpertiseCard key={item.title} data={item} />)}
      </div>
    </Layout>
  );
};

export default ExpertiseSection;
