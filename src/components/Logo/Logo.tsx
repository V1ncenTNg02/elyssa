import Image from "next/image";
import React from "react";

interface Props {
  classNames?: string;
  isLarge: boolean;
}

const Logo: React.FC<Props> = ({ classNames, isLarge }) => {
  return (
    <div className={classNames}>
      {isLarge ? (
        <Image src={"/assets/logo.png"} alt="logo" width={225} height={32} />
      ) : (
        <Image
          src={"/assets/roadmap-cat.png"}
          alt="logo"
          width={225}
          height={32}
          className=" w-auto min-w-[58px] min-h-[67px]"
        />
      )}
    </div>
  );
};

export default Logo;
