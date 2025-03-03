import React from "react";
import SectionGridHasMap from "../../SectionGridHasMap";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";

// ✅ Ensure `params` is correctly inferred by Next.js
const ListingStayMapPage = async ({
  params,
}: {
  params: Promise<{ stayId: string }>
}) => {
  const city = (await params).stayId; // ✅ No need for optional chaining or async

  // ✅ Filter stays based on `province`
  const listing = DEMO_STAY_LISTINGS.filter((c) => c.province === city);

  return (
    <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
      <SectionGridHasMap data={listing as StayDataType[]} city={city} />
    </div>
  );
};

export default ListingStayMapPage;
