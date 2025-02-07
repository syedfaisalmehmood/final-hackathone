import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

const NavBar_2 = () => {
  return (
    <div className="h-[121px] w-[1440px] m-auto flex relative font-sans ">
      <div className="h-[41px] w-[1440px] flex  items-center absolute text-white bg-darkprimary">
        <LiaShippingFastSolid className="  ml-[516px] " />
        <p className="ml-[8px] text-[14px] ">
          Free delivery on all orders over £50 with code easter checkout
        </p>
        <div>
          <RxCross2 className="ml-[475px] h-[24px] w-[24px] " />
        </div>

        {/* Avion Company Image */}
        <div
          className="h-[80px] absolute
       w-[1440px] mt-[122px] m-auto flex "
        >
          <div className="h-[30px] w-[65px] mt-[24px] ml-[80px] ">
            <Image
              src={"/navbar/Avion.png"}
              alt="Avion Image"
              height={30}
              width={65}
              className="mt-[8px]"
            ></Image>
          </div>
          {/* Navbar div */}
          <div className="h-[22px] absolute w-[675px] ml-[297px] mt-[29px] text-navtext  ">
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
          <div className="h-[16px] absolute flex w-[80px] mt-[30px] ml-[1280px] justify-between items-center ">
            {/* Icons div */}
            <div className="h-[16px] w-[80px] flex mt-[6px] justify-between text-darkprimary ">
              <CiSearch />
              <IoCartOutline />
              <FaRegCircleUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar_2;
