import Image from "next/image";
import React from "react";

const Popular_products = () => {
  return (
    <div className="h-[761px] w-[1440px] relative m-auto flex ">
      <h1 className="h-[45px] w-[330px] mt-[80px] ml-[80px] text-[32px] tracking-tight">
        Our popular products
      </h1>
      <div className="h-[462px] w-[1280px]  absolute mt-[152px] ml-[80px] flex justify-between items-center ">
        <div className="h-[462px] w-[630px] absoulte bg-white">
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
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/popular_products/Photo.png"}
            alt="Photo Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Dandy chair
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £250
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/popular_products/chair2.png"}
            alt="chair2 Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Dandy chair
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £250
            </p>
          </div>
        </div>
      </div>
      <button className="h-[56px] w-[170px] mt-[649px] flex justify-center text-darkprimary  text-[16px] ml-[235px] bg-white shadow-lg border-2 border-darkprimary">
        <span className="mt-[16px]  hover:text-red-800">View collection</span>
      </button>
    </div>
  );
};

export default Popular_products;
