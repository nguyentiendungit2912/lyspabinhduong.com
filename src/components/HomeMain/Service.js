import { Link } from "react-router-dom";
import BGImg2 from "../../assets/img/bg/services-bg.png";
import React from "react";
import Icon1 from "../../assets/img/icon/fe-icon01.png";
import Icon2 from "../../assets/img/icon/fe-icon05.png";
import Icon3 from "../../assets/img/icon/fe-icon07.png";
import Icon4 from "../../assets/img/icon/fe-icon04.png";
import Icon5 from "../../assets/img/icon/fe-icon06.png";
import Icon6 from "../../assets/img/icon/fe-icon08.png";
import Img from "../../assets/img/features/services-img-details2.png";

const Service = () => {
  return (
    <section
      id="service-details2"
      className="service-details-two pb-105 p-relative"
      style={{
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${BGImg2})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50 text-center">
              <h5>Dịch vụ của chúng tôi</h5>
              <h2>Chúng tôi cung cấp</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="about-content s-about-content">
              <ul className="sr-tw-ul ">
                <li>
                  <div className="icon-right">
                    <img src={Icon1} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="/service-details">Chăm sóc da mặt</Link>
                    </h4>
                    <p>
                      Chúng tôi cung cấp dịch vụ chăm sóc da mặt chuyên nghiệp và hiệu quả để giúp bạn có một làn da khỏe mạnh và rạng rỡ.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon2} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="/service-details">Tắm khoáng</Link>
                    </h4>
                    <p>
                      Dịch vụ tắm khoáng của chúng tôi sẽ giúp bạn thư giãn cơ thể, tăng cường sức khỏe và giải độc cho cơ thể một cách tự nhiên và hiệu quả.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon3} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="/service-details">Massage</Link>
                    </h4>
                    <p>
                      Chúng tôi cung cấp dịch vụ massage chuyên nghiệp và thư giãn để giúp bạn giảm stress, cải thiện sức khỏe và tăng cường cảm giác thoải mái.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
            <div className="sd-img">
              <img src={Img} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="about-content s-about-content">
              <ul className="sr-tw-ul sr-thr-ul">
                <li>
                  <div className="icon">
                    <img src={Icon4} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details">Điều trị cơ thể</Link>
                    </h4>
                    <p>
                      Dịch vụ điều trị cơ thể của chúng tôi sẽ giúp bạn giảm đau, tăng cường sức khỏe và linh hoạt hơn trong hoạt động hàng ngày của bạn.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Icon5} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details">Tẩy lông</Link>
                    </h4>
                    <p>
                    Chúng tôi cung cấp dịch vụ tẩy lông hiệu quả và an toàn để giúp bạn có làn da mịn màng và thoải mái hơn.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Icon6} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details">Phun môi collagen</Link>
                    </h4>
                    <p>
                    Dịch vụ phun môi collagen của chúng tôi sẽ giúp bạn có đôi môi đầy đặn, căng mịn và hấp dẫn hơn một cách tự nhiên và an toàn.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
