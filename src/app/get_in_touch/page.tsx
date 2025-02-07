import Image from "next/image";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";

const GetinTouch = () => {
  return (
    <div className=" font-sans">
      <div className="h-[603px] w-[1440px] mt-[65px] mx-auto flex justify-center  ">
        {/* Left Side Div for Text */}
        <div className="h-[603px] w-[720px]  ">
          {/* text-1 div */}
          <div className="h-[225px] w-[536px] flex  relative mt-[72px] ml-[84px]  ">
            <div className="absolute flex  ">
              <h2 className="h-[68px] w-[514px] text-[24px] text-darkprimary ">
                From a studio in London to a global brand with over 400 outlets
              </h2>
              <p className="h-[132px] w-[536px] absolute mt-[93px] text-[16px] leading-snug text-darkprimary  ">
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
                <br />
                <br />
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
            </div>
            <div className="h-[56px] absolute flex w-[150px] mt-[421px]  border-2 border-darkprimary shadow-black shadow-sm"></div>

            <button className="font-medium flex justify-center items-center mt-[448px] ml-[28px] text-[16px] text-darkprimary">
              Get in touch
            </button>
          </div>
          <p className="h-[81px] w-[620px] mt-[196px] ml-[60px] text-[18px] text-white ">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
        {/* Right Side Div for Chair Image */}
        <div className="h-[603px] w-[720px] bg-darkprimary  ">
          <Image
            src={"/Get_in_touch/getintouch.png"}
            alt="Get In Touch Image"
            height={603}
            width={720}
            className=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
