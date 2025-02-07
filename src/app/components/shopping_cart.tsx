"use client";

import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";

import React, { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface CartItem {
  productId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: {
    asset?: {
      url: string;
    };
  };
}

const Shopping_Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Function to update quantity of items
  const updateQuantity = (productId: string, increment: boolean) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.productId === productId) {
          const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
      return updatedCart;
    });
  };

  // Function to delete an item from the cart
  const deleteItem = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.productId !== productId); // Remove the item with the specific productId
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
      return updatedCart;
    });
  };

  // Function to calculate the total price
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Clear cart function
  const clearCart = () => {
    setCart([]); // Clear the state
    localStorage.removeItem("cart"); // Remove from localStorage
  };

  return (
    <div className="h-[1400px]  w-[1440px] m-auto flex justify-center text-darkprimary ">
      <div className="h-[637px] w-[1064px] mt-[64px] relative ">
        <h1 className="h-[50px] w-[328px] text-[36px]">Your shopping cart</h1>
        <div className="h-[539px] w-[1064px] mt-[48px] ">
          <hr className="w-[1064px] h-[2px] mt-[30px] absolute border border-black/15"></hr>

          {/* Cart Items Heading */}
          <ul className="flex items-center justify-between px-2 ">
            <li>Product</li>
            <li className="pl-32">Quantity</li>
            <li className="">Total</li>
            <li className="">RemoveItem</li>
          </ul>

          {/* Map through cart items */}
          {cart.map((item) => {
            const imageUrl = item.image?.asset?.url
              ? urlFor(item.image).url()
              : "/default-image.jpg"; // Default image if not found

            return (
              <div
                key={item.productId}
                className="h-[100px] w-[1064px] mt-[32px] "
              >
                <div className="h-[100px]  w-[350px] flex justify-between absolute items-center">
                  <div className="h-[100px]  w-[300px] ">
                    {/* Safely accessing the image URL */}
                    <Image
                      src={imageUrl}
                      alt={item.name}
                      className="w-[300px] h-[100px] object-cover rounded-lg"
                      width={300}
                      height={100}
                    />
                  </div>
                  <div className="h-[60px] pl-[10px] w-[379px] ">
                    <h2 className="h-[28px] w-[250px] text-[20px]">
                      {item.name}
                    </h2>
                    <p className="h-[22px] w-[179px] mt-[26px] text-[14px]">
                      £{item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity Update */}
                <div className="h-[46px] w-[122px] absolute flex justify-between text-darkprimary mt-[20px] ml-[400px] ">
                  <ul className="flex">
                    <li
                      className="mt-[12px]  cursor-pointer"
                      onClick={() => updateQuantity(item.productId, false)}
                    >
                      -
                    </li>
                    <li className="mt-[12px] ml-[33px]">{item.quantity}</li>
                    <li
                      className="mt-[12px] ml-[33px] cursor-pointer"
                      onClick={() => updateQuantity(item.productId, true)}
                    >
                      +
                    </li>
                  </ul>
                </div>

                {/* Item Total */}
                <div className="h-[27px] w-[33px] absolute flex justify-between text-darkprimary mt-[28px] ml-[700px] ">
                  £{item.price * item.quantity}
                </div>

                {/* Delete Button */}
                <div
                  className="h-[27px] w-[33px] absolute flex justify-between text-darkprimary mt-[10px] ml-[1000px] cursor-pointer"
                  onClick={() => deleteItem(item.productId)} // Delete only the clicked item
                >
                  <RiDeleteBinLine className="text-[40px] text-red-700" />
                </div>
              </div>
            );
          })}

          <hr className="w-[1064px] h-[2px] mt-[32px] absolute border border-black/15"></hr>

          {/* Subtotal */}
          <div className="h-[67px] w-[282px] mt-[60px] ml-[782px] ">
            <div className="h-[34px] w-[150px] absolute ml-[132px]">
              <h5 className="text-[20px] mt-[3px] absolute">Subtotal</h5>
              <h5 className="text-[20px] mt-[3px] ml-[104px] absolute">
                £{getTotal()}
              </h5>
            </div>
            <p className="text-[14px] mt-[46px] absolute tracking-tighter">
              Taxes and shipping are calculated at checkout
            </p>
          </div>

          <button
            className="h-[56px] w-[172px] text-[16px] ml-[892px] mt-[15px] text-white flex justify-center items-center bg-darkprimary"
          >
            <Link href="/checkoutPage" className="text-white">
              Go to checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shopping_Cart;
