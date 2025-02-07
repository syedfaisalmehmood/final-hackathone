import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer_1 = () => {
  return (
    // main footer div
    <div className="h-[380px] w-[1440px]  flex  m-auto bg-darkprimary text-white">
      {/* sub footer div */}
      <div className="h-[206px] w-[1275px] flex mt-[58px] ml-[82px] ">
        {/* menu div */}
        <div className="h-[175px] w-[108px]  tracking-tighter">
          <p className="text-[16px] cursor-pointer">
            <Link href={"#"}>Menu</Link>
          </p>
          <ul className="text-[14px] leading-7">
            <li>
              <Link href={"#"}>New arrivals</Link>
            </li>

            <li>
              <Link href={"#"}>Best sellers</Link>
            </li>

            <li>
              <Link href={"#"}>Recently viewed</Link>
            </li>

            <li>
              <Link href={"#"}>Popular this week</Link>
            </li>

            <li>
              <Link href={"#"}>All products</Link>
            </li>
          </ul>
        </div>
        {/* Categories Div */}
        <div className="h-[206px] w-[84px] flex ml-[109px] ">
          <p className="text-[16px] cursor-pointer">
            <Link href={"#"}>Categories</Link>
          </p>
          <ul className="text-[14px] mt-[24px] -ml-[82px] leading-7">
            <li>
              <Link href={"#"}>Crockery</Link>
            </li>

            <li>
              <Link href={"#"}>Furniture</Link>
            </li>

            <li>
              <Link href={"#"}>Homeware</Link>
            </li>

            <li>
              <Link href={"#"}>Plant pots</Link>
            </li>
            <li>
              <Link href={"#"}>Chairs</Link>
            </li>
            <li>
              <Link href={"#"}>Crockery</Link>
            </li>
          </ul>
        </div>
        {/* Our Company */}
        <div className="h-[175px] w-[105px] flex ml-[133px] ">
          <p className="text-[16px] cursor-pointer">
            <Link href={"#"}>Our Company</Link>
          </p>
          <ul className="text-[14px] mt-[24px] -ml-[104px] leading-7">
            <li>
              <Link href={"#"}>About us</Link>
            </li>

            <li>
              <Link href={"#"}>Vacancies</Link>
            </li>

            <li>
              <Link href={"#"}>Contact us</Link>
            </li>

            <li>
              <Link href={"#"}>Privacy</Link>
            </li>
            <li>
              <Link href={"#"}>Returns policy</Link>
            </li>
          </ul>
        </div>
        {/* join our mailing list */}
        <div className="h-[92px] w-[627px] relative flex ml-[133px] ">
          <p>Join our mailing list</p>
          <input
            className="h-[56px] w-[509px] absolute flex mt-[36px] bg-buttoncolor pl-4 text-white "
            type="text"
            placeholder="your@email.com"
          ></input>
          <button className="h-[56px] w-[118px] absolute mt-[36px] ml-[492px] bg-white text-primary">
            Sign up
          </button>
        </div>
        <hr className="w-[1277px] h-[2px] mt-[254px]   absolute border border-white/15 "></hr>
        <div className="absolute">
          <p className="h-[19px] w-[190px] mt-[278px]  absolute text-[14px] ">
            Copyright 2022 Avion LTD
          </p>
          <div className="h-[24px] w-[264px] mt-[278px] ml-[1010px] flex justify-between absolute ">
            <div className="h-[24px] w-[24px] flex justify-center items-center bg-white">
              <FaLinkedinIn className=" h-[20px] w-[20px] text-darkprimary" />
            </div>
            <div className="h-[24px] w-[24px] bg-white">
              <FaFacebookF className=" h-[20px] w-[20px] mt-[2px] text-darkprimary" />
            </div>
            <div className="h-[24px] w-[24px] bg-white">
              <FaInstagram className=" h-[20px] w-[20px] mt-[2px] ml-[2px] text-darkprimary" />
            </div>
            <div className="h-[24px] w-[24px] bg-white">
              <FaSkype className=" h-[20px] w-[20px] mt-[2px] ml-[2px] text-darkprimary" />
            </div>
            <div className="h-[24px] w-[24px] bg-white">
              <FaTwitter className=" h-[20px] w-[20px] mt-[2px] ml-[2px] text-darkprimary" />
            </div>
            <div className="h-[24px] w-[24px] bg-white">
              <FaPinterest className=" h-[20px] w-[20px] mt-[2px] ml-[2px] text-darkprimary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_1;
