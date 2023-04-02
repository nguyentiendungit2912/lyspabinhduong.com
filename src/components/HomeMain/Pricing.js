import BGImg5 from "../../assets/img/bg/price-bg.png";
import { Link } from "react-router-dom";
import React from "react";

const Pricing = () => {
  const handleBookAppointmentClick = () => {
    const formElement = document.getElementById("booking");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section
        id="pricing"
        className="pricing-area pb-60 fix p-relative"
        style={{
          backgroundImage: `url(${BGImg5})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Các gói cho học viên</h5>
                <h2>Chương trình đào tạo</h2>
              </div>
            </div>
          </div>
          <div className="row pcolor">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-box pricing-box2 text-center mb-60">
                <div className="pricing-head">
                  <h3>Chăm sóc da căn bản </h3>
                  <div className="price-count">
                    <h5 className="old-price">
                      20.000.000 VND
                    </h5>
                    <h2>
                      14.999.999 VND 
                    </h2>
                  </div>
                  <hr />
                </div>
                <div className="pricing-body mt-20 mb-30 text-left text-pink">
                  <ul>
                    <li>
                      Chăm sóc da căn bản.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Phương pháp chăm sóc da hiệu quả.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Phát triển dịch vụ chăm sóc da.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Thời gian linh hoạt, phù hợp.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Kỹ năng chăm sóc da cơ bản.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link onClick={handleBookAppointmentClick} className="btn ss-btn">
                  Đăng ký khóa học
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-box pricing-box2 active text-center mb-60">
                <div className="pricing-head">
                  <h3>Chăm sóc da chuyên sâu</h3>
                  <div className="price-count">
                    <h5 className="old-price">
                      35.000.000 VND
                    </h5>
                    <h2>
                      24.999.999 VND 
                    </h2>
                  </div>
                  <hr />
                </div>

                <div className="pricing-body mt-20 mb-30 text-left text-blue">
                  <ul>
                    <li>
                      Chăm sóc da chuyên nghiệp.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Phương pháp chăm sóc da hiệu quả.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Phát triển dịch vụ chăm sóc da.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Thời gian linh hoạt, phù hợp.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Kỹ năng chăm sóc da chuyên nghiệp.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                  </ul>
                </div>

                <div className="pricing-btn">
                  <Link onClick={handleBookAppointmentClick} className="btn ss-btn">
                  Đăng ký khóa học
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-box pricing-box2 text-center mb-60">
                <div className="pricing-head">
                  <h3>Khóa học phun xăm</h3>
                  <div className="price-count">
                    <h5 className="old-price">
                      40.000.000 VND
                    </h5>
                    <h2>
                        34.999.999 VND 
                    </h2>
                  </div>
                  <hr />
                </div>
                <div className="pricing-body mt-20 mb-30 text-left text-orange">
                  <ul>
                    <li>
                      Chăm sóc da chuyên nghiệp.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Phương pháp chăm sóc da hiệu quả.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Phát triển dịch vụ chăm sóc da.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Thời gian linh hoạt, phù hợp.{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Đăng ký ngay để <span style={{color: "red"}}>GIẢM 5 TRIỆU.</span>{" "}
                      <i className="fa fa-check"></i>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link onClick={handleBookAppointmentClick} className="btn ss-btn">
                    Đăng ký khóa học
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
