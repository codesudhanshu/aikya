import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import MobileMenu from "./MobileMenu";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getMyOrders } from "@/sanity/queries";

const Header = async () => {
  // const user = await currentUser();
  // const { userId } = await auth();
  // let orders = null;
  // if (userId) {
  //   orders = await getMyOrders(userId);
  // }

  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
      </Container>
    </header>
  );
};

export default Header;
