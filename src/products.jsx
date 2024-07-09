import "./products.css";
import rect1 from "./assets/product/rectangle1.svg";
import solarbag from "./assets/product/solar_bag-bold.svg";
import love2 from "./assets/product/love3.svg";

const products = () => {
  return (
    <section className="product-sect">
      <h2>Our Products</h2>
      <div className="product-btns">
        <button>All</button>
        <button>Necklace</button>
        <button>Earrings</button>
        <button>Wristwatches</button>
        <button>Leg Chains</button>
        <button>Bangles</button>
        <button>Nose rings</button>
      </div>

      <div className="grid-contain">
        <div className="flex-item">
          <div className="product">
            <div>
              <img src={rect1} alt="" />
            </div>
            <div className="react">
              <img src={love2} alt="" />
            </div>
            <div className="product-p">
              <div>
                <p>Neckpiece</p>
                <p>$45</p>
              </div>
              <div className="solar">
                <img src={solarbag} alt="" />
              </div>
            </div>
          </div>


          <div className="product">
            <div>
              <img src={rect1} alt="" />
            </div>
            <div className="react">
              <img src={love2} alt="" />
            </div>
           <div className="product-p">
              <div>
                <p>Neckpiece</p>
                <p>$45</p>
              </div>
              <div className="solar">
                <img src={solarbag} alt="" />
              </div>
            </div>
          </div>
          <div className="product">
            <div>
              <img src={rect1} alt="" />
            </div>
            <div className="react">
              <img src={love2} alt="" />
            </div>
            <div className="product-p">
              <div>
                <p>Neckpiece</p>
                <p>$45</p>
              </div>
              <div className="solar">
                <img src={solarbag} alt="" />
              </div>
            </div>
          </div>

          <div className="product">
            <div>
              <img src={rect1} alt="" />
            </div>
            <div className="react">
              <img src={love2} alt="" />
            </div>
            <div className="product-p">
              <div>
                <p>Neckpiece</p>
                <p>$45</p>
              </div>
              <div className="solar">
                <img src={solarbag} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="product">
            <div>
              <img src={rect1} alt="" />
            </div>
            <div className="react">
              <img src={love2} alt="" />
            </div>
            <div className="product-p">
              <div>
                <p>Neckpiece</p>
                <p>$45</p>
              </div>
              <div className="solar">
                <img src={solarbag} alt="" />
              </div>
            </div>
          </div>

          <div className="product">
            <div>
              <img src={rect1} alt="" />
            </div>
            <div className="react">
              <img src={love2} alt="" />
            </div>
            <div className="product-p">
              <div>
                <p>Neckpiece</p>
                <p>$45</p>
              </div>
              <div className="solar">
                <img src={solarbag} alt="" />
              </div>
            </div>
          </div>

          <div className="product">
            <div>
              <img src={rect1} alt="" />
            </div>
            <div className="react">
              <img src={love2} alt="" />
            </div>

            <div className="product-p">
              <div>
                <p>Neckpiece</p>
                <p>$45</p>
              </div>
              <div className="solar">
                <img src={solarbag} alt="" />
              </div>
            </div>
          </div>

          <div className="product">
            <div>
              <img src={rect1} alt="" />
            </div>
            <div className="react">
              <img src={love2} alt="" />
            </div>

            <div className="product-p">
              <div>
                <p>Neckpiece</p>
                <p>$45</p>
              </div>
              <div className="solar">
                <img src={solarbag} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default products;
