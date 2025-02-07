import Image from "next/image";
import React from "react";


const Hero_2 = () => {
  return (
    <div className=" font-sans">
      <div className="h-[704px] relative w-[1440px] m-auto flex  ">
        <h1></h1>
      

          {/* Right Side Div for Chair Image */}
            <Image
              src={"/hero_2/Hero_Blocks.png"}
              alt="Chair Image"
              height={704}
              width={1440}
              className="absolute"
            ></Image>
              <div className="h-[444px] w-[630px] absolute flex mt-[130px] ml-[730px] bg-white">
              <div className="h-[137px] w-[513px] absolute text-darkprimary flex mt-[48px] ml-[56px] ">
                <h1 className="text-[32px] absolute">Luxury homeware for people who love timeless design quality</h1>
                <p className="text-[18px] absolute mt-[110px]">Shop the new Spring 2022 collection today</p>
              </div>
              <button className="h-[56px] w-[170px] text-[16px] mt-[342px] ml-[56px] shadow-md hover:border  border-buttoncolor hover:text-red-800">
              View collection
              </button>
        </div>
      </div>
    </div>
  );
};

export default Hero_2;
