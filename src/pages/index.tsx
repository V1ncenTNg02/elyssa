import Navigation from "../components/Navigation/Navigation";

import HeroSection from "../components/HeroSection/HeroSection";
import HeroVideo from "../components/HeroVideo/HeroVideo";
import TokenSection from "../components/TokenSection/TokenSection";
import IconSection from "../components/IconSection/IconSection";
import Timeline from "../components/Timeline/Timeline";
import IntegrationSection from "../components/IntegrationSection/IntegrationSection";
import Profolio from "../components/Profolio/Profolio";
import Partner from "../components/Partner/Partner";
import BottomSection from "../components/BottomSection/BottomSection";
import Footer from "../components/Footer/Footer";

import ContentSection from "../components/Content/ContentSection";
import config from "../configs/content.json";

export default function Home() {
  const { content } = config;
  return (
    <div className=" bg-[#01021e] overflow-hidden">
      <Navigation />
      <HeroSection />
      <HeroVideo />
      <div className="mt-20 max-w-[1270px] mx-auto">
        {content.map((item) => (
          <ContentSection
            index={item.index}
            title={item.title}
            content={item.content}
            picture={item.picture}
            hasStore={item.hasStore}
            name={item.name}
            key={item.index}
          />
        ))}
      </div>
      <section className="my-[90px]">
        <Timeline />
      </section>
      <section className="py-[90px]">
        <TokenSection />
        <IconSection />
      </section>
      <IntegrationSection />
      <Profolio />
      <Partner />
      <BottomSection />
      <Footer />
    </div>
  );
}
