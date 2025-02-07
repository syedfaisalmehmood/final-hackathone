import Image from "next/image";
import React from "react";

const Hero_1 = () => {
  return (
    <div className="font-sans">
      <div className="h-auto md:h-[704px] w-full max-w-[1440px] mx-auto flex justify-center">
        <div className="h-auto md:h-[584px] w-full max-w-[1280px] mt-[60px] flex justify-center flex-col lg:flex-row">
          {/* Left Side Div for Text */}
          <div className="h-auto md:h-[584px] w-full md:p-12 sm:w-[390px] sm:h-[502px] md:w-[760px] bg-darkprimary p-8 sm:p-4 flex flex-col justify-start sm:items-start text-left">
            {/* h2 text */}
            <div className="flex text-[32px] w-full sm:w-full text-white tracking-wide mb-4 justify-start">
              <h2 className="w-[300px] md:w-[500px] ">
                The furniture brand for the future, with timeless designs
              </h2>
            </div>

            {/* View collection button */}
            <div className="hidden h-[96px] w-full md:w-[170px]  md:flex justify-start items-center mt-4 bg-buttoncolor p-2 ">
              <button className="font-medium flex justify-center items-center text-white w-full ">
                View collection
              </button>
            </div>

            {/* Paragraph text */}
            <p className="text-[18px] text-white mt-[30px] md:mt-[225px]   w-full md:w-[620px]">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>

            {/* View collection button */}
            <div className="h-[56px] w-full md:hidden  flex justify-start items-center mt-4 bg-buttoncolor p-2 ">
              <button className="font-medium md:hidden flex justify-center items-center text-white w-full ">
                View collection
              </button>
            </div>
          </div>

          {/* Right Side Div for Chair Image */}
          <div className="h-auto w-full md:w-[520px] md:block hidden">
            <Image
              src={"/hero_1/RightImage.png"}
              alt="Chair Image"
              height={584}
              width={520}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_1;
