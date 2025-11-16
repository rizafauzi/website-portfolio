"use client";

import { memo, useRef } from "react";
import { wrap } from "@motionone/utils";
import classNames from "classnames";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { Bebas_Neue } from "next/font/google";

import styles from "./RunningText.module.scss";

const bebasNeue = Bebas_Neue({
  variable: "--bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface ParallaxProps {
  color?: string;
  children: string;
  outlined?: boolean;
  baseVelocity: number;
}

function ParallaxText({ color, children, baseVelocity = 100, outlined = false }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const x = useTransform(baseX, v => `${wrap(-10, -20, v)}%`);
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        {Array(15)
          .fill(children)
          .map((text, idx) => (
            <span
              key={idx}
              style={{
                color: outlined ? "transparent" : color,
                WebkitTextStroke: outlined ? `1px ${color}` : "1px transparent",
              }}
              className={`${bebasNeue.className} ${outlined ? styles.outlined : styles.fill}`}
            >
              {text}
            </span>
          ))}
      </motion.div>
    </div>
  );
}

const RunningText: React.FC<{ children: string; color?: string; className?: string }> = ({
  className,
  color = "white",
  children = "Text",
}) => {
  return (
    <section className={classNames(styles.runningText, className)}>
      <ParallaxText color={color} baseVelocity={-2}>
        {children}
      </ParallaxText>
      <ParallaxText color={color} outlined baseVelocity={2}>
        {children}
      </ParallaxText>
    </section>
  );
};

export default memo(RunningText);
