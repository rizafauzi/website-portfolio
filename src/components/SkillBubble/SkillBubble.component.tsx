import { memo } from "react";
import classNames from "classnames";

import { Image, Text } from "@/components";
import { Skill } from "@/types";

import styles from "./SkillBubble.module.scss";

type SkillBubbleProps = {
  data: Skill[];
  className?: string;
};

const SkillBubble = ({ data, className }: SkillBubbleProps) => {
  return (
    <div className={styles.techWrapper}>
      <div className={classNames(styles.techStack, className)}>
        {data.map(item => (
          <button className={styles.stack} key={item.slug}>
            <Image alt="copy" width={20} height={20} src={item.imageUrl} className={styles.logo} />
            <Text weight="semibold" color="white">
              {item.label}
            </Text>
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(SkillBubble);
