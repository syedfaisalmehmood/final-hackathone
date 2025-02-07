import Image from "next/image";
import React from "react";

const MainPage = () => {
  return (
    <div className=" font-sans">
      <div className="h-[704px] w-[1440px] m-auto flex justify-center  ">
        <div className="h-[584px] w-[1280px] mt-[60px] flex justify-center  ">
          {/* Left Side Div for Text */}
          <div className="h-[584px] w-[760px] bg-darkprimary ">
            {/* text-1 div */}
            <div className="h-[187px] flex w-[513px] relative mt-[60px] ml-[60px] ">
              <div className="h-[90px] absolute flex w-[513] text-[32px] text-white tracking-wide ">
                <h2>
                  The furniture brand for the <br></br>future, with timeless
                  designs
                </h2>
              </div>
              <div className="h-[56px] absolute flex w-[170px] mt-[131px] ml-[] bg-buttoncolor">
                <button className="font-medium flex justify-center items-center ml-[26px] text-white">
                  View collection
                </button>
              </div>
            </div>
            <p className="h-[81px] w-[620px] mt-[196px] ml-[60px] text-[18px] text-white ">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          {/* Right Side Div for Chair Image */}
          <div className="h-[584px] w-[520px] ">
            <Image
              src={"/main_Page/Right Image.png"}
              alt="Chair Image"
              height={584}
              width={520}
              className=""
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
