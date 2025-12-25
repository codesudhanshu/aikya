import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30 border-t border-purple-200">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated furniture collections at Aikya, blending
              style and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-purple-500 hover:bg-gradient-to-r hover:from-[#7B3B87] hover:via-[#4A5FA5] hover:to-[#6B4B9E] hover:bg-clip-text hover:text-transparent"
              tooltipClassName="bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] text-white"
            />
          </div>
          <div>
            <SubTitle className="bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent">Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:bg-gradient-to-r hover:from-[#7B3B87] hover:via-[#4A5FA5] hover:to-[#6B4B9E] hover:bg-clip-text hover:text-transparent hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle className="bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent">Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:bg-gradient-to-r hover:from-[#7B3B87] hover:via-[#4A5FA5] hover:to-[#6B4B9E] hover:bg-clip-text hover:text-transparent hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle className="bg-gradient-to-r from-[#7B3B87] via-[#4A5FA5] to-[#6B4B9E] bg-clip-text text-transparent">Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t border-purple-200 text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} Aikya Traders All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;