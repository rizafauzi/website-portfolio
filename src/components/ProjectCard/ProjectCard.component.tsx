import Link from "next/link";

import { Image, Text } from "@/components";
import { Project } from "@/types";

import styles from "./ProjectCard.module.scss";
import { useMemo } from "react";

type ProjectCardProps = {
  data: Project;
};

const ProjectCard = ({ data }: ProjectCardProps) => {
  const { slug, alias, summary, imgMobile, imgDesktop, firstColor, secondColor } = data;

  function hashString(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  const height = useMemo(() => {
    const step = 20;
    const min = 450;
    const max = 700;
    const hash = hashString(slug + alias);
    const range = Math.floor((max - min) / step) + 1;
    return min + (hash % range) * step;
  }, [slug]);

  return (
    <div className={styles.container} style={{ height }}>
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
          <Text weight="bold" tag="h3" size="d-small" color="white">
            {alias}
          </Text>
        </div>
        <Text color="white" className="opacity-70" size="large">
          {summary}
        </Text>
        <Link href={`/projects/${slug}`} className={styles.cta}>
          <Text weight="semibold" color="white">
            See Detail
          </Text>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
