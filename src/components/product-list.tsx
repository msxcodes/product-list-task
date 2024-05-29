"use client";
import React, { useEffect } from "react";
import ProductCard from "./product-card";

export default function ProductList() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const fetchApi = async (url: string): Promise<any> => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Some Error Occurred:", error);
      }
    };
    fetchApi("https://fakestoreapi.com/products");
  }, []);
  const [searchVal, setSearchVal] = React.useState<string>("");

  const filteredProducts = products.filter((product: any) => {
    if (searchVal === "") {
      return product;
    } else {
      return product.title.toLowerCase().includes(searchVal.toLowerCase());
    }
  });

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mb-8 flex justify-center  ">
        <input
          type="text"
          onChange={(e) => setSearchVal(e.target.value)}
          className="border w-2/4 py-2 px-4 bg-gray-200 rounded-md"
          placeholder="Type title to search here "
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
