import React from "react";

interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-400 shadow-sm rounded-xl ">
      <div className="h-60 flex flex-col justify-center items-center rounded-t-xl">
        <div className="size-full p-1">
          <img
            src={product.image}
            alt=""
            className="rounded-md size-full object-cover"
          />
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-center">
          <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 ">
            {product.category}
          </span>
          <span className="text-xs font-semibold">
            Rating: {product.rating.rate}/5
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 ">
          {product.title}
        </h3>
        <h4 className="text-sm mt-2  font-semibold">
          Price : <span className="text-xs">{product.price} INR</span>
        </h4>
        <p className="mt-3 text-gray-500 ">{product.description}</p>
      </div>
      <div className="mt-auto  flex border-t border-gray-200 divide-x divide-gray-200 hover:border-neutral-950">
        <a
          className="w-full rounded-b-lg transition-all duration-300 hover:bg-transparent hover:text-black  py-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-es-xl bg-neutral-950 text-white  shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          href="#"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
