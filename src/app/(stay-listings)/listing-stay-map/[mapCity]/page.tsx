import React from "react";
import SectionGridHasMap from "../../SectionGridHasMap";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";

export const dynamic = "force-dynamic"; // Temporary fix for debugging

interface ListingStayMapPageProps {
  params: { mapCity: string };
}

const ListingStayMapPage = async ({ params }: ListingStayMapPageProps) => {
  // Ensure mapCity exists
  const city = params?.mapCity || "";

  // Filter stays based on mapCity
  const listing = DEMO_STAY_LISTINGS.filter((c) => c.province === city);

  return (
    <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
      <SectionGridHasMap data={listing as StayDataType[]} city={city} />
    </div>
  );
};

export default ListingStayMapPage;
