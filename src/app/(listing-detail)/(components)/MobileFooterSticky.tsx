import React, { useState } from "react";
import ModalSelectDate from "@/components/ModalSelectDate";
import ButtonPrimary from "@/shared/ButtonPrimary";
import converSelectedDateToString from "@/utils/converSelectedDateToString";
import ModalReserveMobile from "./ModalReserveMobile";
import StripeButton from "@/components/StripeButton";

const MobileFooterSticky = () => {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2023/02/06")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2023/02/23"));

  return (
    <div className="block lg:hidden fixed bottom-0 inset-x-0 py-2 sm:py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-6000 z-40">
      <div className=" flex flex-col w-full px-6 pb-4">
       {/* Payment Breakdown */}
  <div className="flex flex-col gap-3 mt-6 text-sm text-gray-700 dark:text-gray-300">
    <div className="flex justify-between">
      <span>Base Price</span>
      <span>$50,000</span>
    </div>
    <div className="flex justify-between">
      <span>Taxes & Fees</span>
      <span>$5,000</span>
    </div>
    <div className="border-b border-neutral-200 dark:border-neutral-700 my-2"></div>
    <div className="w-full">
    <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
      <span>Reservation Fee</span>
      <span>$10,000</span>
    </div>
    </div>
        {/* Payment Button */}
          <div className="mt-6">
            <StripeButton price={10000} />
          </div>

      </div>
      </div>
    </div>
  );
};

export default MobileFooterSticky;
