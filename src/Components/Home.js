import React, { useEffect, useState }  from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Narbar";
import { FiArrowRight } from "react-icons/fi";
import SuccessNotification from './SuccessNotification';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formEle = document.querySelector("form")
      const form = new FormData(formEle)
      fetch("https://script.google.com/macros/s/AKfycbyo_OFEXj6qrxCs0iIb5eeA92wQFuWnFjWi8f8TCpUARm66UnekCyr1gdnN6T17V7Bf/exec",
      {
        method: "POST",
        body: form
      })
      // sendMail(name, email, message);
      setShowSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button" onClick={toggleForm}>
            Order Now <FiArrowRight />{" "}
          </button>
          {isOpen && (
            <div className="popup">
              <div className="popup-content">
                <span className="close" onClick={toggleForm}>&times;</span>
                <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullname" class="required">Họ và tên</label>
                  <input type="text" id="fullname" name="fullname" placeholder="Nhập họ và tên của bạn" required />
                </div>
                <div>
                  <label htmlFor="email" class="required">Email</label>
                  <input type="email" id="email" name="email" placeholder="Nhập địa chỉ email của bạn" required />
                </div>
                <div>
                  <label htmlFor="phone" class="required">Số điện thoại</label>
                  <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại của bạn" required />
                </div>
                <div>
                  <label htmlFor="service" class="required">Lựa chọn dịch vụ</label>
                  <select id="service" name="service" required >
                    <option value="service1">Dịch vụ 1</option>
                    <option value="service2">Dịch vụ 2</option>
                    <option value="service3">Dịch vụ 3</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="datetime" >Thời gian đặt lịch</label>
                  <input type="datetime-local" id="datetime" name="datetime" required />
                </div>
                <button type="submit">Đăng ký</button>
                </form>
                {showSuccess && <SuccessNotification />}
              </div>
            </div>
          )}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
