"use client";

import { motion } from "framer-motion";
import styles from "./PulseRings.module.scss";

// Timing constants (dalam detik)
const GROW_DURATION = 1.2;
const HOLD_DURATION = 3;
const SHRINK_DURATION = 1.2;
const STAGGER_TRIGGER = GROW_DURATION * 0.5; // 50% dari grow duration

// Total cycle: Small grow + stagger to Medium + stagger to Large + hold + reverse cascade
const CYCLE_DURATION = GROW_DURATION + STAGGER_TRIGGER * 2 + HOLD_DURATION + SHRINK_DURATION + STAGGER_TRIGGER * 2;

// Helper function untuk hitung times array (fraksi 0-1 dari total cycle)
const getTimes = (startTime: number, endGrowTime: number, endShrinkTime: number): number[] => [
  startTime / CYCLE_DURATION, // mulai (scale: 1)
  endGrowTime / CYCLE_DURATION, // capai puncak (scale: max)
  (GROW_DURATION + STAGGER_TRIGGER * 2 + HOLD_DURATION) / CYCLE_DURATION, // hold selesai, mulai shrink (scale: max)
  endShrinkTime / CYCLE_DURATION, // selesai shrink (scale: 1)
  1, // back to start
];

// Timeline untuk masing-masing circle
const smallStartTime = 0;
const smallEndGrowTime = GROW_DURATION;
const smallEndShrinkTime = GROW_DURATION + STAGGER_TRIGGER * 2 + HOLD_DURATION + SHRINK_DURATION;

const mediumStartTime = STAGGER_TRIGGER;
const mediumEndGrowTime = STAGGER_TRIGGER + GROW_DURATION;
const mediumEndShrinkTime = GROW_DURATION + STAGGER_TRIGGER * 2 + HOLD_DURATION + SHRINK_DURATION + STAGGER_TRIGGER;

const largeStartTime = STAGGER_TRIGGER * 2;
const largeEndGrowTime = STAGGER_TRIGGER * 2 + GROW_DURATION;
const largeEndShrinkTime = CYCLE_DURATION;

const PulseRings = () => {
  return (
    <div className={styles.container}>
      {/* Small circle */}
      <motion.div
        className={styles.ringSmall}
        animate={{ scale: [1, 1.1, 1.1, 1, 1] }}
        transition={{
          times: getTimes(smallStartTime, smallEndGrowTime, smallEndShrinkTime),
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium circle */}
      <motion.div
        className={styles.ringMedium}
        animate={{ scale: [1, 1.2, 1.2, 1, 1] }}
        transition={{
          times: getTimes(mediumStartTime, mediumEndGrowTime, mediumEndShrinkTime),
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large circle */}
      <motion.div
        className={styles.ringLarge}
        animate={{ scale: [1, 1.25, 1.25, 1, 1] }}
        transition={{
          times: getTimes(largeStartTime, largeEndGrowTime, largeEndShrinkTime),
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default PulseRings;
