import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";

export interface CardCategory5Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory5: FC<CardCategory5Props> = ({
  className = "",
  taxonomy,
}) => {
  const { count, name, href = "/", thumbnail } = taxonomy;
  return (
    <Link
      href={href}
      className={`nc-CardCategory5 flex flex-col ${className}`}
      data-nc-id="CardCategory5"
    >
       <div>
          <h2 className="text-1xl font-medium">{name}</h2>
          <span className="block mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            {convertNumbThousand(count)} properties
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 my-4"></div>
    
      <div
        className={`flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0 rounded-2xl overflow-hidden group`}
      >
        <Image
          fill
          alt=""
          src={thumbnail || ""}
          className="object-cover w-full h-full rounded-2xl"
          sizes="(max-width: 400px) 100vw, 400px"
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      
    </Link>
  );
};

export default CardCategory5;
