import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/shop/details/thumb1.jpg";
import Img2 from "../../../assets/img/shop/details/thumb2.jpg";
import Img3 from "../../../assets/img/shop/details/thumb3.jpg";
import Img4 from "../../../assets/img/shop/details/large1.jpg";
import Img5 from "../../../assets/img/shop/details/large2.jpg";
import Img6 from "../../../assets/img/shop/details/large3.jpg";

const Main = () => {
  const [img, setImg] = useState(true);
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [description, setDescription] = useState(true);
  const [addtional, setAddtional] = useState(false);
  const [reviwe, setReviwe] = useState(false);
  return (
    <>
      <Bredcrumb title="Shop Details" subtitle="Shop Details" />

      <section
        className="shop-banner-area pt-120 pb-90 "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="shop-thumb-tab mb-30">
                <ul className="nav" id="myTab2" role="tablist">
                  <li className="nav-item">
                    <Link
                      to="#home"
                      className={`nav-link ${img ? "actvie" : ""}`}
                      onClick={() => {
                        setImg(true);
                        setImg1(false);
                        setImg2(false);
                      }}
                      id="home-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-selected="true"
                    >
                      <img src={Img1} alt="" />{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#profile"
                      className={`nav-link ${img1 ? "actvie" : ""}`}
                      onClick={() => {
                        setImg1(true);
                        setImg2(false);
                        setImg(false);
                      }}
                      id="profile-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src={Img2} alt="" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#profile1"
                      className={`nav-link ${img2 ? "actvie" : ""}`}
                      onClick={() => {
                        setImg2(true);
                        setImg(false);
                        setImg1(false);
                      }}
                      id="profile-tab2"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src={Img3} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="product-details-img mb-30">
                <div className="tab-content" id="myTabContent2">
                  {img && (
                    <div
                      className="tab-pane fade  active show"
                      id="home"
                      role="tabpanel"
                    >
                      <div className="product-large-img">
                        <img src={Img4} alt="" />
                      </div>
                    </div>
                  )}
                  {img1 && (
                    <div
                      className="tab-pane fade active show"
                      id="profile"
                      role="tabpanel"
                    >
                      <div className="product-large-img">
                        <img src={Img5} alt="" />
                      </div>
                    </div>
                  )}
                  {img2 && (
                    <div
                      className="tab-pane fade active show"
                      id="profile1"
                      role="tabpanel"
                    >
                      <div className="product-large-img">
                        <img src={Img6} alt="" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="product-details mb-30">
                <div className="product-details-title">
                  <p>Workstead</p>
                  <h1>Helios Piranho Lamp</h1>
                  <div className="price details-price pb-30 mb-20">
                    <span>$700.00</span>
                    <span className="old-price">$820.00</span>
                  </div>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="product-cat mt-30 mb-30">
                  <span>Category: </span>
                  <Link to="#">furniture,</Link>
                  <Link to="#">decor</Link>
                </div>
                <div className="product-details-action">
                  <form action="#">
                    <div className="plus-minus">
                      <div className="cart-plus-minus">
                        <input type="text" value="1" />
                      </div>
                    </div>
                    <button className="btn btn-black" type="submit">
                      add to cart
                    </button>
                  </form>
                </div>
                <div className="product-social mt-45">
                  <a href="https://www.facebook.com/" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.youtube.com/" title="Youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-desc-area pb-55">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bakix-details-tab">
                <ul
                  className="nav text-center justify-content-center pb-30 mb-50"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <Link
                      to="#id-desc"
                      className={`nav-link ${description ? "active" : ""}`}
                      onClick={() => {
                        setDescription(true);
                        setAddtional(false);
                        setReviwe(false);
                      }}
                      id="desc-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-activedescendant="home"
                      aria-selected="true"
                    >
                      Description{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#id-add"
                      className={`nav-link ${addtional ? "active" : ""}`}
                      onClick={() => {
                        setAddtional(true);
                        setDescription(false);
                        setReviwe(false);
                      }}
                      id="id-add-in"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-activedescendant="profile"
                      aria-selected="false"
                    >
                      Additional Information
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#id-rev"
                      className={`nav-link ${reviwe ? "active" : ""}`}
                      onClick={() => {
                        setReviwe(true);
                        setAddtional(false);
                        setDescription(false);
                      }}
                      id="id-r"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-activedescendant="profile"
                      aria-selected="false"
                    >
                      Reviews(10)
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="myTabContent">
                {description && (
                  <div
                    className="tab-pane fade show active"
                    id="id-desc"
                    role="tabpanel"
                    aria-labelledby="desc-tab"
                  >
                    <div className="event-text mb-40">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut
                        labore et dolore magnam aliquam quaerat voluptatem.
                      </p>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora.
                      </p>
                    </div>
                  </div>
                )}
                {addtional && (
                  <div
                    className="tab-pane fade show active"
                    id="id-add"
                    role="tabpanel"
                    aria-labelledby="id-add-in"
                  >
                    <div className="additional-info">
                      <div className="table-responsive">
                        <h4>Additional information</h4>
                        <table className="table">
                          <tbody>
                            <tr>
                              <th>Weight</th>
                              <td className="product_weight">1.4 oz</td>
                            </tr>
                            <tr>
                              <th>Dimensions</th>
                              <td className="product_dimensions">
                                62 × 56 × 12 in
                              </td>
                            </tr>
                            <tr>
                              <th>Size</th>
                              <td className="product_dimensions">
                                XL, XXL, LG, SM, MD
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                {reviwe && (
                  <div
                    className="tab-pane fade show active"
                    id="id-rev"
                    role="tabpanel"
                    aria-labelledby="id-r"
                  >
                    <div className="additional-info">
                      <div className="event-text mb-40">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. Sed ut
                          perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
