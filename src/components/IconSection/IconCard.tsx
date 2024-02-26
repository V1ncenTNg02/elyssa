import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  text: string;
}

const IconCard: React.FC<Props> = ({ src, text }) => {
  return (
    <div>
      <Image src={src} width={200} height={200} alt={text} />
      <div className="flex justify-center items-center">{text}</div>
    </div>
  );
};

export default IconCard;
