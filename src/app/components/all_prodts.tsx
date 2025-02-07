"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "@/sanity/lib/client";

// Interface definitions here
interface ImageAsset {
  _id: string;
  url: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
}

interface Dimensions {
  height: number;
  width: number;
  depth: number;
}

interface Product {
  _id: string;
  name: string;
  slug: { current: string }; // Ensure the slug is an object with the "current" field
  price: number;
  quantity: number;
  tags: string[];
  description: string;
  features: string[];
  image: {
    asset: ImageAsset;
  };
  category: Category;
  dimensions: Dimensions;
}

const All_Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
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

      // Query Sanity client directly
      const data = await client.fetch(query); // Using the Sanity client to fetch data
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full mx-auto p-4">
      {/* Display all products in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href={`/products/${product.slug.current}`}>
              <Image
                src={product.image.asset.url}
                alt={product.name}
                width={305}
                height={300}
                className="rounded-md w-[305px] h-[350px]"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-xl font-bold mt-4">£{product.price}</p>
              </div>
            </Link>{" "}
          </div>
        ))}
      </div>

      <button className="mt-8 mx-auto block px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
        View Collection
      </button>
    </div>
  );
};

export default All_Products;
