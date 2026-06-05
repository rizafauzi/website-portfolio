import Link from "next/link";

import { Text } from "@/components";

import styles from "./TopBack.module.scss";

interface TopBackProps {
  href: string;
  label?: string;
}

const TopBack = ({ href, label = "Back home" }: TopBackProps) => {
  return (
    <Link href={href} className={styles.topback}>
      <span aria-hidden="true">←</span>
      <Text tag="span" size="small" color="white">
        {label}
      </Text>
    </Link>
  );
};

export default TopBack;
