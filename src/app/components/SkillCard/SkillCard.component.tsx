import Link from "next/link";

import { Image, Text } from "@/components";

import styles from "./SkillCard.module.scss";

interface ISkillCard {
  img: string;
  slug: string;
  label: string;
}

const SkillCard = ({ data }: { data: ISkillCard }) => {
  const { img, label, slug } = data;
  return (
    <Link href={`/skills/${slug}`} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.projects}>
          <Text color="white">Projects made with {label}</Text>
        </div>
        <Image alt={slug} src={img} width={30} height={30} />
        <Text color="white" size="small" weight="semibold">
          {label}
        </Text>
      </div>
    </Link>
  );
};

export default SkillCard;
