import React from "react";
import styles from "./Integration.module.css";

interface Props {
  title: string;
  listContent: string;
}

const ContentContainer: React.FC<Props> = ({ title, listContent }) => {
  return (
    <div className={styles.contentBox}>
      <div className=" h-full w-full bg-[#01021e] rounded-md p-[30px] hover:bg-transparent ">
        <h4 className={styles.contentTitle}>{title}</h4>
        <div className={styles.contentParagraph}>{listContent}</div>
      </div>
    </div>
  );
};

export default ContentContainer;
