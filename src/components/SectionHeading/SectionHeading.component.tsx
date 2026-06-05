import { Text } from "@/components";

import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  num: string;
  title: string;
}

const SectionHeading = ({ num, title }: SectionHeadingProps) => {
  return (
    <Text tag="h2" size="d-medium" color="white" className={styles.sectionTitle}>
      <span className={styles.num}>{num}</span> {title}
    </Text>
  );
};

export default SectionHeading;
