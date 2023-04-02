import BGImg3 from "../../assets/img/bg/ap-bg.png";
import React, { useState } from "react";
import Img from "../../assets/img/bg/open-box-img.png";
import emailjs from 'emailjs-com';
import moment from "moment";
import "moment/locale/vi";
import validator from 'validator';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  
    // Kết hợp các thông tin để tạo chuỗi có định dạng dd/mm/yyyy
    return formattedDate;
  }

  const defaultDate = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });

  function sendEmail(e) {
    e.preventDefault();

    const { fullname, email, phone, datetime, service, message } = e.target.elements;

    emailjs.send('service_kzsj3ro', 'template_a1k0pc3', {
      to_email: 'nguyentiendung.it.2912@gmail.com',
      name: fullname.value,
      email: email.value,
      phone: phone.value,
      datetime: datetime.value,
      service: service.value,
      message: message.value
    }, '9AnWc2G0cZZLyKsSJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    // Validate email
    if (!validator.isEmail(email)) {
      alert('Vui lòng nhập địa chỉ email hợp lệ!');
      return;
    }
  
    // Validate phone number
    if (!validator.isMobilePhone(phone, 'vi-VN')) {
      alert('Vui lòng nhập số điện thoại hợp lệ!');
      return;
    }

    try {
      const formEle = document.querySelector("form")
      const form = new FormData(formEle)
      fetch("https://script.google.com/macros/s/AKfycbyo_OFEXj6qrxCs0iIb5eeA92wQFuWnFjWi8f8TCpUARm66UnekCyr1gdnN6T17V7Bf/exec",
      {
        method: "POST",
        body: form
      })
      sendEmail(event)
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
                    Liên hệ đặt lịch ngay để nhận ưu đãi cực kỳ hấp dẫn. Hoặc gọi ngay hotline <span style={{color: "red"}}>0868 990 167</span> để nhận được tư vấn về các dịch vụ khác.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="contact-form mt-30"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-20">
                      <label htmlFor="fullname" className="placeholder">Họ và tên</label>
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
                      <label htmlFor="email" className="placeholder">Email</label>
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
                      <label htmlFor="phone" className="placeholder">Số điện thoại</label>
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
                        <label htmlFor="datetime" className="placeholder">Ngày đặt lịch vụ</label>
                        <input
                          type="datetime-local"
                          id="datetime"
                          name="datetime"
                          defaultValue={defaultDate}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-subject mb-30">
                      <label htmlFor="service" className="placeholder">Dịch vụ</label>
                        <select
                          className="custom-select"
                          id="service"
                          name="service"
                          aria-label="Example select with button addon"
                          required 
                        >
                          <option> Lựa chọn dịch vụ</option>
                          <option value="Massage body, Massage mặt, Tắm trắng">Massage body, Massage mặt, Tắm trắng</option>
                          <option value="Gội đầu thường và Gội đầu dưỡng sinh">Gội đầu thường và Gội đầu dưỡng sinh</option>
                          <option value="Điều trị mụn, Nám, Tàn nhang, Lăn kim, Sẹo rỗ">Điều trị mụn, Nám, Tàn nhang, Lăn kim, Sẹo rỗ</option>
                          <option value="Chăm sóc quầng thâm mắt">Chăm sóc quầng thâm mắt</option>
                          <option value="Phun môi collagen, Phum mày, Phun mi">Phun môi collagen, Phum mày, Phun mi</option>
                          <option value="Điều trị căng bóng da">Điều trị căng bóng da</option>
                          <option value="Tẩy nốt ruồi, Cấy collagen tươi, Triệt lông">Tẩy nốt ruồi, Cấy collagen tươi, Triệt lông</option>
                          <option value="Đăng ký khóa học">Đăng ký khóa học</option>
                          <option value="Và nhiều dịch vụ khác">Và nhiều dịch vụ khác</option>
                        </select>
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                      <label htmlFor="message" className="placeholder">Ghi chú thêm yêu cầu</label>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Ghi chú thêm"
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
                  <div className="left-text">Thứ 2 - Thứ 6:</div>
                  <div className="right-text">09:00 – 21:00 </div>
                </div>
                <div className="text">
                  <div className="left-text">Thứ 7 - Chủ nhật:</div>
                  <div className="right-text">09:00 – 22:00 </div>
                </div>
                <div className="text">
                  Địa chỉ: 138 đường 30/4, Phú Hoà, Thủ Dầu Một, Bình Dương.
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
