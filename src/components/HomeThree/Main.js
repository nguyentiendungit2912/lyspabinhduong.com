import { Link } from "react-router-dom";
import React, { useState } from "react";
import Img1 from "../../assets/img/logo/logo.png";
import BGImg from "../../assets/img/slider/slider_bg.png";
import About from "../HomeMain/About";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Service from "../HomeMain/Service";
import Gallery from "../HomeMain/Gallery";
import Pricing from "../HomeMain/Pricing";
import Feature from "../HomeMain/Feature";
import Product from "../HomeMain/Product";
// import Video from "../../assets/img/slider/slider-vedio.mp4";

const Main = () => {
  const [mobile, setmobile] = useState(false);
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);

  return (
    <>
      <main>
        <header className="header-area">
          <div className="header-top second-header d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-8 d-none d-lg-block">
                  <div className="header-cta">
                    <ul>
                      <li>
                        <i className="icon fa fa-envelope"></i>
                        <span>info@example.com</span>
                      </li>
                      <li>
                        <i className="icon fa fa-phone"></i>
                        <span>+91-7052-101-786</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 d-none d-lg-block text-right">
                  <div className="header-social">
                    <span>
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
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="header-sticky" className="menu-area">
            <div className="container">
              <div className="second-menu">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <Link to="/">
                        <img src={Img1} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7">
                    <div className="main-menu text-right text-xl-right">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-sub">
                            <Link to="/">Home</Link>
                            <ul>
                              <li>
                                <Link to="/">Home Page 01</Link>
                              </li>
                              <li>
                                <Link to="/home-two">Home Page 02</Link>
                              </li>
                              <li>
                                <Link to="/home-three">Home Page 03</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/about">About Us</Link>
                          </li>
                          <li className="has-sub">
                            <Link to="/service">Services</Link>
                            <ul>
                              <li>
                                <Link to="/service-details"> Facials</Link>
                              </li>
                              <li>
                                <Link to="/service-details">
                                  Body Treatments
                                </Link>
                              </li>
                              <li>
                                <Link to="/service-details">
                                  {" "}
                                  Mineral Baths
                                </Link>
                              </li>
                              <li>
                                <Link to="/service-details">Waxing</Link>
                              </li>
                              <li>
                                <Link to="/service-details">Massage</Link>
                              </li>
                              <li>
                                <Link to="/service-details">
                                  Geothermal Spa
                                </Link>
                              </li>
                              <li>
                                <Link to="/service">Services</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-sub">
                            <Link to="#">Pages</Link>
                            <ul>
                              <li>
                                <Link to="/gallery">Gallery</Link>
                              </li>

                              <li>
                                <Link to="/pricing">Pricing</Link>
                              </li>
                              <li>
                                <Link to="/faq">Faq</Link>
                              </li>
                              <li>
                                <Link to="/team">Team</Link>
                              </li>
                              <li>
                                <Link to="/team-details">Team Details</Link>
                              </li>
                              <li>
                                <Link to="/shop">Shop</Link>
                              </li>
                              <li>
                                <Link to="/shop-details">Shop Details</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-sub">
                            <Link to="/blog">Blog</Link>
                            <ul>
                              <li>
                                <Link to="/blog">Blog</Link>
                              </li>
                              <li>
                                <Link to="/blog-details">Blog Details</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                    <div className="login">
                      <ul>
                        <li>
                          <div className="second-header-btn">
                            <Link to="/contact" className="btn">
                              Book Appointment
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile-menu mean-container">
                      <div className="mean-bar">
                        <Link
                          to="#nav"
                          className={`meanmenu-reveal ${mobile && "meanclose"}`}
                          onClick={() =>
                            setmobile(mobile === true ? false : true)
                          }
                          style={{
                            right: "0",
                            left: "auto",
                            textAlign: "center",
                            textIndent: "0px",
                            fontSize: "18px",
                          }}
                        >
                          {mobile ? (
                            "X"
                          ) : (
                            <>
                              <span>
                                <span>
                                  <span></span>
                                </span>
                              </span>
                            </>
                          )}
                        </Link>
                        <nav className="mean-nav">
                          {mobile && (
                            <ul style={{ display: mobile ? "block" : "none" }}>
                              <li className="has-sub">
                                <Link to="/">Home</Link>
                                <ul
                                  style={{ display: show ? "block" : "none" }}
                                >
                                  <li>
                                    <Link to="/">Home Page 01</Link>
                                  </li>
                                  <li>
                                    <Link to="/home-two">Home Page 02</Link>
                                  </li>
                                  <li>
                                    <Link to="/home-three">Home Page 03</Link>
                                  </li>
                                </ul>
                                <Link
                                  to="#"
                                  className={`mean-expand ${
                                    show && "mean-clicked"
                                  }`}
                                  onClick={() =>
                                    setshow(show === true ? false : true)
                                  }
                                  style={{ fontSize: "18px" }}
                                >
                                  +
                                </Link>
                              </li>
                              <li>
                                <Link to="/about/">About Us</Link>
                              </li>

                              <li className="has-sub">
                                <Link to="/service">Services</Link>
                                <ul
                                  style={{ display: show1 ? "block" : "none" }}
                                >
                                  <li>
                                    <Link to="/service-details"> Facials</Link>
                                  </li>
                                  <li>
                                    <Link to="/service-details">
                                      Body Treatments
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/service-details">
                                      {" "}
                                      Mineral Baths
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/service-details">Waxing</Link>
                                  </li>
                                  <li>
                                    <Link to="/service-details">Massage</Link>
                                  </li>
                                  <li>
                                    <Link to="/service-details">
                                      Geothermal Spa
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/service">Services</Link>
                                  </li>
                                </ul>
                                <Link
                                  to="#"
                                  className={`mean-expand ${
                                    show1 && "mean-clicked"
                                  }`}
                                  onClick={() =>
                                    setshow1(show1 === true ? false : true)
                                  }
                                  style={{ fontSize: "18px" }}
                                >
                                  +
                                </Link>
                              </li>
                              <li className="has-sub">
                                <Link to="#">Pages</Link>
                                <ul
                                  style={{ display: show2 ? "block" : "none" }}
                                >
                                  <li>
                                    <Link to="/gallery">Gallery</Link>
                                  </li>

                                  <li>
                                    <Link to="/pricing">Pricing</Link>
                                  </li>
                                  <li>
                                    <Link to="/faq">Faq</Link>
                                  </li>
                                  <li>
                                    <Link to="/team">Team</Link>
                                  </li>
                                  <li>
                                    <Link to="/team-details">Team Details</Link>
                                  </li>
                                  <li>
                                    <Link to="/shop">Shop</Link>
                                  </li>
                                  <li>
                                    <Link to="/shop-details">Shop Details</Link>
                                  </li>
                                </ul>
                                <Link
                                  to="#"
                                  className={`mean-expand ${
                                    show2 && "mean-clicked"
                                  }`}
                                  onClick={() =>
                                    setshow2(show2 === true ? false : true)
                                  }
                                  style={{ fontSize: "18px" }}
                                >
                                  +
                                </Link>
                              </li>
                              <li className="has-sub">
                                <Link to="/blog">Blog</Link>
                                <ul
                                  style={{ display: show3 ? "block" : "none" }}
                                >
                                  <li>
                                    <Link to="/blog">Blog</Link>
                                  </li>
                                  <li>
                                    <Link to="/blog-details">Blog Details</Link>
                                  </li>
                                </ul>
                                <Link
                                  to="#"
                                  className={`mean-expand ${
                                    show3 && "mean-clicked"
                                  }`}
                                  onClick={() =>
                                    setshow3(show3 === true ? false : true)
                                  }
                                  style={{ fontSize: "18px" }}
                                >
                                  +
                                </Link>
                              </li>
                              <li className="mean-last">
                                <Link to="/contact">Contact</Link>
                              </li>
                            </ul>
                          )}
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="home" className="slider-area fix p-relative">
          <div className="slider-active" style={{ background: "#00173c" }}>
            <div
              className="single-slider slider-bg d-flex slider-four slider-bg-three align-items-center"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${BGImg})`,
              }}
            >
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="slider-content s-slider-content slider-text-2 mt-20">
                      <h5 data-animation="fadeInUp" data-delay=".4s">
                        Spa & Welness Salon{" "}
                      </h5>
                      <h2 data-animation="fadeInUp" data-delay=".4s">
                        Make Your Skin
                        <br />
                        Shine & Glowing
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Donec vitae libero non enim placerat eleifend aliquam
                        erat volutpat. Curabitur diam ex, dapibus purus sapien,
                        cursus sed nisl tristique.
                      </p>
                      <div className="slider-btn mt-30">
                        <Link to="/contact" className="btn ss-btn mr-15">
                          Discover More
                        </Link>
                        <Link to="/contact" className="btn ss-btn active">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 p-relative"></div>
                </div>
              </div>
              <video id="my-video" className="video2" muted loop autoPlay>
                {/* <source src={Video} type="video/mp4" /> */}
                <source
                  src="assets/img/slider/slider-vedio.ogv"
                  type="video/ogg"
                />
                <source
                  src="assets/img/slider/slider-vedio.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </section>
        <Feature />
        <About />
        <Service />
        <Appointment />
        <Product />
        <Pricing />
        <Gallery />
        <Testimonial />
        <Blog />
      </main>
    </>
  );
};

export default Main;
