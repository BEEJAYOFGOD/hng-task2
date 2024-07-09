import img1 from "./assets/affordable.svg";
import img2 from "./assets/solid_shipping-fast.svg";
import img3 from "./assets/tick-deca.svg";
import img4 from "./assets/subway_tick.svg";
import "./qualities.css";

const qualities = () => {
  let imgs = [
    {
      src: img1,
      title: "Original",
      info: "Meticulous craftsmanship, true authenticity",
    }, // Corrected title
    {
      src: img2,
      title: "Shipping",
      info: "Enjoy fast, reliable worldwide shipping",
    }, // Added another image with a unique title
    {
      src: img3,
      title: "Fast Payment",
      info: "Experience secure and swift payments.",
    },
    {
      src: img4,
      title: "Affordable",
      info: "Luxury jewelry at affordable prices.",
    },
  ];

  return (
    <>
      <section className="qualities">
        {imgs.map((img) => (
          <div key={img.src} className="pop">
            <div className="imgDiv">
              <img src={img.src} alt="aa" />
            </div>
            <h2>{img.title}</h2>
            <p>{img.info}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default qualities;
