/* eslint-disable @next/next/no-img-element */
"use client";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import NextImage, { ImageProps as NextImageProps } from "next/image";

import "react-lazy-load-image-component/src/effects/blur.css";

type ImageProps = NextImageProps & {
  src: any;
  alt: string;
  style?: any;
  href?: string;
  quality?: number;
  priority?: boolean;
  className?: string;
  isImg?: boolean;
  height?: number;
  width?: number;
};

const Image: React.FC<ImageProps> = props => {
  const { alt, src, isImg = false, className, style = {}, href } = props;

  if (!isImg) {
    if (href) {
      return (
        <Link href={href}>
          <NextImage style={style} className={className} {...props} />
        </Link>
      );
    }

    return <NextImage style={style} className={className} {...props} />;
  }

  if (href) {
    return (
      <Link href={href}>
        <img style={style} className={className} {...props} />
      </Link>
    );
  }

  return <img alt={alt} className={className} src={src} style={style} />;
};

export default Image;
