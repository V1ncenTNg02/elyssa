import React from "react";
import styles from "./Timeline.module.css";
import cx from "classnames";
import roadmapCat from "/public/assets/roadmap-cat.png";
import Image from "next/image";

interface Props {
  total: number;
  index: number;
  title: string;
  listContent: string[];
}

const ContentContainer: React.FC<Props> = ({
  title,
  listContent,
  index,
  total,
}) => {
  const contentClassName = cx({
    [styles.contentBox as any]: true,
    [styles.contentDotBlue as any]: index % 2 === 0,
    [styles.contentDotPurple as any]: index % 2 === 1,
  });

  const imageClassName = cx({
    [styles.roadmapCatRight as any]: index % 2 === 1,
    [styles.roadmapCatLeft as any]: index % 2 === 0,
  });

  return (
    <div className={contentClassName}>
      {!(index === 0 || index === total - 1) && (
        <Image
          src={roadmapCat}
          width={150}
          height={150}
          alt="roadmap-cat"
          className={imageClassName}
        />
      )}
      <div className="h-full w-full bg-[#01021e] rounded-md p-[30px] hover:bg-transparent">
        <div>
          <h3 className={styles.contentTitle}>{title}</h3>
        </div>
        <div>
          <ul className={styles.contentList}>
            {listContent.map((item, index) => (
              <li key={index} className={styles.contentListItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
