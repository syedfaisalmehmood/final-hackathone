import Image from "next/image";
import React from "react";

const Popular_products = () => {
  return (
    <div className="h-auto lg:h-[761px] w-full lg:w-[1440px] relative mx-auto flex ">
      <h1 className="h-full lg:h-[45px] w-[1280px] mt-[80px]  lg:ml-[80px] text-[32px] tracking-tight">
        Our popular products
      </h1>
      <div className="h-auto lg:h-[462px] w-full lg:w-[1280px]  absolute  mt-[152px] lg:ml-[80px] grid grid-cols-2  lg:grid-col3 lg:flex lg:justify-between lg:items-center ">
        <div className="hidden md:block h-[462px] w-[630px] absoulte bg-white">
          <Image
            src={"/popular_products/Product Card.png"}
            alt="Product Card Image"
            width={630}
            height={462}
            className=""
          ></Image>
          <div className="h-[63px] w-[209px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[209px] text-[20px] tracking-tight">
              The Poplar suede sofa
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £980
            </p>
          </div>
        </div>
        <div className="h-auto lg:h-[462px] w-full lg:w-[305px] absoulte bg-white">
          <Image
            src={"/popular_products/Photo.png"}
            alt="Photo Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-auto lg:h-[63px] w-full lg:w-[154px] absolute lg:flex lg:justify-between mt-[24px] ">
            <p className="h-auto lg:h-[28px] w-full lg:w-[184px] text-[20px] tracking-tight">
              The Dandy chair
            </p>
            <p className="h-auto lg:h-[27px] w-full lg:w-[44px] absolute  text-[18px] mt-[36px]">
              £250
            </p>
          </div>
        </div>
        <div className="h-auto lg:h-[462px] w-full lg:w-[305px] absoulte bg-white">
          <Image
            src={"/popular_products/chair2.png"}
            alt="chair2 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-auto lg:h-[63px] w-full lg:w-[154px] absolute lg:flex lg:justify-between mt-[24px] ">
            <p className="h-auto lg:h-[28px] w-full lg:w-[184px] text-[20px] tracking-tight">
              The Dandy chair
            </p>
            <p className="h-auto lg:h-[27px] w-full lg:w-[44px] absolute  text-[18px] mt-[36px]">
              £250
            </p>
          </div>
        </div>
      </div>
      <button className="absolute lg:bottom-[20px] w-full lg:w-[170px] mx-auto lg:mx-0 lg:left-[50%] transform lg:-translate-x-[50%]  text-darkprimary text-[16px] bg-white shadow-lg border-2 border-darkprimary py-3 mt-[600px] lg:mt-0">
        <span className="hover:text-red-800">View collection</span>
      </button>
    </div>
  );
};

export default Popular_products;
