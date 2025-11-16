"use client";

import React, { memo, useEffect, useRef, VideoHTMLAttributes } from "react";

const Memoji = () => {
  const videoRef = useRef<any>();

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Call the play() method on the video element
    }
  };

  useEffect(() => {
    playVideo();
  }, [videoRef]);

  return (
    <video
      loop
      width="400"
      height="360"
      muted={true}
      ref={videoRef}
      autoPlay={true}
      controls={false}
    >
      <source src="/emoji.webm" type="video/webm" />
    </video>
  );
};

export default memo(Memoji);
