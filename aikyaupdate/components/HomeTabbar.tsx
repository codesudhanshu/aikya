"use client";
import { productType } from "@/constants/data";
import Link from "next/link";
interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center flex-wrap gap-5 justify-between">
      <div className="flex items-center gap-1.5 text-sm font-semibold">
        <div className="flex items-center gap-1.5 md:gap-3">
          {productType?.map((item) => (
            <button
              onClick={() => onTabSelect(item?.title)}
              key={item?.title}
              className={`border border-purple-500/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-gradient-to-r hover:from-[#7B3B87] hover:via-[#4A5FA5] hover:to-[#6B4B9E] hover:border-purple-500 hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] text-white border-purple-500" : "bg-gradient-to-r from-[#7B3B87]/10 via-[#4A5FA5]/10 to-[#6B4B9E]/10 text-gray-700"}}`}
            >
              {item?.title}
            </button>
          ))}
        </div>
      </div>
      <Link
        href={"/shop"}
       className="border border-purple-300 px-4 py-1 rounded-full hover:bg-gradient-to-r hover:from-[#7B3B87] hover:via-[#4A5FA5] hover:to-[#6B4B9E] hover:text-white hover:border-purple-500 hoverEffect"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabbar;
