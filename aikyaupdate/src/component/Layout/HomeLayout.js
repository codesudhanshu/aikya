// import HeaderHome from "@/component/Headers/HomeHeader";
import FooterHome from "../Footers/FooterHome";

export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* <HeaderHome /> */}
        {children}
        <FooterHome />
    </div>
  );
}