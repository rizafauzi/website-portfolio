import { Image, Text } from "@/components";
import { Project } from "@/types";

import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  data: Project;
  minHeight?: string;
};

const ProjectCard = ({ data, minHeight = "40vh" }: ProjectCardProps) => {
  const { summary, title, techUsed, company, firstColor, secondColor } = data;
  return (
    <div style={{ minHeight }} className={styles.container}>
      <div
        className={styles.backdrop}
        style={{
          background: `linear-gradient(to bottom right, ${firstColor}, ${secondColor})`,
        }}
      >
        <Image
          alt="copy"
          width={350}
          className={styles.image1}
          src={`/assets/projects/bibit_desktop_1.png`}
        />
        <Image
          alt="copy"
          width="100%"
          height={200}
          className={styles.image2}
          src={`/assets/projects/bibit_mobile_1.png`}
        />
      </div>
      <div className={styles.content}>
        <div className="flex flex-row gap-2 items-center mb-1">
          <Image alt="copy" width={30} height={30} src={company?.image} className={styles.logo} />
          <Text weight="bold" size="large" color="white">
            {title}
          </Text>
        </div>
        <Text color="white" size="small" className="opacity-70">
          {summary}
        </Text>
        <button className={styles.cta}>
          <Text weight="semibold" color="white">
            See Detail
          </Text>
        </button>
        <Text color="white" className="mt-4">
          Tech stack:
        </Text>
        <div className={styles.techWrapper}>
          <div className={styles.techStack}>
            {techUsed.map(item => (
              <button className={styles.stack} key={item.slug}>
                <Image
                  alt="copy"
                  width={20}
                  height={20}
                  src={item.imageUrl}
                  className={styles.logo}
                />
                <Text weight="semibold" color="white">
                  {item.label}
                </Text>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
