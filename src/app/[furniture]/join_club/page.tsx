import React from "react";

const Join_club = () => {
  return (
    <div className="h-[481px] w-[1440px] m-auto flex justify-center items-center ">
      <div className="h-[384px] w-[1273px] mt-[40px] ">
        <div className="h-[114px] w-[571px] mt-[68px] ml-[351px] ">
          <h1 className="h-[50px] w-[571px] text-[36px] ">
            Join the club and get the benefits
          </h1>
          <p className="h-[48px] w-[470px] mt-[16px] ml-[54.5px] flex  text-center">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
        </div>
        <div className="ml-[400px]">
          <input
            className="h-[58px] w-[354px] absolute flex mt-[72px] bg-white pl-4 text-darkprimary border-2 border-darkprimary"
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

export default Join_club;
