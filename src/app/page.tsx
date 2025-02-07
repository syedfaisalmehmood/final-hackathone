import Hero_1 from "./components/hero1";
import Product_Main from "./components/productmain";
import Brand_Different from "./components/branddifferent";
import Popular_products from "./components/popularproducts";
import GetinTouch_1 from "./components/getintouch1";
import Join_club_1 from "./components/joinclub1";
import Footer_1 from "./components/footer1";
import NavBar_1 from "./components/navbar_1";
import Dandy_Chair from "./allproducts/[slug]/page";

export default function Home() {
  return (
    <div className="">
      <Hero_1 />
      <Brand_Different />
      <Product_Main />
      <Popular_products />
      <Join_club_1 />
      <GetinTouch_1 />
      <Footer_1 />
    </div>
  );
}
