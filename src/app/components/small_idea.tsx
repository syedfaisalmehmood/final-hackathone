import Image from "next/image";
import React from "react";

const Small_Idea = () => {
  return (
    <div className="h-[598px] w-[1440px] m-auto flex justify-center text-white items-center ">
      <div className="h-[478px] w-[1280px] m-auto flex justify-between items-center ">
        {/* left side div for text */}
        <div className="h-[478px] w-[634px] flex relative bg-darkprimary">
          <div className="h-[99px] w-[495px] mt-[64px] ml-[64px] ">
            <h1 className="h-[39px] w-[383px] text-[32px] tracking-tight">
              It started with a small idea
            </h1>
            <p className="h-[48px] w-[495px] mt-[12px] leading-snug tracking-tight text-[18px]">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>
          <button className="h-[56px] w-[170px] mt-[384px] absolute ml-[64px] text-[16px]  bg-buttoncolor">
            View collection
          </button>
        </div>
        {/* right side div for image */}
        <div className="h-[478px] w-[634px] flex bg-red-300">
          <Image
            src={"/small_idea/image_block.png"}
            alt="Image Block"
            width={634}
            height={478}
            className=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Small_Idea;
