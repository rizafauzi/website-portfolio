import React from "react";
import { Dancing_Script, Open_Sans } from "next/font/google";

import { textColor, textSize, textWeight } from "./Text.style";
import { IText } from "./Text.type";

export const yesevaOne = Dancing_Script({
  variable: "--dancing-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const openSans = Open_Sans({
  variable: "--open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const Text = ({
  tag,
  ellipsis,
  className = "",
  size = "medium",
  weight = "normal",
  color = "text-500",
  dangerouslySetInnerHTML,
  children,
}: IText) => {
  const Tag = tag || "p";
  const heading = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag || "");

  return (
    <Tag
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={heading ? yesevaOne.style : openSans.style}
      className={`${heading ? yesevaOne.className : openSans.className} ${className} ${textWeight(
        weight,
      )} ${textSize(size)} ${textSize(size, "lg")} ${textColor(color)} ${
        ellipsis ? "truncate" : ""
      }`}
    >
      {children}
    </Tag>
  );
};

export default Text;
