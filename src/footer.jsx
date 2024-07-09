import cplogo from "./assets/product/companylogo.svg";
import "./footer.css";

const footer = () => {
  return (
    <section className="footer">
      <div>
        <img src={cplogo} alt="" />
      </div>
      <div>
        <h3>INFORMATION</h3>
        <ul >
          <li>About Us</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Delivery</li>
        </ul>
      </div>
      <div>
        <h3>INFORMATION</h3>
        <p className="footer-info">
          Elegance Jewelry Boutique 123 Sparkle Avenue, Suite 456 Glamour City,
          Jewel State 78901 United States
        </p>
      </div>
      <div>
        <h3>MORE</h3>
        <ul>
          <li>Blog</li>
          <li>Media</li>
          <li>Help centre</li>
        </ul>
      </div>
      <div>
        <h3>SOCIAL MEDIA</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Tik tok</li>
        </ul>
      </div>
    </section>
  );
};

export default footer;
