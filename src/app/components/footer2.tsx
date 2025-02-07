import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer_2 = () => {
  return (
    // main footer div
    <div className="h-[350px] w-[1440px]  flex justify-center m-auto bg-darkprimary text-white">
      {/* sub footer div */}
      <div className="h-[242px] w-[1277px] flex relative mt-[53px]  ">
        {/* Image of Company Name */}
        <Image 
        src={"/footer_2/Avion.png"}
        alt="Avion Name Image"
        width={97}
        height={30}
        className="h-[30px] w-[97px] mt-[15px]"
        ></Image>
        {/* Address of Company */}
        <div className="h-[112px] w-[152px] flex absolute mt-[66px] ">
          <p className="h[19px] w-[144px] text-[14px] absolute flex tracking-tight">21 New York Street</p>
          <p className="h[19px] w-[144px] text-[14px] absolute flex mt-[31px] tracking-tight">New York City</p>
          <p className="h[19px] w-[152px] text-[14px] absolute flex mt-[62px] tracking-tighter">United States of America</p>
          <p className="h[19px] w-[144px] text-[14px] mt-[93px] flex absolute tracking-tight">432 34</p>
        </div>
        <div>
        <h3 className="h-[20px] w-[100px] ml-[120px] text-[16px]  ">Social links</h3>
        </div>

        <div className="h-[24px] w-[264px] mt-[42px] ml-[217px] flex justify-between absolute ">
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

        <div className="ml-[354px] flex">
          {/* menu div */}
        <div className="h-[175px] w-[108px]  tracking-tighter">
          <p className="text-[16px] cursor-pointer">
            <Link href={"#"}>Menu</Link>
          </p>
          <ul className="text-[14px] leading-8">
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
          <ul className="text-[14px] mt-[24px] -ml-[82px] leading-8">
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
        <div className="h-[175px] w-[105px] flex ml-[135px] ">
          <p className="text-[16px] cursor-pointer">
            <Link href={"#"}>Our Company</Link>
          </p>
          <ul className="text-[14px] mt-[24px] -ml-[104px] leading-8">
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
        </div>
       
        <hr className="w-[1277px] h-[2px] mt-[242px]   absolute border border-white/15 "></hr>
          {/* text divs after bottom line */}
        <div className="absolute">
          <p className="h-[19px] w-[190px] mt-[258px]  absolute text-[14px] ">
            Copyright 2022 Avion LTD
          </p>
       
       

        </div>
      </div>
    </div>
  );
};

export default Footer_2;
