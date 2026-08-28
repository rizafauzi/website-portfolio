import { Button, Card, TypingText, Text } from "@/components";

import { Memoji, PulseRings } from "@/app/components";
import styles from "./IntroCard.module.scss";

const IntroCard = () => {
  return (
    <Card className={styles.entryCard}>
      <div className={styles.description}>
        <div>
          <div>
            <TypingText
              color="white"
              size="d-medium"
              weight="semibold"
              sequence={["Hi!", 1000, "Hello!", 3000]}
            />
            <div />
            <TypingText
              weight="semibold"
              size="d-small"
              color="white"
              sequence={["I'm", 500, "I'm Riza!", 1000, "I'm Riza Fauzi", 10000]}
            />
          </div>

          <Text color="white" size="small" className="my-4">
            Software Engineer • UI Designer • Fulltime Lerner
          </Text>
          <Text color="white">
            I'm a frontend-leaning engineer based in Indonesia, working at the intersection of
            design and code. I'm experienced in designing and developing web & mobile apps
            with a passion for bringing delightful, human-centric experiences to life.
          </Text>
        </div>

        <div className={styles.buttons}>
          <Button label="Resume"></Button>
          <Button label="Portfolio"></Button>
        </div>
      </div>
      <div className={styles.memoji}>
        <PulseRings />
        <Memoji />
      </div>
    </Card>
  );
};

export default IntroCard;
