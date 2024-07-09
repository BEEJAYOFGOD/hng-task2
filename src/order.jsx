/* eslint-disable react/no-unescaped-entities */

import "./order.css";
import smilingirl from "./assets/product/shopgirl.svg";
const order = () => {
  return (
    <section className="order">
      <div>
        <h2>HOW TO ORDER</h2>
        <ul className="list-item">
          <li>Explore our exquisite range of jewelry pieces</li>
          <li>Click on the desired item to view details</li>
          <li>Click 'Add to Cart' to place the item in your shopping cart</li>
          <li>Click 'Checkout' to start the payment process</li>
          <li>Provide your shipping address and contact details</li>
          <li>Choose your payment method and enter the required details</li>
          <li>
            Double-check all order details, including shipping and payment
            information.
          </li>
          <li> Click 'Place Order' to complete your purchase.</li>
          <li>
            You will receive an order confirmation email with tracking
            information.
          </li>
        </ul>
        <button className="order-action">ORDER NOW</button>
      </div>
      <div>
        <img src={smilingirl} alt="" />
      </div>
    </section>
  );
};

export default order;
