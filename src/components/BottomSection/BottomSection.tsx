import React from "react";
import Image from "next/image";
import styles from "./BottomSection.module.css";

interface Props {}

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/" },
  { name: "Whitepaper", href: "/" },
  { name: "Roadmap", href: "/" },
  { name: "Tokenomics", href: "/" },
  { name: "Buy", href: "/" },
];

const icons = [
  { name: "Telegram", src: "/assets/tg.png" },
  { name: "Twitter", src: "/assets/tweet.png" },
  { name: "Dextools", src: "/assets/dextools.png" },
  { name: "Youtube", src: "/assets/youtube.png" },
  { name: "Medium", src: "/assets/medium.png" },
  { name: "CoinMarketCap", src: "/assets/Coinmarket.png" },
  { name: "Github", src: "/assets/github.png" },
  { name: "Instagram", src: "/assets/instagram.png" },
  { name: "Coingecko", src: "/assets/Group.png" },
];

const BottomSection: React.FC<Props> = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center py-10 w-full px-10 ">
      <Image
        src="/assets/ELYSSA-footer-logo.png"
        alt="Big Logo"
        width={1920}
        height={810}
        className="w-1/6 max-w-[140px] h-auto lg:w-[10%] py-8"
      />
      <ul className="flex flex-row flex-wrap text-sm  gap-8 items-center justify-center py-4">
        {links.map((item, index) => (
          <li className={styles.text} key={index}>
            {item.name}
          </li>
        ))}
      </ul>
      <ul className={styles.icons}>
        {icons.map((item, index) => (
          <li key={index} className={styles.iconWrapper}>
            <Image
              src={item.src}
              alt={item.name}
              width={50}
              height={50}
              className={styles.icon}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomSection;
