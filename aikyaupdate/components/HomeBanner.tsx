import React from "react";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="md:py-0 bg-shop_light_pink rounded-lg flex items-center justify-between">
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex"
        />
    </div>
  );
};

export default HomeBanner;
