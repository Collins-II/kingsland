"use client";

import React from "react";
import Link from "next/link";
import SocialsList1 from "@/shared/SocialsList1";
import Logo from "@/shared/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center justify-start pb-5">
            <Logo />
          </div>
          <p className="mt-2 text-sm">
            Your trusted partner in finding the perfect home. Explore our luxury estates today.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full grid grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Explore</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/buy" className="hover:underline">Buy</Link></li>
            <li><Link href="/rent" className="hover:underline">Rent</Link></li>
            <li><Link href="/sell" className="hover:underline">Sell</Link></li>
            <li><Link href="/mortgage" className="hover:underline">Mortgage</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
          </ul>
        </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h3>
          <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Kingsland City. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
