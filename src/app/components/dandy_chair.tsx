import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dandy_Chair = () => {
  return (
    <div className="h-[759px] w-[1440px] mt-[60px] m-auto flex  ">
      {/* Left side div for chair image */}
      <div className="h-[759px] w-[721px] ">
        <Image
          src={"/dandy_chair/Image_Left.png"}
          alt="Dandy Chair Image"
          width={721}
          height={759}
          className=""
        ></Image>
      </div>
      <div className="h-[759px] w-[719px] flex  text-darkprimary ">
        <div className="h-[657px] w-[602px] relative flex mt-[51px] ml-[62px] ">
          <div className="h-[89px] w-[281px] absolute mt-[40px] ml-[40px] ">
            <h1 className="h-[44px] w-[281px] text-[36px] tracking-tight">
              The Dandy Chair
            </h1>
            <h3 className="h-[32px] w-[59px] mt-[13px] text-[24px]">£250</h3>
          </div>
          <div className="h-[251px] w-[602px] flex  absolute mt-[143px] ">
            <div className="h-[188px] w-[522px] flex mt-[40px] ml-[40px] text-textlight ">
              <h5 className="text-[16px] ">Description</h5>
              <p className="text-[16px] absolute mt-[36px] tracking-tight">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish <br />
                living space with beech legs and lambskin leather upholstery.
              </p>
              <ul className="mt-[121px] absolute list-disc ml-[20px]">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
            </div>
          </div>
          <div className="h-[134px] w-[602px] mt-[401px] text-textlight ">
            <div className="h-[99px] w-[241px] mt-[20px] ml-[40px] ">
              <h5 className="text-[16px] ">Dimensions</h5>
              <table className="table-auto w-full  mt-[18px] leading-8  text-left">
                <thead className="text-[14px]">
                  <tr>
                    <th>Height</th>
                    <th>Width</th>
                    <th>Depth</th>
                  </tr>
                </thead>
                <tbody className="text-[16px]">
                  <tr>
                    <td>110cm</td>
                    <td>75cm</td>
                    <td>50cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="h-[115px] w-[602px] mt-[542px] flex absolute  text-textlight ">
            <div className="h-[46px] w-[209px] mt-[27px] flex items-center ml-[40px]">
              Amount:
              <div className="h-[46px] w-[128px]  flex justify-between text-darkprimary  ml-[22px] ">
                <ul className="flex">
                  <li className="mt-[12px] ml-[16px]">-</li>
                  <li className="mt-[12px] ml-[33px]">1</li>
                  <li className="mt-[12px] ml-[33px]">+</li>
                </ul>
              </div>
            </div>
            <button className="h-[56px] w-[143px] flex ml-[419px] mt-[27px] text-[16px] absolute text-white justify-center items-center bg-darkprimary">
              <Link href={"/cart"}>Add to Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dandy_Chair;
