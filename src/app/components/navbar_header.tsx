import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

import Link from "next/link";

const NavBar_Header = () => {
  return (
    <div className="font-sans">
      {/* <header className="h-[132px] relative w-[1440px] m-auto flex  ">
        <div className="h-[30px] absolute flex w-[1384px] mt-[20px] ml-[28px] justify-center items-center ">
          <div className="h-[16px] w-[16px] mt-[6px]  ">
            <CiSearch className="hover:underline underline-offset-4 cursor-pointer"/>
          </div>
          <div className="h-[30px] w-[65px]  ml-[643px] ">
            <Image
              src={"/navbar/Avion.png"}
              alt="Avion Image"
              height={30}
              width={65}
              className="mt-[8px]"
            ></Image>
          </div>
          <div className="h-[16px] w-[48px] mt-[6px] ml-[612px] flex justify-between ">
            <IoCartOutline className="hover:underline underline-offset-4 cursor-pointer"/>
            <FaRegCircleUser className="hover:underline underline-offset-4 cursor-pointer"/>
          </div>
          <hr className="w-[1386px] h-[2px] mt-[70px]   absolute border border-black/15"></hr>
        </div>
        <div className="-[22px] absolute w-[675px] ml-[382px] mt-[90px] text-navtext  ">
          <ul className="flex justify-between">
            <li><Link href={"#"} className="hover:underline underline-offset-4 hover:text-primary">Plant pots</Link></li>
            <li><Link href={"#"} className="hover:underline underline-offset-4 hover:text-primary">Ceramics</Link></li>
            <li><Link href={"#"} className="hover:underline underline-offset-4 hover:text-primary">Tabls</Link></li>
            <li><Link href={"#"} className="hover:underline underline-offset-4 hover:text-primary">Chairs</Link></li>
            <li><Link href={"#"} className="hover:underline underline-offset-4 hover:text-primary">Crockery</Link></li>
            <li><Link href={"#"} className="hover:underline underline-offset-4 hover:text-primary">Tableware</Link></li>
            <li><Link href={"#"} className="hover:underline underline-offset-4 hover:text-primary">Cultery</Link></li>
          </ul>
        </div>
      </header> */}
      <div className="h-[209px] w-[1440px] mt-[50px] m-auto flex bg-green-300">
        <Image
          src={"/navbar_header/Frame_143.png"}
          alt="Header Frame Image"
          width={1440}
          height={209}
          className=""
        ></Image>
      </div>
      <div className="h-[64px] w-[1440px] m-auto flex items-center text-darkprimary ">
        <div className="h-[48px] w-[557px] flex ml-[24px] text-[16px]  items-center ">
          <div className="hover:underline underline-offset-4 flex  hover:text-primary cursor-pointer">
            Category
            <Link href={"#"}>
              <FaCaretDown className="pl-1 mt-[5px] flex hover:text-primary" />
            </Link>
          </div>

          <div className=" ml-[74px] hover:underline flex underline-offset-4  hover:text-primary cursor-pointer">
            Product type
            <Link href={"#"}>
              <FaCaretDown className="pl-1 mt-[5px] hover:text-primary" />
            </Link>
          </div>

          <div className=" ml-[74px] hover:underline flex underline-offset-4  hover:text-primary cursor-pointer">
            Price
            <Link href={"#"}>
              <FaCaretDown className="pl-1 mt-[5px] hover:text-primary" />
            </Link>
          </div>

          <div className=" ml-[74px] hover:underline flex underline-offset-4  hover:text-primary cursor-pointer">
            Brand
            <Link href={"#"}>
              <FaCaretDown className="pl-1 mt-[5px] hover:text-primary " />
            </Link>
          </div>
        </div>
        <div className="h-[48px] w-[237px] flex ml-[598px]  ">
          <p className="text-[14px] flex mt-[13.5px]"> Sorting by:</p>
          <div className=" ml-[40px] mt-[12px] hover:underline flex underline-offset-4  hover:text-primary cursor-pointer">
            Date added
            <Link href={"#"}>
              <FaCaretDown className="pl-2 mt-[5px] hover:text-primary " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar_Header;
