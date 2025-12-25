"use client";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center justify-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:bg-gradient-to-r hover:from-[#7B3B87] hover:via-[#4A5FA5] hover:to-[#6B4B9E] hover:bg-clip-text hover:text-transparent hoverEffect relative group ${
            pathname === item?.href && "bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent"
          }`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] group-hover:w-1/2 hoverEffect group-hover:left-0 ${
              pathname === item?.href && "w-1/2"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] group-hover:w-1/2 hoverEffect group-hover:right-0 ${
              pathname === item?.href && "w-1/2"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
