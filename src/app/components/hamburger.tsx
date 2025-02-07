"use client";
import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden absolute top-[80px] left-[20px] z-10 cursor-pointer"
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>

      {/* Desktop Menu */}
      <div className="sm:hidden first-line:h-[22px] absolute w-[803px] ml-[318px] mt-[120px] text-navtext hidden md:block">
        <ul className="flex justify-between cursor-pointer">
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/allproducts"}>All products</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/"}>Plant pots</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/"}>Ceramics</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/"}>Tables</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/allproducts/chair_page"}>Chairs</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/"}>Crockery</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/"}>Tableware</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/"}>Cultery</Link>
          </li>
        </ul>
      </div>

      {/* Sub Menus */}
      <div className="sm:hidden h-[22px] text-[16px] absolute w-[215px] mt-[62px] ml-[1047px] text-navtext justify-between items-center hidden md:flex">
        <ul className="flex justify-between gap-8 cursor-pointer">
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/about"}>About us</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/"}>Contact</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
            <Link href={"/"}>Blog</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Shown when Hamburger is clicked) */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100px] left-0 right-0 bg-white shadow-md z-10 md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/about"}>About us</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/allproducts"}>All products</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/"}>Plant pots</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/"}>Ceramics</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/"}>Tables</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/allproducts/chair_page"}>Chairs</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/"}>Crockery</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/"}>Tableware</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/"}>Cultery</Link>
            </li>

            <li className="hover:underline hover:underline-offset-4 hover:font-bold hover:text-[15px]">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
      <div className="md:hidden h-[16px] absolute flex w-[80px] mt-[24px] ml-[1310px] justify-between items-center ">
        {/* Icons div */}
        <div className="h-[16px] w-[80px] flex mt-[6px] justify-between text-darkprimary ">
          <CiSearch className="hover:underline hover:underline-offset-4 hover:font-bold cursor-pointer z-10" />
          <Link href={"/cart"}>
            <IoCartOutline className="hover:underline hover:underline-offset-4 hover:font-bold cursor-pointer" />
          </Link>
          <FaRegCircleUser className="hover:underline hover:underline-offset-4 hover:font-bold cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
