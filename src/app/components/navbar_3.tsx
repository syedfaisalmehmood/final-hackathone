"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const NavBar_3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-auto w-full m-auto font-sans">
      {/* Blue Banner for Mobile */}
      <div className="h-[41px] w-full flex items-center bg-darkprimary text-white">
        <LiaShippingFastSolid className="ml-4 md:ml-[600px] " />
        <p className="ml-2 text-[14px] ">
          Free delivery on all orders over £50 with code easter checkout
        </p>
      </div>

      {/* Navbar container */}
      <div className="relative">
        <div className="h-[44px] w-full flex justify-between items-center">
          {/* Logo (Left side for mobile) */}
          <div className="h-[30px] w-[65px] ml-4">
            <Link href={"/"}>
              <Image
                src={"/navbar/Avion.png"}
                alt="Avion Image"
                height={30}
                width={65}
                className="cursor-pointer py-2"
              />
            </Link>
          </div>

          {/* Icons (Visible on medium and up screens) */}
          <div className="hidden sm:flex h-[16px] w-[80px] justify-between items-center">
            <div className="flex justify-between w-full">
              <CiSearch className="cursor-pointer" />
              <Link href={"/cart"}>
                <IoCartOutline className="cursor-pointer" />
              </Link>
              <FaRegCircleUser className="cursor-pointer" />
            </div>
          </div>

          {/* Sub Menus (Desktop Only) */}
          <div className="hidden sm:flex h-[22px] text-[16px] ml-[1200px] text-navtext justify-between absolute items-center">
            <ul className="flex justify-between gap-8 cursor-pointer">
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/about"}>About us</Link>
              </li>
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/"}>Contact</Link>
              </li>
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/"}>Blog</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Navbar (Links) */}
          <div className="hidden sm:flex mt-[80px] ml-[350px] h-[22px] w-[803px] absolute justify-between items-center">
            <ul className="flex justify-between w-full text-navtext cursor-pointer">
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/allproducts"}>All products</Link>
              </li>
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/"}>Plant pots</Link>
              </li>
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/"}>Ceramics</Link>
              </li>
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/"}>Tables</Link>
              </li>
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/allproducts/chair_page"}>Chairs</Link>
              </li>
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/"}>Crockery</Link>
              </li>
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/"}>Tableware</Link>
              </li>
              <li className="hover:underline hover:font-bold text-[15px]">
                <Link href={"/"}>Cultery</Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu and Icons (Mobile) */}
          <div className="sm:hidden flex items-center justify-end w-full pr-4">
            <div className="flex items-center">
              <CiSearch className="mr-2 cursor-pointer" />
              <Link href={"/cart"}>
                <IoCartOutline className="mr-2 cursor-pointer" />
              </Link>
              <FaRegCircleUser className="mr-2 cursor-pointer" />

              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="h-6 w-6 flex flex-col justify-between items-center">
                  <div className="bg-black h-1 w-6 mb-1"></div>
                  <div className="bg-black h-1 w-6 mb-1"></div>
                  <div className="bg-black h-1 w-6 mb-1"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Hamburger) */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-[100px] text-darkprimary left-0 w-full bg-white shadow-lg">
            <ul className="text-center py-4 ">
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/allproducts"}>All products</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/"}>Plant pots</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/"}>Ceramics</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/"}>Tables</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/allproducts/chair_page"}>Chairs</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/"}>Crockery</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/"}>Tableware</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/"}>Cultery</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/about"}>About us</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/"}>Contact</Link>
              </li>
              <li className="py-2 hover:underline hover:font-semibold hover:bg-gray-200 cursor-pointer">
                <Link href={"/"}>Blog</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar_3;
