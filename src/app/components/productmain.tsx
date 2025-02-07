import Image from "next/image";
import React from "react";

const Product_Main = () => {
  return (
    <div className="h-auto lg:h-[761px] w-full lg:w-[1440px] relative m-auto flex flex-col lg:flex-row">
      <h1 className="h-auto lg:h-[39px] w-full lg:w-[217px] flex lg:mt-[80px] lg:ml-[80px] text-[32px] tracking-tight text-center lg:text-left">
        New Ceramics
      </h1>
      <div className="h-auto lg:h-[462px] w-full lg:w-[1280px] grid grid-cols-2 gap-2 mt-[60px] lg:grid-cols-4 lg:gap-6 absolute lg:mt-[152px] lg:ml-[80px] ">
        {/* First Product */}
        <div className="h-full lg:h-[462px] w-full lg:w-[305px] bg-white relative">
          <Image
            src={"/product_main/Photo.png"}
            alt="Chair Image"
            width={305}
            height={375}
            layout="responsive"
            className="rounded-md"
          />
          <div className="flex flex-col justify-between absolute bottom-0 left-0 p-4 w-full bg-white bg-opacity-50 ">
            <p className="text-[20px] tracking-tight text-black">
              The Dandy chair
            </p>
            <p className="text-[18px] text-black">£250</p>
          </div>
        </div>

        {/* Second Product */}
        <div className="h-full lg:h-[462px] w-full lg:w-[305px] bg-white relative">
          <Image
            src={"/product_main/Parent.png"}
            alt="Parent Image"
            width={305}
            height={375}
            layout="responsive"
            className="rounded-md"
          />
          <div className="flex flex-col justify-between absolute bottom-0 left-0 p-4 w-full bg-white bg-opacity-50 rounded-b-md">
            <p className="text-[20px] tracking-tight text-black">
              Rustic Vase Set
            </p>
            <p className="text-[18px] text-black">£155</p>
          </div>
        </div>

        {/* Third Product */}
        <div className="h-full lg:h-[462px] w-full lg:w-[305px] bg-white relative">
          <Image
            src={"/product_main/Parent (1).png"}
            alt="Parent (1) Image"
            width={305}
            height={375}
            layout="responsive"
            className="rounded-md"
          />
          <div className="flex flex-col justify-between absolute bottom-0 left-0 p-4 w-full bg-white bg-opacity-50 rounded-b-md">
            <p className="text-[20px] tracking-tight text-black">
              The Silky Vase
            </p>
            <p className="text-[18px] text-black">£125</p>
          </div>
        </div>

        {/* Fourth Product */}
        <div className="h-full lg:h-[462px] w-full lg:w-[305px] bg-white relative">
          <Image
            src={"/product_main/Parent (2).png"}
            alt="Parent (2) Image"
            width={305}
            height={375}
            layout="responsive"
            className="rounded-md"
          />
          <div className="flex flex-col justify-between absolute bottom-0 left-0 p-4 w-full bg-white bg-opacity-50 rounded-b-md">
            <p className="text-[20px] tracking-tight text-black">
              The Lucy Lamp
            </p>
            <p className="text-[18px] text-black">£399</p>
          </div>
        </div>
      </div>
      <button className="lg:absolute lg:bottom-[20px] w-full lg:w-[170px] mx-auto lg:mx-0 lg:left-[50%] transform lg:-translate-x-[50%] flex justify-center items-center text-darkprimary text-[16px] bg-white shadow-lg border-2 border-darkprimary py-3 mt-[600px] lg:mt-0">
        <span className="hover:text-red-800">View collection</span>
      </button>
    </div>
  );
};

export default Product_Main;
