import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Bên cạnh đó, Ly spa còn là địa chỉ uy tín cho các dịch vụ phun xăm thẩm mỹ, đảm bảo an toàn và hiệu quả. Đội ngũ chuyên gia phun xăm tại Ly spa sẽ giúp bạn tạo nên những đường nét tinh xảo, phù hợp với từng nhu cầu và phong cách cá nhân của mỗi khách hàng.
        </p>
        <p className="primary-text">
          Với mục tiêu mang đến sự hài lòng cho khách hàng, Ly spa cam kết sử dụng các sản phẩm và thiết bị chất lượng cao, đảm bảo an toàn và hiệu quả cho quá trình điều trị và phun xăm.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
