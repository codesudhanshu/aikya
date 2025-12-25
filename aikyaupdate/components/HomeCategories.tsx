import React from "react";
import Title from "./Title";
import { Category } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const HomeCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-purple-50/50 border border-purple-200 my-10 md:my-20 p-5 lg:p-7 rounded-md">
      <Title className="border-b border-purple-200 pb-3 bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent">Popular Categories</Title>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories?.map((category) => (
          <div
            key={category?._id}
            className="bg-white p-5 flex items-center gap-3 group rounded-md hover:shadow-lg hover:shadow-purple-500/10 hoverEffect"
          >
            {category?.image && (
              <div className="overflow-hidden border border-purple-300/30 hover:border-purple-500 hoverEffect w-20 h-20 p-1 rounded-md">
                <Link href={`/category/${category?.slug?.current}`}>
                  <Image
                    src={urlFor(category?.image).url()}
                    alt="categoryImage"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain group-hover:scale-110 hoverEffect"
                  />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;