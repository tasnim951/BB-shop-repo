import Hero from "../components/Hero";
import CategoriesSection from "../components/CategoriesSection"
import FeaturesSection from "../components/FeaturesSection"
import BannerSection from "../components/BannerSection"
import TestimonialSection from "../components/TestimonialSection";


export default function Home() {
  return (
    <>
    
    <main>
      <Hero/>
      <CategoriesSection/>
      <FeaturesSection/>
      <BannerSection/>
      <TestimonialSection/>
    </main>
    </>
   
  );
}
