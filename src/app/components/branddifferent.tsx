import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";

const Brand_Different = () => {
  return (
    <div className="h-auto relative w-full md:w-[1440px] mx-auto sm:flex sm:flex-col flex text-darkprimary">
      {/* Heading */}
      <h3 className="h-[34px] w-full md:w-[366px] text-[24px] flex mt-[60px] absolute justify-center md:ml-[550px]">
        What makes our brand different
      </h3>

      {/* Main Container for Divs */}
      <div className="h-auto flex flex-col sm:flex-col md:flex-row md:justify-between  w-full md:ml-[80px] md:w-[1264px] mt-[120px] md:mt-[145px] gap-6 sm:gap-6 md:gap-0">
        {/* Fast delivery div */}
        <div className="h-[124px] w-full md:w-[270px] flex flex-col mb-6 sm:mb-6 md:mb-0">
          {/* Fast delivery icon */}
          <LiaShippingFastSolid className="h-[24px] w-[24px] items-left" />
          <div className="h-[84px] w-full  ">
            <h4 className="text-[20px]">Next day as standard</h4>
            <p className="mt-[8px] text-[16px]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
        </div>

        {/* Checkmark div */}
        <div className="h-[124px] w-full md:w-[266px] flex flex-col  mb-6 sm:mb-6 md:mb-0">
          {/* Checkmark icon */}
          <IoIosCheckmarkCircleOutline className="h-[24px] w-[24px]" />
          <div className="h-[84px] w-full  ">
            <h4 className="text-[20px]">Made by true artisans</h4>
            <p className="mt-[8px] text-[16px]">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
        </div>

        {/* Credit card div */}
        <div className="h-[124px] w-full md:w-[235px] flex flex-col  mb-6 sm:mb-6 md:mb-0">
          {/* Credit card icon */}
          <GoCreditCard className="h-[24px] w-[24px]" />
          <div className="h-[84px] w-full  ">
            <h4 className="text-[20px]">Unbeatable prices</h4>
            <p className="mt-[8px] text-[16px] tracking-tight">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
        </div>

        {/* Sprout div */}
        <div className="h-[124px] w-full md:w-[265px] flex flex-col  mb-6 sm:mb-6 md:mb-0">
          {/* Sprout icon */}
          <LuSprout className="h-[24px] w-[24px]" />
          <div className="h-[84px] w-full  ">
            <h4 className="text-[20px]">Recycled packaging</h4>
            <p className="mt-[8px] text-[16px] tracking-tight">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand_Different;
