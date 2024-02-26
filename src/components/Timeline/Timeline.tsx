import React from "react";
import styles from "./Timeline.module.css";
import cx from "classnames";
import ContentContainer from "./ContentContainer";

interface Props {}

const content = [
  {
    title: "Phase ONE (Completed!)",
    listContent: [
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
    ],
  },
  {
    title: "Phase TWO",
    listContent: [
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
    ],
  },
  {
    title: "Phase THREE",
    listContent: [
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
    ],
  },
  {
    title: "Phase FOUR",
    listContent: [
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
    ],
  },
  {
    title: "Phase FIVE",
    listContent: [
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
    ],
  },
  {
    title: "Phase SIX and BEYOND",
    listContent: [
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
      "Launch on Uniswap with Audit and KYC Certificates",
    ],
  },
];

const Timeline: React.FC<Props> = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-5 lg:px-0">
      <div className="text-white">
        <div className="text-6xl text-center font-bold">
          <h1 className={styles.title}>Road Map</h1>
        </div>
        <div className={styles.timeline}>
          {content.map((item, index) => (
            <div
              key={index}
              className={cx({
                [styles.container as any]: true,
                [styles.left as any]: index % 2 === 1,
                [styles.right as any]: index % 2 === 0,
              })}
              data-aos={index % 2 === 1 ? "fade-right" : "fade-left"}
            >
              <ContentContainer
                title={item.title}
                listContent={item.listContent}
                index={index}
                total={content.length}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
