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
    accomplishments,
  } = data;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.experienceCard}>
        <div className={styles.companyTitle}>
          <Image width={60} height={60} alt={slug} src={image} className={styles.logo} />
          <div className={styles.title}>
            <Text color="white" size="xxxlarge" weight="semibold">
              {companyName}
            </Text>
            <Text color="white" className="opacity-70" size="large">
              {role}
            </Text>
          </div>
        </div>

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
          <hr />
          <ul className="list-disc ml-4">
            {accomplishments?.map(item => (
              <Text color="white" tag="li" key={item}>
                {item}
              </Text>
            ))}
          </ul>
        </div>

        <div className={styles.date}>
          <Text color="white">{dayjs(startedAt).format("MMM YYYY")}</Text>
          <Image
            width={20}
            height={20}
            alt="arrow"
            className="rotate-45"
            src="/assets/icons/arrow.icon.svg"
          />
          <Text color="white">{endedAt ? dayjs(endedAt).format("MMM YYYY") : "Present"}</Text>
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(135deg, ${firstColor} 0%, ${secondColor} 100%)`,
        }}
        className={isRight ? styles.rightBackdrop : styles.backdrop}
      />
    </div>
  );
};

export default ExperienceCard;
