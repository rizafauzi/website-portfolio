import { ColorType } from "@/styles/color.type";

export type TextSizeType =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge"
  | "d-xsmall"
  | "d-small"
  | "d-medium"
  | "d-large"
  | "d-xlarge";

export type TextTagType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "label"
  | "th"
  | "td"
  | "li";

export type TextWeightType = "bold" | "semibold" | "normal";

export interface IText {
  ellipsis?: boolean;
  color?: ColorType;
  children?: any;
  className?: any;
  opacity?: number;
  size?: TextSizeType;
  weight?: TextWeightType;
  tag?: TextTagType;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}
