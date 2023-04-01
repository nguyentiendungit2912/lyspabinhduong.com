import React from "react";
import BGImg1 from "../../assets/img/bg/about-bg.png";
import { Link } from "react-router-dom";
import Img from "../../assets/img/features/about_img.png";

const About = () => {
  const handleBookAppointmentClick = () => {
    const formElement = document.getElementById("booking");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section
        className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundImage: `url(${BGImg1})`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative  wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img src={Img} alt="img" />
                <div className="about-text second-about">
                  <span>10</span>
                  <p>Năm Kinh Nghiệm</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h5>GIỚI THIỆU</h5>
                  <h2>Cách tốt nhất để chăm sóc làn da của bạn</h2>
                </div>
                <p>
                Có nhiều cách để chăm sóc làn da của bạn, tuy nhiên, để đạt được hiệu quả tốt nhất, đó là kết hợp giữa các phương pháp chăm sóc chuyên nghiệp và chế độ chăm sóc hàng ngày. Ly Spa là địa chỉ tin cậy để bạn có thể tìm thấy các liệu trình chăm sóc da chuyên sâu và các sản phẩm chăm sóc da cao cấp, giúp tái tạo, phục hồi và nuôi dưỡng làn da của bạn.
                </p>
                <p>
                Tại Ly Spa, chúng tôi sử dụng các công nghệ tiên tiến như lazer, điện di, ánh sáng LED và các loại mặt nạ đặc biệt để cung cấp các liệu trình chăm sóc da cao cấp nhất. Khách hàng của chúng tôi thường cảm nhận được sự khác biệt rõ rệt trên làn da của mình sau mỗi lần trải nghiệm dịch vụ.
                </p>
                <div className="slider-btn mt-20">
                  <Link onClick={handleBookAppointmentClick} className="btn ss-btn smoth-scroll">
                    Đặt lịch hẹn ngay
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

export default About;
