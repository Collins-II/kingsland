"use client";

import Input from "@/shared/Input";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-lg p-8 bg-gradient-to-t from-[#E6F7FF] to-[#B3E5FC] sm:p-11 lg:p-8 xl:p-11">
      {/* Heading */}
      <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900 text-red-600">
        Subscribe to receive future updates
      </h3>
      <p className="mb-8 border-b border-neutral-500 pb-6 text-base text-slate-500 dark:text-gray-300">
        Keep yourself updated with exclusive information and related trends.
      </p>

      {/* Form */}
      <div>
      <Input
        fontClass=""
        sizeClass="h-12 mt-3 px-4 py-3"
        rounded="rounded-3xl"
        placeholder="Enter name"
      />
      <Input
        fontClass=""
        sizeClass="h-12 mt-3 px-4 py-3 bg-white"
        rounded="rounded-3xl"
        placeholder="Enter email"
      />
       {/* Submit Button */}
       <div className="mt-6">
          <button className="w-full flex justify-center rounded-full shadow-sm bg-primary-600 px-6 py-3 text-lg font-bold text-white hover:text-primary-600 shadow-lg transition duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400">
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Info Text */}
      <p className="mt-4 text-center text-sm text-gray-600 text-gray-400">
        No spam guaranteed. We respect your inbox.
      </p>
    </div>
  );
};

export default NewsLatterBox;
