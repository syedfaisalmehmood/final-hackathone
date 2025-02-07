import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";

const Brand_Different = () => {
  return (
        //  {/* New div for What makes our brand different  */}
      <div className="h-[355px] relative w-[1440px] mx-auto flex justify-center text-darkprimary ">
        <h3 className="h-[34px]  w-[366px] text-[24px] flex mt-[60px] justify-center ">
          What makes our brand different
        </h3>
        <div className="h-[124px] flex w-[1264px] absolute mt-[145px] -ml-[10px]  ">
          {/* fast delivery div */}
          <div className="h-[124px] w-[270px] flex relative ">
            {/* fast delivery icon */}
            <LiaShippingFastSolid className="h-[24px] w-[24px] absolute " />
            <div className="h-[84px] w-[270px] mt-[40px] absolute ">
              <h4 className="text-[20px]">Next day as standard</h4>
              <p className="mt-[8px] text-[16px]">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>

            {/* check mark div */}
            <div className="h-[124px] w-[266px] ml-[340px] relative  ">
              {/* checkmark icon */}
              <IoIosCheckmarkCircleOutline className="h-[24px] w-[24px]" />
              <div className="h-[84px] w-[270px] mt-[16px] absolute ">
                <h4 className="text-[20px]">Made by true artisans</h4>
                <p className="mt-[8px] text-[16px]">
                  Handmade crafted goods made with real passion and craftmanship
                </p>
              </div>
            </div>
            {/* credit card div */}
            <div className="h-[124px] w-[235px] ml-[320px] relative  ">
              {/* credit card icon */}
              <GoCreditCard className="h-[24px] w-[24px]" />
              <div className="h-[84px] w-[235px] mt-[16px] absolute ">
                <h4 className="text-[20px]">Unbeatable prices</h4>
                <p className="mt-[8px] text-[16px] tracking-tight">
                  For our materials and quality you won’t find better prices
                  anywhere
                </p>
              </div>
            </div>
            {/* sprout div */}
            <div className="h-[124px] w-[265px] ml-[310px] relative  ">
              {/* sprout icon */}
              <LuSprout className="h-[24px] w-[24px]" />
              <div className="h-[84px] w-[265px] mt-[16px] absolute ">
                <h4 className="text-[20px]">Recycled packaging</h4>
                <p className="mt-[8px] text-[16px] tracking-tight">
                  We use 100% recycled packaging to ensure our footprint is
                  manageable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Brand_Different;