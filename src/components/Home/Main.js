import { Link } from "react-router-dom";
import React from "react";
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

const Main = () => {
  return (
    <>
      <main>
        <section id="home" className="slider-area fix p-relative">
          <div className="slider-active" style={{ background: "#00173c" }}>
            <div
              className="single-slider slider-bg d-flex align-items-center"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${BGImg})`,
              }}
            >
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="slider-content s-slider-content mt-20">
                      <h5 data-animation="fadeInUp" data-delay=".4s">
                        LY SPA & CHĂM SÓC SẮC ĐẸP{" "}
                      </h5>
                      <h2 data-animation="fadeInUp" data-delay=".4s">
                        LÀN DA CỦA BẠN
                        <br />
                        TỎA SÁNG RỰC RỠ
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                      Ly Spa - nơi thăng hoa sắc đẹp! Chúng tôi cam kết mang đến cho khách hàng những trải nghiệm chăm sóc da tuyệt vời nhất với dịch vụ spa chuyên nghiệp, sản phẩm chăm sóc da cao cấp.
                      </p>

                      <div className="slider-btn mt-30">
                        {/* <Link to="/contact" className="btn ss-btn mr-15">
                          Discover More
                        </Link> */}
                        <Link to="/contact" className="btn ss-btn active">
                          Đặt lịch hẹn ngay
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 p-relative"></div>
                </div>
              </div>
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
        {/* <Testimonial /> */}
        {/* <Blog /> */}
      </main>
    </>
  );
};

export default Main;
