"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import VideoPlayer from "../video_player";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 ">
      <div className="mt-4">
         <div>
          <h2 className="text-2xl font-semibold">Welcome To Kingsland</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {`Have an excellent overview experience at Kingsland City.`}
          </span>
        </div>
        <div className="w-50 border-b border-neutral-200 dark:border-neutral-700 mt-4 mb-8"></div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
               <VideoPlayer url="/videos/cityVid2.mp4" title="Welcome to Kingsland City!"/>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
