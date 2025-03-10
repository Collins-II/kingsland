import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: string;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-24",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
     {/* <LogoSvgLight />
      <LogoSvg />

       THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <img
          className={`block max-h-12 rounded-full shadow-lg shadow-neutral-300 ${imgLight ? "dark:hidden" : ""}`}
          src="/images/cityLogo.jpg"
          alt="Logo"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="rounded-full shadow-lg shadow-neutral-300 hidden max-h-12 dark:block"
          src="/images/cityLogo.jpg"
          alt="Logo-Light"
        />
      )} 
    </Link>
  );
};

export default Logo;
