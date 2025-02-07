import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";


const Join_club_2 = () => {
  return (
    <div className="h-[481px] w-[1440px] m-auto relative text-white flex justify-center items-center ">
      <Image
      src={"/Join_club_2/join_club_2.png"}
      alt="Join_club_2 Image"
      width={1440}
      height={481}
      className=""></Image>
      <div className="h-[384px] w-[1273px] absolute   ">
        <div className="h-[165px] w-[494px] absolute mt-[97px] ml-[393px] ">
        <div className="h-[114px] w-[494px] absolute  flex justify-center  ">
          <h1 className="h-[45px] w-[494px] absolute  text-[32px] flex justify-center  tracking-tight">
            Join the club and get the benefits
          </h1>
          <p className="h-[54x] w-[470px] mt-[61px] absolute  flex justify-center font-light text-center">
            Sign up for our newsletter and receive exclusive offers on <br /> new
            ranges, sales, pop up stores and more
          </p>
        </div>
        <div className="h-[24px] w-[442px] mt-[141px] ml-[26px] flex  items-center ">
        
        <div className="h-[24px] w-[131px] flex  items-center bg">
          <FaCheckCircle  className=" text-[16px]"/>
          <p className="pl-2 flex text-[16px] tracking-tighter ">Exclusive offers</p>
        </div>
        
        <div className="h-[24px] w-[110px] flex ml-[34px] items-center ">
          <FaCheckCircle  className=" text-[16px]"/>
          <p className=" pl-2 tracking-tight">Free events</p>
        </div>
        
        <div className="h-[24px] w-[134px]  flex ml-[34px] items-center ">
          <FaCheckCircle  className=" text-[16px]"/>
          <p className=" pl-2 flex text-[16px] tracking-tighter ">Large discounts</p>
        </div>
        </div>
        </div>
        <div className="ml-[400px] mt-[220px] absolute">
          <input
            className="h-[58px] w-[354px] absolute flex mt-[72px] ml-[14px] bg-white pl-4 text-darkprimary border-2 border-darkprimary"
            type="text"
            placeholder="your@email.com"
          ></input>
          <button className="h-[58px] w-[118px] absolute mt-[72px] ml-[345px] bg-darkprimary text-white hover:text-green-200">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join_club_2;
