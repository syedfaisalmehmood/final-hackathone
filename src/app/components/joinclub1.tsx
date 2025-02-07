import React from "react";

const Join_club_1 = () => {
  return (
    <div className="h-auto lg:h-[481px]  w-full lg:w-[1440px] text-darkprimary mx-auto flex ">
      <div className="w-full lg:w-[1273px]">
        {/* Heading Section */}

        <h1 className="h-auto lg:h-[50px] w-full lg:w-[571px] lg:text-[36px] lg:mt-[120px] lg:ml-[444px] text-left text-[20px] ">
          Join the club and get the benefits
        </h1>
        <p className="h-auto lg:h-[54x] w-full lg:w-[520px] mt-[16px] lg:ml-[470px] absolute text-[14px] lg:text-[18px] flex justify-center font-light text-center ">
          Sign up for our newsletter and receive exclusive offers on <br />
          new ranges, sales, pop up stores and more
        </p>

        <div className="lg:ml-[495px] mt-[72px]">
          <input
            className="h-[56px] lg:h-[58px] w-[354px] absolute flex mt-[72px] bg-white pl-4 text-darkprimary border-2 border-darkprimary"
            type="text"
            placeholder="your@email.com"
          ></input>
          <button className="h-[56px] lg:h-[58px] w-[118px] absolute mt-[72px] ml-[345px] bg-darkprimary text-white hover:text-green-200">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join_club_1;
