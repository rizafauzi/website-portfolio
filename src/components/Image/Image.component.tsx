/* eslint-disable @next/next/no-img-element */
"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

import "react-lazy-load-image-component/src/effects/blur.css";

interface IImage {
  src: any;
  alt: string;
  style?: any;
  href?: string;
  quality?: number;
  priority?: boolean;
  className?: string;
  isImg?: boolean;
  height?: number | string;
  width?: number | string;
}

const Image: React.FC<IImage> = ({
  alt,
  src,
  isImg = false,
  className,
  width = 50,
  height = 50,
  style = {},
  href,
}) => {
  if (!isImg) {
    if (href) {
      return (
        <Link href={href}>
          <LazyLoadImage
            alt={alt}
            src={src}
            effect="blur"
            style={style}
            width={width}
            height={height}
            className={className}
          />
        </Link>
      );
    }

    return (
      <LazyLoadImage
        alt={alt}
        src={src}
        style={style}
        width={width}
        effect="blur"
        height={height}
        wrapperClassName={className}
      />
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <img
          alt={alt}
          src={src}
          style={style}
          width={width}
          height={height}
          className={className}
        />
      </Link>
    );
  }

  return (
    <img alt={alt} className={className} src={src} width={width} height={height} style={style} />
  );
};

export default Image;
