import FeaturesSection from "@/component/FeaturesSection";
import Hero from "@/component/Hero";
import TrendingIdea from "@/component/TrendingIdea";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <TrendingIdea></TrendingIdea>
      <FeaturesSection></FeaturesSection>
     
    </div>
  );
}
