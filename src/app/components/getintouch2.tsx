import Image from "next/image";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";

const GetinTouch_2 = () => {
  return (
    <div className=" font-sans">
      <div className="h-[603px] w-[1440px] mt-[65px] mx-auto flex justify-center  ">
        {/* Left Side Div for Text */}
        <div className="h-[603px] w-[720px] bg-darkprimary  ">
          <Image
            src={"/Get_in_touch_2/Image01.png"}
            alt="Get In Touch_2 Image"
            height={603}
            width={720}
            className=""
          ></Image>
        </div>

        {/* Right Side Div for Chair Image */}
        <div className="h-[603px] w-[720px]  ">
          {/* text-1 div */}
          <div className="h-[225px] w-[536px] flex  relative mt-[72px] ml-[84px]  ">
            <div className="absolute flex  ">
              <h2 className="h-[68px] w-[514px] text-[24px] text-darkprimary ">
                Our service isn’t just personal, it’s actually hyper personally
                exquisite
              </h2>
              <p className="h-[132px] w-[536px] absolute mt-[93px] text-[16px] leading-snug text-textlight  ">
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
                <br />
                <br />
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
            </div>

            <button className="font-medium flex justify-center items-center h-[56px] absolute w-[150px] shadow-black shadow-sm  mt-[421px] ml-[28px] text-[16px] text-darkprimary">
              Get in touch
            </button>
          </div>
          <p className="h-[81px] w-[620px] mt-[196px] ml-[60px] text-[18px] text-white ">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch_2;
