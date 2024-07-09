import Navbar from "./Navbar";
import Hero from "./hero";
import Qualities from "./qualities";
import Products from "./products";
import Order from "./order";
import Review from "./review";
import Footer from "./footer";

const homepage = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Qualities />
      <Products />
      <Order />
      <Review />
      <Footer></Footer>
    </div>
  );
};

export default homepage;
