"use client";

import { Image } from "@/components";

import styles from "./InfiniteGallery.module.scss";

interface InfiniteGalleryProps {
  images: string[];
  title?: string;
}

const InfiniteGallery = ({ images, title = "Project screenshots" }: InfiniteGalleryProps) => {
  if (!images?.length) {
    return null;
  }

  // Repeat images to fill the gallery
  const repeatedImages = Array.from({ length: 12 }, (_, i) => images[i % images.length]);

  // Assign random sizes to each image
  const sizes = repeatedImages.map(() => {
    const widthClass = ["w1", "w2", "w3"][Math.floor(Math.random() * 3)];
    const heightClass = ["h1", "h2", "h3"][Math.floor(Math.random() * 3)];
    return { widthClass, heightClass };
  });

  return (
    <div className={styles.gallery} aria-label={title}>
      <div className={styles.grid}>
        {repeatedImages.map((image, idx) => (
          <div key={idx} className={`${styles.tile} ${styles[sizes[idx].widthClass]} ${styles[sizes[idx].heightClass]}`}>
            <Image src={image} alt={`Screenshot ${idx + 1}`} width={300} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteGallery;
