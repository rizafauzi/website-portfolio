import React from "react";
import classNames from "classnames";

import { Text } from "@/components";
import { Expertise } from "@/types";

import SkillBubble from "../SkillBubble";

import styles from "./ExpertiseCard.module.scss";

interface IExpertiseCard {
  className?: string;
  data: Expertise;
}

const ExpertiseCard = ({ data, className }: IExpertiseCard) => {
  const { description, techUsed, title } = data;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.backdrop} />
      <div key={title} className={styles.card}>
        <div className="pt-6 px-6">
          <Text color="white" size="d-small" weight="semibold" tag="h2" className="mb-4">
            {title}
          </Text>
          <Text color="white" opacity={0.5} className="mb-4">
            {description}
          </Text>
        </div>
        <div className="relative h-20 mb-2">
          <Text color="white" weight="semibold" className="ml-6 my-2">
            Tech used:
          </Text>
          <SkillBubble data={techUsed} className="px-6" />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
