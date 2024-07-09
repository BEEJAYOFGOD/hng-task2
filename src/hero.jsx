import "./hero.css";
import img1 from "./assets/imgrect.svg";
import img2 from "./assets/imgrect2.svg";

const hero = () => {
  let customerDetails = [
    { number: 15, details: "Countries", id: 1 },
    { number: "1.7k", details: "Reviews", id: 1 },
    { number: "5k+", details: "Customers", id: 1 },
  ];

  return (
    <section className="hero">
      <div className="rightHero">
        <h2>Discover Timeless Elegance and Craftsmanship in Every Piece</h2>
        <p>
          Embrace your unique style with our exquisite jewelry, designed to
          illuminate your beauty and capture the essence of sophistication.
        </p>
        <button>Discover Menu</button>
        <div className="reach-details">
          {customerDetails.map((blog) => (
            <div className="reach" key={blog.id}>
              <p>{blog.number}</p>
              <p>{blog.details}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="leftHero">
        <div className="heroimg">
          <img src={img1} alt="sarch" />
        </div>
        <div className="heroimg">
          <img src={img2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default hero;
