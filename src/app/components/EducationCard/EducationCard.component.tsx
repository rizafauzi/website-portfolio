import React from "react";
import { Image, Text } from "@/components";
import { IEducation } from "@/constants/education";
import { IExperience } from "@/constants/experience";
import classNames from "classnames";

import styles from "./EducationCard.module.scss";

interface IEducationCard {
  className?: string;
  data: IEducation;
  isRight?: boolean;
}

const EducationCard = ({ data, isRight, className }: IEducationCard) => {
  const { faculty, gpa, image, link, major, university, firstColor, secondColor } = data;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.experienceCard}>
        <div
          style={{
            background: `linear-gradient(135deg, ${firstColor} 0%, ${secondColor} 100%)`,
          }}
          className={styles.image}
        >
          <Image
            width={80}
            height={80}
            alt={university}
            className={styles.logo}
            src={`/assets/logo/${image}`}
          />
        </div>
        <div className={styles.content}>
          <Text color="white" size="d-small" weight="semibold">
            {university}
          </Text>
          <Text color="white" className="opacity-70" size="large">
            {faculty}
          </Text>
          <hr />
          <Text color="white" className="opacity-70" size="large">
            {faculty}
          </Text>
          <Text color="white" className="opacity-70" size="large">
            GPA: {gpa}
          </Text>
        </div>

        {/* <div className={styles.circle}>
          <Image
            width={40}
            height={40}
            alt="arrow"
            className={styles.img}
            src="/assets/icons/arrow.icon.svg"
          />
        </div> */}
      </div>
      <div
        style={{
          background: `linear-gradient(135deg, ${firstColor} 0%, ${secondColor} 100%)`,
        }}
        className={styles.backdrop}
      />
    </div>
  );
};

export default EducationCard;
