import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";

interface Props {}

const config = {
  rainbow: "INTRODUCING ELYSSA",
  header: "SIX Augmented Reality Applications under ONE Umbrella Brand",
  detail:
    "Project Elyssa is a groundbreaking initiative aimed at redefining the augmented reality landscape. /n This ambitious project is building an Ecosystem that encompasses six distinct augmented reality apps, all united under one umbrella brand. Each app is designed to cater to different facets of daily life, offering unique and immersive experiences. Project Elyssa plans to unveil these apps one by one, allowing each to shine in its own right while benefiting from the shared brand identity.",
};

const HeroSection: React.FC<Props> = () => {
  return (
    <div className={styles.firstSectionWrapper}>
      <div className={styles.heroContent}>
        <h4 className={styles.rainbowText}>{config.rainbow}</h4>
        <h1 className={styles.title}>{config.header}</h1>
        <p className={styles.paragraphy}>{config.detail}</p>
        <div className="relative">
          <div className={styles.heroImageBackground} />
          <Image
            src={"/assets/Hero_Image4@2x.png"}
            alt=""
            width={635}
            height={400}
            className={styles.heroImage}
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
