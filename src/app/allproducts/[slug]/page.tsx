"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; 
import Link from "next/link";

// Define the types for product structure
interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  quantity: number;
  tags: string[];
  description: string;
  features: string[];
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  category: {
    _id: string;
    name: string;
    slug: { current: string };
  };
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
}

// Define the cart item structure
interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

const Slug = ({ params: { slug } }: { params: { slug: string } }) => {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); 
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == 'product' && slug.current == "${slug}"]{
          _id,
          name,
          slug,
          price,
          quantity,
          tags,
          description,
          features,
          image {
            asset->{
              _id,
              url
            }
          },
          category->{
            _id,
            name,
            slug
          },
          dimensions {
            height,
            width,
            depth
          }
        }`;

        const fetchedData = await client.fetch(query); 
        if (fetchedData.length > 0) {
          setData(fetchedData[0]);
          setLoading(false);
        } else {
          console.log("Product not found.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  const incrementQuantity = () => {
    if (data && quantity < data.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Add product to the cart (stored in localStorage)
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      
      // Check if product already exists in the cart
      const existingItemIndex = updatedCart.findIndex((item) => item._id === product._id);
      
      if (existingItemIndex === -1) {
        // If the product is not already in the cart, add it
        updatedCart.push({ ...product, quantity });
      } else {
        // If the product is already in the cart, update its quantity
        updatedCart[existingItemIndex].quantity += quantity;
      }

      // Store the updated cart in localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item._id !== productId);
      
      // Store the updated cart in localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  // Get the cart count from localStorage (optional)
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <div className="h-[659px] w-[1440px] mt-[100px] m-auto flex ">
      <div className="h-full lg:h-[559px] w-[721px] ">
        <div className="h-full w-[721px] relative">
          <Image
            src={data.image.asset.url}
            alt={data.name}
            layout="fill" 
            objectFit="contain" 
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="h-[559px] w-[719px] flex mt-[2px]  text-darkprimary ">
        <div className="h-[500px] w-[602px] relative flex mt-[8px]">
          <div className="h-[89px] w-[281px] absolute mt-[2px] ml-[40px]">
            <h1 className="h-[44px] w-[501px]  text-[36px] tracking-tight">
              {data.name}
            </h1>
            <h3 className="h-[32px] w-[59px] mt-[13px] text-[24px]">
              £{data.price}
            </h3>
          </div>
          <div className="h-[251px] w-[602px] flex absolute mt-[108px]">
            <div className="h-[188px] w-[522px] flex ml-[40px] text-textlight">
              <h5 className="text-[16px]">Description</h5>
              <p className="text-[16px] absolute mt-[36px] tracking-tight">
                {data.description}
              </p>
              <ul className="mt-[121px] absolute list-disc ml-[20px]">
                {data.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-[134px] w-[602px] mt-[290px] text-textlight">
            <div className="h-[99px] w-[241px] mt-[20px] ml-[40px]">
              <h5 className="text-[16px]">Dimensions</h5>
              <table className="table-auto w-full mt-[4px] leading-8 text-left">
                <thead className="text-[14px]">
                  <tr>
                    <th>Height</th>
                    <th>Width</th>
                    <th>Depth</th>
                  </tr>
                </thead>
                <tbody className="text-[16px]">
                  <tr>
                    <td>{data.dimensions.height}cm</td>
                    <td>{data.dimensions.width}cm</td>
                    <td>{data.dimensions.depth}cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="h-[95px] w-[602px] mt-[400px] flex absolute  text-textlight">
            <div className="h-[46px] w-[209px] mt-[27px] flex items-center ml-[40px]">
              Amount:
              <div className="h-[46px] w-[128px] flex justify-between text-darkprimary ml-[22px]">
                <ul className="flex">
                  <li
                    className="mt-[12px] ml-[16px] cursor-pointer"
                    onClick={decrementQuantity}
                  >
                    -
                  </li>
                  <li className="mt-[12px] ml-[33px]">{quantity}</li>
                  <li
                    className="mt-[12px] ml-[33px] cursor-pointer"
                    onClick={incrementQuantity}
                  >
                    +
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="h-[46px] w-[153px] flex ml-[419px] mt-[27px] text-[16px] absolute text-white justify-center items-center bg-darkprimary"
              onClick={() => addToCart(data)} // Add the product to cart
            >
              Add to cart
            </button>
          </div>
          <button className="bg-gray-900 ml-[30px] absolute text-[20px] text-white rounded-md hover:bg-gray-600 mt-[510px] h-[40px] w-[500px] ">
            <Link href={"/cartPage"}>Go to Cartpage </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slug;
