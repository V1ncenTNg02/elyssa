import React from "react";
import styles from "./Partner.module.css";
import Image from "next/image";

interface Props {}

const data = [
  { id: 1, src: "/assets/pinksale.png" },
  { id: 2, src: "/assets/pinksale.png" },
  { id: 3, src: "/assets/pinksale.png" },
  { id: 4, src: "/assets/pinksale.png" },
  { id: 5, src: "/assets/pinksale.png" },
  { id: 6, src: "/assets/pinksale.png" },
  { id: 7, src: "/assets/pinksale.png" },
  { id: 8, src: "/assets/pinksale.png" },
  { id: 9, src: "/assets/pinksale.png" },
  { id: 10, src: "/assets/pinksale.png" },
  { id: 11, src: "/assets/pinksale.png" },
  { id: 12, src: "/assets/pinksale.png" },
];

const Partner: React.FC<Props> = () => {
  return (
    <div
      className="max-w-[1280px] mx-auto flex flex-col justify-center items-center text-white"
      data-aos="fade-up"
    >
      <div className="text-white text-center text-6xl font-semibold mb-10">
        Partners
      </div>
      <div className={styles.gridSection}>
        {data.map((item) => (
          <div
            key={item.id}
            className=" h-auto mx-auto py-[15px] px-[30px] flex justify-center items-center bg-blue-950 sm:bg-transparent rounded-lg min-h-[100px] min-w-[150px]"
          >
            <Image
              src={item.src}
              alt=" "
              width={100}
              height={50}
              className="h-auto w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
