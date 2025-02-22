import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import React, { ReactNode } from "react";
import SectionHeroArchivePage from "../(server-components)/SectionHeroArchivePage";

import imgPng1 from "@/images/ests/est_1.jpg";
import imgPng2 from "@/images/ests/est_2.jpg";
import imgPng3 from "@/images/ests/est_3.jpg";
import imgPng4 from "@/images/ests/est_4.jpg";
import imgPng5 from "@/images/ests/est_5.jpg";
import imgPng6 from "@/images/ests/est_6.jpg";
import imgPng7 from "@/images/ests/est-7.jpg";
import { TaxonomyType } from "@/data/types";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Lusaka",
    taxonomy: "category",
    count: 188288,
    thumbnail: imgPng1 as any ,
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Kafue",
    taxonomy: "category",
    count: 188288,
    thumbnail:
    imgPng2 as any,
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Chingola",
    taxonomy: "category",
    count: 188288,
    thumbnail:
    imgPng3 as any,
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Mansa",
    taxonomy: "category",
    count: 188288,
    thumbnail:
    imgPng4 as any,
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Livingstone",
    taxonomy: "category",
    count: 188288,
    thumbnail:
    imgPng5 as any,
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "Kitwe",
    taxonomy: "category",
    count: 188288,
    thumbnail:
    imgPng6 as any,
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Ndola",
    taxonomy: "category",
    count: 188288,
    thumbnail:
    imgPng7 as any,
  },
];

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-ListingStayPage relative `}>
      <BgGlassmorphism />

      {/* SECTION HERO 
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <SectionHeroArchivePage currentPage="Stays" currentTab="Stays" />
      </div>
      */}

      {children}

      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        {/* OTHER SECTION */}
      <div className="container py-12 lg:py-18">
      <SectionSliderNewCategories
        categories={DEMO_CATS}
        categoryCardType="card5"
        itemPerRow={5}
        heading="Properties to explore"
        subHeading="Popular properties that Kingsland City recommends for you"
        sliderStyle="style2"
      />
      </div>


      </div>
    </div>
  );
};

export default Layout;
