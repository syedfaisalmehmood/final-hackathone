// // import React from "react";
// // import All_Products from "../components/all_prodts";
// // import Footer_2 from "../components/footer2";
// // import NavBar_Header from "../components/navbar_header";

// // const Allproducts = () => {
// //   return (
// //     <div>
// //       <NavBar_Header />
// //       <All_Products />
// //       <Footer_2 />
// //     </div>
// //   );
// // };

// // export default Allproducts;
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { client } from "@/sanity/lib/client";

// // Interface definitions here
// interface ImageAsset {
//   _id: string;
//   url: string;
// }

// interface Category {
//   _id: string;
//   name: string;
//   slug: string;
// }

// interface Dimensions {
//   height: number;
//   width: number;
//   depth: number;
// }

// interface Product {
//   _id: string;
//   name: string;
//   slug: { current: string }; // Ensure the slug is an object with the "current" field
//   price: number;
//   quantity: number;
//   tags: string[];
//   description: string;
//   features: string[];
//   image: {
//     asset: ImageAsset;
//   };
//   category: Category;
//   dimensions: Dimensions;
// }

// const All_Products = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product"]{
//         _id,
//         name,
//         slug,
//         price,
//         quantity,
//         tags,
//         description,
//         features,
//         image {
//           asset->{
//             _id,
//             url
//           }
//         },
//         category->{
//           _id,
//           name,
//           slug
//         },
//         dimensions {
//           height,
//           width,
//           depth
//         }
//       }`;

//       // Query Sanity client directly
//       const data = await client.fetch(query); // Using the Sanity client to fetch data
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="w-full mx-auto p-4">
//       {/* Display all products in a responsive grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
//           >
//             <Link href={`/allproducts/${product.slug.current}`}>
//               <Image
//                 src={product.image.asset.url}
//                 alt={product.name}
//                 width={305}
//                 height={300}
//                 className="rounded-md w-[305px] h-[350px]"
//               />
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold">{product.name}</h3>
//                 <p className="text-gray-600 mt-2">{product.description}</p>
//                 <p className="text-xl font-bold mt-4">£{product.price}</p>
//               </div>
//             </Link>{" "}
//           </div>
//         ))}
//       </div>

//       <button className="mt-8 mx-auto block px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
//         View Collection
//       </button>
//     </div>
//   );
// };

// export default All_Products;





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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch products from Sanity
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

      const data = await client.fetch(query); // Using the Sanity client to fetch data
      setProducts(data);
      setFilteredProducts(data); // Initially show all products
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(products); // If search query is empty, show all products
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  // Function to handle adding products to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Store the cart in localStorage
      alert(`${product.name} has been added to the cart!`); // Alert on add to cart
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

  return (
    <div className="w-full mx-auto p-4">
      {/* Search Bar with adjusted margin */}
      <div className="mb-8 mt-16"> {/* Added margin-top here */}
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-3 border rounded-lg shadow-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Display Cart Count */}
      <div className="mb-4 text-right">
        <Link href="/cart">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Cart ({cart.length} items)
          </button>
        </Link>
      </div>

      {/* Display all products in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href={`/allproducts/${product.slug.current}`}>
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
            </Link>
            {/* Add to Cart Button with hover effect */}
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
            >
              Add to Cart
            </button>
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
