import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";

import { Image, Text } from "@/components";
import { Company } from "@/types";

import styles from "./ExperienceCard.module.scss";

type ExperienceCard = {
  className?: string;
  data: Company;
  isRight?: boolean;
};

const ExperienceCard = ({ data, isRight, className }: ExperienceCard) => {
  const {
    // background,
    companyName,
    image,
    role,
    website,
    startedAt,
    endedAt,
    slug,
    firstColor,
    secondColor,
  } = data;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.experienceCard}>
        <Image width={60} height={60} alt={slug} src={image} className={styles.logo} />
        <Text color="white" size="xxxlarge" weight="semibold">
          {companyName}
        </Text>
        <Text color="white" className="opacity-70" size="large">
          {role}
        </Text>

        <div className={styles.circle}>
          <Image
            width={40}
            height={40}
            alt="arrow"
            className={styles.img}
            src="/assets/icons/arrow.icon.svg"
          />
        </div>

        <div className={styles.hiddenHover}>
          <div className={styles.year}>
            <Text color="white">
              {dayjs(startedAt).format("MMMM YYYY")} -{" "}
              {endedAt ? dayjs(endedAt).format("MMMM YYYY") : "Present"}
            </Text>
          </div>

          <hr />

          <div className={styles.skills}>
            <div className={styles.skill}>
              <Text color="white">Next JS</Text>
            </div>
            <div className={styles.skill}>
              <Text color="white">Next JS</Text>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          // background: `linear-gradient(135deg, #4aa8a8 0%, #22762b 100%)`,
          background: `linear-gradient(135deg, ${firstColor} 0%, ${secondColor} 100%)`,
        }}
        className={isRight ? styles.rightBackdrop : styles.backdrop}
      />
    </div>
  );
};

export default ExperienceCard;
