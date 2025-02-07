"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      router.push("/cart"); // Redirect to cart if no cart data
    }
  }, []);

  const handlePlaceOrder = () => {
    // This function will process the order
    localStorage.removeItem("cart");
    alert("Your order has been placed successfully!");
    router.push("/"); // Navigate to home or any confirmation page
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        {/* Cart Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.productId} className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src={item.image?.asset?.url || "/default-image.jpg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div>
                      <p>{item.name}</p>
                      <p>£{item.price}</p>
                    </div>
                  </div>
                  <div>
                    <p>Qty: {item.quantity}</p>
                    <p>Total: £{item.price * item.quantity}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in cart</p>
            )}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-semibold">Total: £{getTotal()}</h3>
          </div>

          {/* Shipping Info Form */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <form>
              <div className="mt-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your address"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="payment" className="block text-sm font-medium text-gray-700">
                  Payment Information
                </label>
                <input
                  type="text"
                  id="payment"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Enter your payment info"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-6 flex justify-end">
          <button
            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
