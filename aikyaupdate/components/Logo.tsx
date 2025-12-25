import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo } from "@/images";

const Logo = ({
  className,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex">
      <h2
        className={cn(
          "",
          className
        )}
      >
         <Image
          src={logo}
          alt="banner_1"
          className="w-32"
        />
      </h2>
    </Link>
  );
};

export default Logo;
