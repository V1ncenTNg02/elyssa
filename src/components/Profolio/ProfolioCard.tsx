import React from "react";
import Image from "next/image";
import styles from "./Profolio.module.css";

interface Props {
  src: string;
  name: string;
  position: string;
  age: number;
  background: string;
}

const ProfolioCard: React.FC<Props> = ({
  src,
  name,
  position,
  age,
  background,
}) => {
  return (
    <div className='flex flex-col items-center lg:items-start justify-center md:justify-start w-[90%] pb-8 lg:pb-3 mx-auto'>
      <Image src = {src} alt = {name} width={500} height = {500} className = {styles.profolio} />
      <ul className='text-white flex flex-col items-center md:items-start mx-auto md:mx-0'>
          <li className = 'font-bold'>NAME: {name}</li>
          <li>POSITION: {position}</li>
          <li>AGE: {age}</li>
          <li>BACKGROUND: {background}</li>
      </ul>
    </div>
  );
};

export default ProfolioCard;
