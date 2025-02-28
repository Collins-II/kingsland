import React, { FC } from "react";
import SectionGridHasMap from "../../SectionGridHasMap";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";

export interface ListingStayMapPageProps {
  params: {
    mapCity: string;
  };
};

const DEMO_STAYS = DEMO_STAY_LISTINGS

export const dynamic = "force-dynamic"; // Temporary fix for debugging

const ListingStayMapPage: FC<ListingStayMapPageProps> = async ({params}) => {

     const listing = await DEMO_STAYS.filter((c) => c.province === params?.mapCity);
  // Default flag if not found
  
  return (
    <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
      <SectionGridHasMap data={listing as StayDataType[]} city={params?.mapCity} />
    </div>
  );
};

export default ListingStayMapPage;
