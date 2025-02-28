import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";
import rightImgPng from "@/images/our-features-2.png";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Brands from "@/components/Brands";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FeaturesTab from "@/components/FeaturesTab";
import SectionDowloadApp from "./(home)/SectionDowloadApp";
import PropertyVideo from "@/components/Video";

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-12 mb-24 lg:space-y-18 lg:mb-28">
        {/* SECTION HERO */}
        <ScrollUp />
        <Hero />
        {/*
        <SectionHero2 className="" />
        <SectionHero className="pt-10 lg:pt-16" />

         SECTION 1 
        <SectionSliderNewCategories categories={DEMO_CATS} />
        

        <SectionOurFeatures type="type2" rightImg={rightImgPng} />
        */}

       {/* <SectionOurFeatures /> */}
        <SectionGridFeaturePlaces cardType="card2" />

        <CTA />

        {/* SECTION 1 
        <SectionHowItWork />
        */}

          <SectionSliderNewCategories
            categoryCardType="card5"
            itemPerRow={5}
            heading="Properties to explore"
            subHeading="Popular properties that Kingsland City recommends for you"
            sliderStyle="style2"
          />

        <PropertyVideo
          videoSrc="/videos/cityVid3.mp4" // Add a real estate video
          title="Discover Luxury Living at Kingsland City"
          description="Explore our premium estate properties with modern designs and breathtaking views."
          buttonText="View Properties"
          buttonLink="/properties"
         />

  {/*
        <SectionSubscribe2 />
       SECTION 1 
        <div className="relative ">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>

        <SectionGridCategoryBox />

        <div className="relative ">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>
        

        <SectionSliderNewCategories
          heading="Explore by types of properties"
          subHeading="Explore houses based on 10 types of properties"
          categoryCardType="card5"
          itemPerRow={5}
        />*/}
      
  
        {/*<AboutSectionOne />

        <FunFact />*/}
        <FeaturesTab /> 
        <Blog />
        <Contact />
      </div>
    </main>
  );
}

export default PageHome;
