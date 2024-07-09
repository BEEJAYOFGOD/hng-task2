/* eslint-disable react/no-unescaped-entities */
import customer from "./assets/product/customer.svg";
import arrow from "./assets/product/bulletarrow.svg";
import "./review.css";
const review = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "1em auto 0em" }}>
        {" "}
        Customer Review
      </h2>
      <section className="review">
        <div>
          <img className="customer" src={customer} alt="" />
        </div>
        <p className="review-rght">
          I am absolutely thrilled with my purchase! The craftsmanship is
          exceptional, and the piece looks even more stunning in person. The
          entire ordering process was seamless, and my jewelry arrived quickly
          and beautifully packaged. I couldn't be happier and will definitely be
          a returning customer!
          <p className="customer-name">Stephen G.</p>
        </p>
        <div className="arrow">
          <img src={arrow} alt="" />
        </div>
      </section>
    </>
  );
};

export default review;
<section>
  <h2></h2>
</section>;
