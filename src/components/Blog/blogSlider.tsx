"use client";

import React, { FC, useEffect, useState } from "react";
import { PostDataType, TaxonomyType } from "@/data/types";
import CardCategory3 from "@/components/CardCategory3";
import CardCategory4 from "@/components/CardCategory4";
import CardCategory5 from "@/components/CardCategory5";
import Heading from "@/shared/Heading";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useSwipeable } from "react-swipeable";
import PrevBtn from "../PrevBtn";
import NextBtn from "../NextBtn";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";
import { DEMO_POSTS } from "@/data/posts";
import Badge from "@/shared/Badge";
import { Route } from "next";
import Link from "next/link";
import Image from "next/image";

export interface BlogSliderProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: PostDataType[];
  categoryCardType?: "card3" | "card4" | "card5";
  itemPerRow?: number;
  sliderStyle?: "style1" | "style2";
}

const BlogSlider: FC<BlogSliderProps> = ({
  heading = "Suggestions for discovery",
  subHeading = "Popular places to recommends for you",
  className = "",
  itemClassName = "",
  categories = DEMO_POSTS,
  itemPerRow = 4,
  categoryCardType = "card3",
  sliderStyle = "style1",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [numberOfItems, setNumberOfitem] = useState(0);

  const windowWidth = useWindowSize().width;
  useEffect(() => {
    if (windowWidth < 320) {
      return setNumberOfitem(1);
    }
    if (windowWidth < 500) {
      return setNumberOfitem(itemPerRow - 3);
    }
    if (windowWidth < 1024) {
      return setNumberOfitem(itemPerRow - 2);
    }
    if (windowWidth < 1280) {
      return setNumberOfitem(itemPerRow - 1);
    }

    setNumberOfitem(itemPerRow);
  }, [itemPerRow, windowWidth]);

  function changeItemId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < categories?.length - 1) {
        changeItemId(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        changeItemId(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  const renderPostRelated = (post: PostDataType) => {
    return (
        <div
          key={post.id}
          className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
        >
          <Link href={post.href as Route} />
          <Image
            className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            src={post.featuredImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            alt=""
          />
          <div>
            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
          </div>
          <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
            <Badge color="yellow" name={post.postType?.toUpperCase()} />
            <h2 className="block text-lg font-semibold text-white ">
              <span className="line-clamp-2">{post.title}</span>
            </h2>
  
            <div className="flex">
              <span className="block text-neutral-200 hover:text-white font-medium truncate">
                {post.author.displayName}
              </span>
              <span className="mx-1.5 font-medium">·</span>
              <span className="font-normal truncate">{post.date}</span>
            </div>
          </div>
          <Link href={post.href as Route} />
        </div>
      );
  };

  if (!numberOfItems) return null;

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
     <div className="listingSection__wrap">
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {categories.filter((_, i) => i < 6).map((item, indx) => (
                  <motion.li
                    className={`relative inline-block px-2 xl:px-4 ${itemClassName}`}
                    custom={direction}
                    initial={{
                      x: `${(currentIndex - 1) * -100}%`,
                    }}
                    animate={{
                      x: `${currentIndex * -100}%`,
                    }}
                    variants={variants(200, 1)}
                    key={indx}
                    style={{
                      width: `calc(1/${numberOfItems} * 100%)`,
                    }}
                  >
                    {renderPostRelated(item)}
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>

          {currentIndex ? (
            <PrevBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex - 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -left-3 xl:-left-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}

          {categories.length > currentIndex + numberOfItems ? (
            <NextBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex + 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -right-3 xl:-right-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}
        </div>
      </MotionConfig>
      </div>
    </div>
  );
};

export default BlogSlider;
