import React from "react";
import ContentContainer from "./ContentContainer";
import styles from "./Integration.module.css";

interface Props {}

const content = [
  {
    title: "visionOS",
    content:
      "Vision OS is the revolutionary new operating system designed specifically for Apple's Vision Pro devices. It boasts an intuitive interface, seamless integration with advanced vision-based technologies, and a suite of powerful tools to enhance productivity and creativity.",
  },
  {
    title: "Smart Glasses",
    content:
      "The emergence of specialized smart glasses has unlocked a new realm of possibilities. These cutting-edge wearables offer advantages that surpass traditional handheld devices, revolutionizing the way we perceive and engage with augmented reality.",
  },
  {
    title: "Smart Mirrors",
    content:
      "From enhanced functionality to seamless integration with smart home systems, smart mirrors are revolutionizing the way we perceive ourselves and interact with our surroundings.",
  },
];

const IntegrationSection: React.FC<Props> = () => {
  return (
    <div
      className="max-w-[1280px] mx-auto text-white flex flex-col items-center justify-center gap-10 py-20 lg:py-30 px-10"
      data-aos="fade-up"
    >
      <div className={styles.textWrapper}>
        <h2 className="flex justify-center text-white text-center text-6xl font-semibold mb-10">
          Integration
        </h2>
        <p className={styles.p}>
          While AR has primarily been experienced through smartphones and
          tablets, Elyssa has a broader vision for integration, aiming to
          leverage various smart devices to enhance the AR experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {content.map((item, index) => (
          <ContentContainer
            title={item.title}
            listContent={item.content}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default IntegrationSection;
