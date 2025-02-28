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

import imgPng1 from "@/images/ests/est_1.jpg";
import imgPng2 from "@/images/ests/est_2.jpg";
import imgPng3 from "@/images/ests/est_3.jpg";
import imgPng4 from "@/images/ests/est_4.jpg";
import imgPng5 from "@/images/ests/est_5.jpg";
import imgPng6 from "@/images/ests/est_6.jpg";
import imgPng7 from "@/images/ests/est-7.jpg";
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

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Lusaka",
    taxonomy: "category",
    count: 188,
    thumbnail: imgPng1 as any ,
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Kafue",
    taxonomy: "category",
    count: 18,
    thumbnail:
    imgPng2 as any,
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Chingola",
    taxonomy: "category",
    count: 288,
    thumbnail:
    imgPng3 as any,
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Mansa",
    taxonomy: "category",
    count: 548,
    thumbnail:
    imgPng4 as any,
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Livingstone",
    taxonomy: "category",
    count: 178,
    thumbnail:
    imgPng5 as any,
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "Kitwe",
    taxonomy: "category",
    count: 421,
    thumbnail:
    imgPng6 as any,
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Ndola",
    taxonomy: "category",
    count: 1388,
    thumbnail:
    imgPng7 as any,
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      imgPng7 as any,
  },
];

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
            categories={DEMO_CATS}
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
        />
        

        <SectionVideos /> 
      
  
        <AboutSectionOne />

        <FunFact />*/}
        <FeaturesTab /> 
        <Blog />
        <Contact />
      </div>
    </main>
  );
}

export default PageHome;
