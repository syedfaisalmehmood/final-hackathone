import Image from "next/image";
import React from "react";

const NewCeramics = () => {
  return (
    <div className="h-[761px] w-[1440px] relative m-auto flex ">
      <h1 className="h-[39px] w-[267px] mt-[80px] ml-[80px] text-[32px] tracking-tight ">
        You might also like
      </h1>
      <div className="h-[462px] w-[1280px]  absolute mt-[152px] ml-[80px] flex justify-between items-center ">
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/new_ceramics/Photo.png"}
            alt="Chair Image"
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
            src={"/new_ceramics/Parent.png"}
            alt="Parent Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              Rustic Vase Set
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £155
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/new_ceramics/Parent (1).png"}
            alt="Parent (1) Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Silky Vase
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £125
            </p>
          </div>
        </div>
        <div className="h-[462px] w-[305px] absoulte bg-white">
          <Image
            src={"/new_ceramics/Parent (2).png"}
            alt="Parent (2) Image"
            width={305}
            height={375}
            className=""
          ></Image>
          <div className="h-[63px] w-[154px] absolute flex justify-between mt-[24px] ">
            <p className="h-[28px] w-[184px] text-[20px] tracking-tight">
              The Lucy Lamp
            </p>
            <p className="h-[27px] w-[44px] absolute  text-[18px] mt-[36px]">
              £399
            </p>
          </div>
        </div>
      </div>
      <button className="h-[56px] w-[170px] mt-[649px] flex justify-center text-darkprimary  text-[16px] ml-[340px] bg-white shadow-lg border-2 border-darkprimary">
        <span className="mt-[16px]  hover:text-red-800">View collection</span>
      </button>
    </div>
  );
};

export default NewCeramics;
