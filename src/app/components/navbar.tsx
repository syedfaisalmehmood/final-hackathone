import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="font-sans">
      <header className="h-[132px] relative w-[1440px] m-auto flex  ">
        <div className="h-[30px] absolute flex w-[1384px] mt-[20px] ml-[28px] justify-center items-center ">
          <div className="h-[16px] w-[16px] mt-[6px]  ">
            <CiSearch />
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
            <IoCartOutline />
            <FaRegCircleUser />
          </div>
          <hr className="w-[1386px] h-[2px] mt-[70px]   absolute border border-black/15"></hr>
        </div>
        <div className="-[22px] absolute w-[675px] ml-[382px] mt-[90px] text-navtext  ">
          <ul className="flex justify-between">
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tabls</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cultery</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
