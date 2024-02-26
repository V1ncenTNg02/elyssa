import React from "react";
import styles from "./ContentSection.module.css";
import Image from "next/image";

interface Props {
  index: number;
  name: string;
  title: string;
  content: string;
  picture: string;
  hasStore: boolean;
}

const ContentSection: React.FC<Props> = ({
  index,
  title,
  content,
  picture,
  hasStore,
  name,
}) => {
  return (
    <div className={styles.contentWrapper}>
      {index % 2 == 0 && (
        <div className={styles.pictureContainer} data-aos="fade">
          <Image
            src={picture}
            alt={title}
            width={270}
            height={40}
            className={styles.picture}
          />
        </div>
      )}

      <div className={styles.contentContainer}>
        <div className={styles.titleSection}  data-aos="fade-up">
          <Image
            src={title}
            alt={name}
            width={270}
            height={40}
            className="max-h-[40px]"
          />
        </div>
        <p className={styles.content}  data-aos="fade-right">{content}</p>
        {hasStore && (
          <div className={styles.storeContainer}  data-aos="fade-up-left">
            <Image
              src="/assets/Google_Play.png"
              alt="GooglePlay"
              width={170}
              height={40}
            />
            <Image
              src="/assets/App_Store.png"
              alt="AppStore"
              width={170}
              height={40}
            />
          </div>
        )}
      </div>

      {index % 2 == 1 && (
        <div className={styles.pictureContainer} data-aos="fade">
          <Image
            src={picture}
            alt={name ? name : "picture"}
            width={270}
            height={40}
            className={styles.picture}
          />
        </div>
      )}
    </div>
  );
};

export default ContentSection;
