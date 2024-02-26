import React from "react";
import config from "../../configs/content.json";
import IconCard from "./IconCard";

interface Props {}

const IconSection: React.FC<Props> = () => {
  const { iconSection } = config;
  return (
    <div className="flex flex-col w-full px-5 text-white justify-center items-center pt-10">
      <h2 className="text-white text-center text-6xl font-semibold mb-10">
        Revenue Streams
      </h2>
      <div>
        <ul className="flex flex-row flex-wrap justify-center items-center">
          {iconSection.map((item, index) => (
            <li className="px-5 py-7" key={index}>
              <IconCard src={item.src} text={item.text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconSection;
