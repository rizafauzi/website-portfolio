import Link from "next/link";

import { Image, Text } from "@/components";
import { Project } from "@/types";

import SkillBubble from "../SkillBubble";

import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  data: Project;
  minHeight?: string;
};

const ProjectCard = ({ data, minHeight = "40vh" }: ProjectCardProps) => {
  const {
    slug,
    title,
    alias,
    summary,
    company,
    techUsed,
    imgMobile,
    imgDesktop,
    firstColor,
    secondColor,
  } = data;

  console.info("imgDesktop: ", imgDesktop);

  return (
    <div className={styles.container}>
      <div
        className={styles.backdrop}
        style={{
          background: `linear-gradient(to bottom right, ${firstColor}, ${secondColor})`,
        }}
      >
        <Image alt="copy" width={350} src={imgDesktop} className={styles.image1} />
        <Image alt="copy" width="100%" height={200} src={imgMobile} className={styles.image2} />
      </div>
      <div className={styles.content}>
        <div className="flex flex-row gap-2 items-center">
          <Text weight="bold" tag="h3" size="xxxlarge" color="white">
            {alias}
          </Text>
        </div>
        <Text color="white" size="small" className="opacity-70">
          {summary}
        </Text>
        <SkillBubble data={techUsed} className="pr-6" />
        <Link href={`/project/${slug}`} className={styles.cta}>
          <Text weight="semibold" color="white">
            See Detail
          </Text>
          <h1 className={styles.name}>Fajri</h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
