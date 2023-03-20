import React from "react";
import { Link } from "react-router-dom";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/shop/img4.jpg";
import Img2 from "../../../assets/img/shop/img5.jpg";
import Img3 from "../../../assets/img/shop/img6.jpg";
import Img4 from "../../../assets/img/shop/img7.jpg";
import Img5 from "../../../assets/img/shop/img8.jpg";
import Img6 from "../../../assets/img/shop/img9.jpg";
import Img7 from "../../../assets/img/shop/img1.jpg";
import Img8 from "../../../assets/img/shop/img2.jpg";
import Img9 from "../../../assets/img/shop/img3.jpg";

const Main = () => {
  return (
    <>
      <Bredcrumb title="Shop" subtitle="Shop" />

      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <h6 className="mt-20 mb-30">Showing 1–9 of 10 results</h6>
            </div>
            <div className="col-lg-6 col-sm-6 text-right">
              <select
                name="orderby"
                className="orderby"
                aria-label="Shop order"
              >
                <option value="menu_order" defaultValue="selected">
                  Default sorting
                </option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-details">
                    <img src={Img1} alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-details">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <span className="pro-cat">
                    <Link to="#">Chair</Link>
                  </span>
                  <h4 className="pro-title">
                    <Link to="/shop-details">Bakari Product</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-details">
                    <img src={Img2} alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-details">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <span className="pro-cat">
                    <Link to="#">Cloths</Link>
                  </span>
                  <h4 className="pro-title">
                    <Link to="/shop-details">Romada Product</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-details">
                    <img src={Img3} alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-details">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <span className="pro-cat">
                    <Link to="#">Light</Link>
                  </span>
                  <h4 className="pro-title">
                    <Link to="/shop-details">Sikkar Product</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-details">
                    <img src={Img4} alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-details">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <span className="pro-cat">
                    <Link to="#">Headphone</Link>
                  </span>
                  <h4 className="pro-title">
                    <Link to="/shop-details">Minners Product</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-details">
                    <img src={Img5} alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-details">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <span className="pro-cat">
                    <Link to="#">table</Link>
                  </span>
                  <h4 className="pro-title">
                    <Link to="/shop-details">Dolando Product</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-details">
                    <img src={Img6} alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-details">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <span className="pro-cat">
                    <Link to="#">Cloths</Link>
                  </span>
                  <h4 className="pro-title">
                    <Link to="/shop-details">Romada Product</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-details">
                    <img src={Img7} alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-details">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <span className="pro-cat">
                    <Link to="#">Cloths</Link>
                  </span>
                  <h4 className="pro-title">
                    <Link to="/shop-details">Medidove Product</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-details">
                    <img src={Img8} alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-details">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <span className="pro-cat">
                    <Link to="#">Cloths</Link>
                  </span>
                  <h4 className="pro-title">
                    <Link to="/shop-details">Legend Product</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="product mb-40">
                <div className="product__img">
                  <Link to="/shop-details">
                    <img src={Img9} alt="" />
                  </Link>
                  <div className="product-action text-center">
                    <Link to="/shop-details">Add Cart</Link>
                  </div>
                </div>
                <div className="product__content pt-30">
                  <span className="pro-cat">
                    <Link to="#">Table</Link>
                  </span>
                  <h4 className="pro-title">
                    <Link to="/shop-details">Akari Product</Link>
                  </h4>
                  <div className="price">
                    <span>$95.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="pagination-wrap mt-50 text-center">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <Link to="#">
                        <i className="fas fa-angle-double-left"></i>
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link to="#">1</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">2</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">3</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">...</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">10</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">
                        <i className="fas fa-angle-double-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
