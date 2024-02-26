import React, { useState } from "react";
import Image from "next/image";
import styles from "./HeroVideo.module.css";
import cx from "classnames";

interface Props {}

const HeroVideo: React.FC<Props> = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const trailerClassName = cx({
    [styles.trailer as any]: true,
    [styles.trailerActive as any]: showTrailer,
  });

  const trailerControlButton = cx({
    [styles.trailerButton as any]: true,
    [styles.trailerButtonActive as any]: showTrailer,
  });

  return (
    <div className={styles.videoWrapper}>
      <div className="">
        <div>
          <div className={trailerClassName}>
            <video
              src="/assets/Elyssa2.mp4"
              controls={true}
              width="250"
              className={cx({
                [styles.video as any]: true,
                ["w-full lg:w-1/2 lg:h-1/2 lg:max-w-[50%]"]: showTrailer,
              })}
            />
          </div>
          <a className={trailerControlButton}>
            <Image
              src="/assets/g43128.png"
              alt="close-video-button"
              width={100}
              height={100}
              onClick={() => {
                setShowTrailer(false);
              }}
              className={styles.closebtn}
            />
          </a>
        </div>

        <a
          href="#"
          onClick={() => {
            setShowTrailer(true);
          }}
          className={styles.playButton}
        >
          <Image
            src="/assets/play-btn.png"
            alt="play-button"
            width={150}
            height={150}
          />
        </a>
        <Image
          src="/assets/video-background.png"
          alt="cover-image-of-video"
          width={1000}
          height={1000}
          className={styles.videoBackgroundImage}
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default HeroVideo;
