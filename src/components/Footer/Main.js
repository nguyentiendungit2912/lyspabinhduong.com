import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/bg/footer-bg.png";
import Img1 from "../../assets/img/logo/f_logo.png";
import Img2 from "../../assets/img/icon/ft-icon01.png";
import Footer from "../../assets/img/icon/ft-icon02.png";
import Footer1 from "../../assets/img/icon/ft-icon03.png";

const Main = () => {
  return (
    <>
      <footer
        className="footer-bg footer-p pt-90"
        style={{ backgroundColor: "#252525", backgroundImage: `url(${BGImg})` }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title mb-40">
                    <img src={Img1} alt="logo" />
                  </div>
                  <div className="footer-link">
                    <p>
                      <strong>Địa chỉ : </strong>
                      <span>138 đường 30/4, Phú Hoà, Thủ Dầu Một, Bình Dương.</span>
                    </p>
                    <p>
                      <strong>Hotline 1 :</strong>
                      <span style={{color : "red"}}> 0868 990 167</span>
                    </p>
                    <p>
                      <strong>Hotline 2 :</strong>
                      <span style={{color : "red"}}> 0815 724 349</span>
                    </p>
                    <div className="f-contact">
                      <ul>
                        <li>
                          <div className="contact-box">
                            <div className="icon">
                              <img src={Img2} alt="logo" />
                            </div>
                            <div className="text">
                              <strong>Thứ 2 - Thứ 6:</strong><span>Giờ làm việc </span>
                              <span>9:00 - 21:00</span>
                              <strong>Thứ 7 - Chủ Nhật:</strong><span>Giờ làm việc </span>
                              <span>9:00 - 22:00</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Other Links</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/"> Trang Chủ</Link>
                      </li>
                      <li>
                        <Link to="/about">Giới Thiệu</Link>
                      </li>
                      <li>
                        <Link to="/service">Dịch Vụ</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Sản Phẩm</Link>
                      </li>
                      <li>
                        <Link to="/contact">Liên Hệ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Các dịch vụ</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="#"> Massage </Link>
                      </li>
                      <li>
                        <Link to="#"> Điều trị mụn</Link>
                      </li>
                      <li>
                        <Link to="#"> Phun môi collagen</Link>
                      </li>
                      <li>
                        <Link to="#"> Chăm sóc quầng thâm mắt</Link>
                      </li>
                      <li>
                        <Link to="#">Triệt lông</Link>
                      </li>
                      <li>
                        <Link to="#">Và nhiều dịch vụ khác</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Subscribe Now !</h2>
                  </div>
                  <div className="footer-link">
                    <div
                      className="subricbe p-relative"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      <form
                        action="news-mail.php"
                        method="post"
                        className="contact-form "
                      >
                        <input
                          type="text"
                          id="email2"
                          name="email2"
                          className="header-input"
                          placeholder="Your Email..."
                          required
                        />
                        <button className="btn header-btn">
                          <i className="fas fa-location-arrow"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="footer-social mt-10">
                  <a href="https://www.facebook.com/profile.php?id=100036470055343" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center copyright-wrap">
              <div className="col-lg-6">
                <div className="copy-text">
                  Copyright &copy; 2022 <Link to="#">MinTech</Link>. All rights
                  reserved.
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copay-contact">
                  <ul>
                    <li>
                      <div className="c-contact">
                        <div className="icon">
                          <img src={Footer} alt="img" />
                        </div>
                        <div className="text">
                          <span>mintech0202@gmail.com</span>
                          <h3> Our Email:</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="c-contact">
                        <div className="icon">
                          <img src={Footer1} alt="img" />
                        </div>
                        <div className="text">
                          <span>+84 383 899 488</span>
                          <h3>Call Now:</h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
