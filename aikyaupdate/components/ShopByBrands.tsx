import React from "react";
import Title from "./Title";
import Link from "next/link";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";

const extraData = [
  {
    title: "Free Delivery",
    description: "Free shipping over $100",
    icon: <Truck size={45} />,
  },
  {
    title: "Free Return",
    description: "Free shipping over $100",
    icon: <GitCompareArrows size={45} />,
  },
  {
    title: "Customer Support",
    description: "Friendly 27/7 customer support",
    icon: <Headset size={45} />,
  },
  {
    title: "Money Back guarantee",
    description: "Quality checked by our team",
    icon: <ShieldCheck size={45} />,
  },
];

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return (
    <div className="mb-10 lg:mb-20 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-purple-50/50 p-5 lg:p-7 rounded-md border border-purple-100">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title className="bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent">Shop By Brands</Title>
        <Link
          href={"/shop"}
        className="border border-purple-300 px-4 py-1 rounded-full hover:bg-gradient-to-r hover:from-[#7B3B87] hover:via-[#4A5FA5] hover:to-[#6B4B9E] hover:text-white hover:border-purple-500 hoverEffect"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {brands?.map((brand) => (
          <Link
            key={brand?._id}
            href={{ pathname: "/shop", query: { brand: brand?.slug?.current } }}
            className="bg-white w-34 h-24 flex items-center justify-center rounded-md overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 hover:border hover:border-purple-300 hoverEffect"
          >
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()}
                alt="brandImage"
                width={250}
                height={250}
                className="w-32 h-20 object-contain"
              />
            )}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-2 shadow-sm hover:shadow-purple-500/20 py-5">
        {extraData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 group text-lightColor hover:bg-gradient-to-r hover:from-[#7B3B87] hover:via-[#4A5FA5] hover:to-[#6B4B9E] hover:bg-clip-text hover:text-transparent"
          >
            <span className="inline-flex scale-100 group-hover:scale-90 hoverEffect [&_svg]:group-hover:stroke-[#6B4B9E]">
              {item?.icon}
            </span>
            <div className="text-sm">
              <p className="text-darkColor/80 font-bold capitalize group-hover:bg-gradient-to-r group-hover:from-[#7B3B87] group-hover:via-[#4A5FA5] group-hover:to-[#6B4B9E] group-hover:bg-clip-text group-hover:text-transparent">
                {item?.title}
              </p>
              <p className="text-lightColor">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;