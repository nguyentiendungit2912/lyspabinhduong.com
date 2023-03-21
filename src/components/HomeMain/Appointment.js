import BGImg3 from "../../assets/img/bg/ap-bg.png";
import React from "react";
import Img from "../../assets/img/bg/open-box-img.png";
import SuccessNotification from './SuccessNotification';

const Appointment = () => {
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
      alert("Đặt lịch hẹn thành công! Chúng tôi sẽ liên hệ bạn sớm nhất")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section
        id="booking"
        className="booking-area p-relative pt-120 pb-120"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg3})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-bg">
                <div className="section-title center-align">
                  <h5>LIÊN HỆ</h5>
                  <h2>ĐẶT LỊCH HẸN</h2>
                  <p>
                    Aenean ut enim vel lectus rutrum sodales. Aliquam consequat
                    augue eget enim convallis, at maximus libero ullamcorper.
                    Cras sit amet placerat nisi.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="contact-form mt-30"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="fullname"
                          name="fullname"
                          placeholder="Nhập họ và tên của bạn"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Nhập địa chỉ email của bạn"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Nhập số điện thoại của bạn"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="date"
                          id="datetime"
                          name="datetime"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-subject mb-30">
                        <select
                          className="custom-select"
                          id="service"
                          name="service"
                          aria-label="Example select with button addon"
                        >
                          <option> Department...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write comments"
                        ></textarea>
                      </div>
                      <div className="slider-btn">
                        <button
                          type="submit"
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                        >
                          <span>Đặt lịch hẹn</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="opening-time">
                <div className="open-img">
                  <img src={Img} alt="icon01" />
                </div>
                <h3>Giờ mở cửa</h3>
                <div className="text">
                  <div className="left-text">Thứ 2 đến Thứ 6:</div>
                  <div className="right-text">09:00 – 22:00 </div>
                </div>
                <div className="text">
                  <div className="left-text">Thứ 7:</div>
                  <div className="right-text">09:00 – 22:00 </div>
                </div>
                <div className="text">
                  <div className="left-text">Chủ nhật:</div>
                  <div className="right-text">09:00 – 22:00 </div>
                </div>
                <div className="discount">
                  Liên hệ đặt lịch hẹn để được nhận các ưu đãi mới nhất.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
