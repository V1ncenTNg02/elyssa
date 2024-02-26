import React from "react";
import styles from "./TokenSection.module.css";

interface Props {}

const TokenSection: React.FC<Props> = ({}) => {
  return (
    <div className="max-w-[1280px] flex flex-col md:flex-row px-4 lg:mx-auto my-8 w-full gap-5 md:gap-0 items-center md:items-start">
      <div
        className="text-white w-fit md:w-1/2 flex flex-col items-center md:items-start justify-center "
        data-aos={"fade-up-right"}
      >
        <h2 className="text-white text-center md:text-start text-6xl font-semibold mb-10 w-full">
          Tokenomics
        </h2>
        <ul className={styles.unorderedList}>
          <li className={styles.column}>Mainnet: Ethereum</li>
          <li className={styles.column}>Token Symbol: $ELY</li>
          <li className={styles.column}>Total Supply: 10.000.000</li>
          <li className={styles.column}>Total Tax: 5% Buy/Sell</li>
          <li className={styles.column}>Ownership: Renounced</li>
        </ul>
      </div>
      <div
        className="text-white w-full md:w-1/2 max-w-[1300px] px-[15px]"
      >
        <h2 className="text-white text-center md:text-start text-6xl font-semibold mb-10 w-full">
          Utility
        </h2>
        <div className="flex gap-5 max-w-[635px] flex-col items-start">
          <a className={styles.buttonOuter}>
            <div className={styles.buttonMask}>
              <button className={styles.buttonInner}>Revenue Sharing</button>
            </div>
          </a>
          <a className={styles.buttonOuter}>
            <div className={styles.buttonMask}>
              <button className={styles.buttonInner}>Special Perks</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TokenSection;
