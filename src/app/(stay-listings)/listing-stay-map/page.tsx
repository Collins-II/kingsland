import React, { FC } from "react";
import SectionGridHasMap from "../SectionGridHasMap";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";

export interface ListingStayMapPageProps {
};

const DEMO_STAYS = DEMO_STAY_LISTINGS

const ListingStayMapPage: FC<ListingStayMapPageProps> = ({}) => {

     // const listing = DEMO_STAYS.find((c) => c.id === params.mapId);
  // Default flag if not found
  
  return (
    <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
      <SectionGridHasMap data={DEMO_STAYS}/>
    </div>
  );
};

export default ListingStayMapPage;
