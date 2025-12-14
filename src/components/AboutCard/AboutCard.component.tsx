import Image from "@/components/Image";
import Layout from "@/components/Layout";
import Memoji from "@/components/Memoji";
import RunningText from "@/components/RunningText";
import Text from "@/components/Text";
import TypingText from "@/components/TypingText";

import styles from "./AboutCard.module.scss";
import Link from "next/link";
import { About } from "@/types";

type AboutCardProps = {
  data: About;
};

const AboutCard = (props: AboutCardProps) => {
  const { data } = props;

  return (
    <div className={styles.container}>
      <Image
        alt="copy"
        width="100%"
        height="100vh"
        className={styles.backgroundImg}
        src={`/assets/images/background_home.jpg`}
      />
      <RunningText color="#bbffb7" className="mt-[5vh]">
        Sampurasun! 안녕하세요! Hello! もしもし! Hi! Sampurasun! 안녕하세요! Hello! もしもし! Hi!
        Sampurasun! 안녕하세요! Hello! もしもし! Hi!
      </RunningText>
      <Layout>
        <div className={styles.entryCard}>
          <div className={styles.card}>
            <div className={styles.detail}>
              <Memoji />
              <Text color="white" size="large" weight="semibold">
                {data.description}
              </Text>
            </div>
            <button className={styles.resumeBtn}>
              <Text color="white" size="large" weight="semibold">
                Resume
              </Text>
            </button>
          </div>
          <div className={styles.descCard}>
            <div className={styles.detail}>
              <TypingText
                weight="bold"
                size="d-small"
                color="white"
                sequence={["Hello!", 1000, "Hi!", 1000, `Hi! I'm ${data.name}`, 10000]}
              />
              <Text size="xlarge" className="opacity-80">
                {data.summary}
              </Text>
            </div>
            <div className={styles.ctaWrapper}>
              <Link target="_blank" href={data.githubUrl} className={styles.cta}>
                <Image width={32} height={32} alt="arrow" src="/assets/icons/github.icon.svg" />
              </Link>
              <Link target="_blank" href={data.linkedinUrl} className={styles.cta}>
                <Image width={32} height={32} alt="arrow" src="/assets/icons/linkedin.icon.svg" />
              </Link>
              <Link target="_blank" href={data.instagramUrl} className={styles.cta}>
                <Image width={32} height={32} alt="arrow" src="/assets/icons/instagram.icon.svg" />
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AboutCard;
