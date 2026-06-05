import Link from "next/link";

import { Text } from "@/components";

import styles from "./PrevNext.module.scss";

export interface PrevNextItem {
  href: string;
  label: string;
  name: string;
  dir: "prev" | "next";
}

interface PrevNextProps {
  items: PrevNextItem[];
}

const PrevNext = ({ items }: PrevNextProps) => {
  return (
    <div className={styles.prevnext}>
      {items.map(item => (
        <Link key={`${item.dir}-${item.href}`} href={item.href} className={styles.pnCard}>
          <Text
            tag="span"
            size="d-medium"
            color={item.dir === "prev" ? "raspberry" : "turq"}
            className={styles.arrow}
          >
            {item.dir === "prev" ? "←" : "→"}
          </Text>
          <Text tag="span" size="xsmall" color="grey-600" className={styles.lbl}>
            {item.label}
          </Text>
          <Text tag="span" size="xlarge" color="white" weight="semibold" className={styles.name}>
            {item.name}
          </Text>
        </Link>
      ))}
    </div>
  );
};

export default PrevNext;
