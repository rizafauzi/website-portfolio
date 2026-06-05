"use client";

import { memo } from "react";
import { TypeAnimation } from "react-type-animation";

import { IText } from "../Text";
import { bebasNeue, openSans } from "../Text/Text.component";
import { textColor, textSize, textWeight } from "../Text/Text.style";

type TypingTextProps = {
  sequence: (string | number)[];
} & IText;

const TypingText = ({
  ellipsis,
  className = "",
  size = "medium",
  weight = "normal",
  color = "text-500",
  sequence,
}: TypingTextProps) => {
  return (
    <TypeAnimation
      sequence={sequence}
      style={openSans.style}
      className={`${className} ${textWeight(weight)} ${textSize(size)} ${textSize(
        size,
        "lg",
      )} ${textColor(color)} ${ellipsis ? "truncate" : ""}`}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default memo(TypingText);
