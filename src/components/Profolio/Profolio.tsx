import React from "react";
import ProfolioCard from "./ProfolioCard";

interface Props {}

const data = [
  {
    src: "/assets/190.png",
    name: "Alen Walker",
    position: "CEO",
    age: 34,
    background: "Business management",
  },
  {
    src: "/assets/606.png",
    name: "Lucas Pot",
    position: "CTO",
    age: 33,
    background: "Software engineering",
  },
  {
    src: "/assets/607.png",
    name: "Hannah Vizzo",
    position: "CMO",
    age: 38,
    background: "Marketing",
  },
];

const Profolio: React.FC<Props> = () => {
  return (
    <div
      className="max-w-[1280px] mx-auto py-20 lg:py-40 px-10"
      data-aos="fade-up"
    >
      <h1 className="text-white text-center text-6xl font-semibold mb-10">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <ProfolioCard
            src={item.src}
            name={item.name}
            position={item.position}
            age={item.age}
            background={item.background}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Profolio;
