import BGImg3 from "../../assets/img/bg/ap-bg.png";
import React from "react";
import Img from "../../assets/img/bg/open-box-img.png";
import emailjs from 'emailjs-com';

const Appointment = () => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  
    // Kết hợp các thông tin để tạo chuỗi có định dạng dd/mm/yyyy
    return formattedDate;
  }

  function sendEmail(e) {
    e.preventDefault();

    const { fullname, email, phone, datetime, service, message } = e.target.elements;

    const messageBody = `
      Name: ${fullname.value}\n
      Email: ${email.value}\n
      Phone: ${phone.value}\n
      Datetime: ${formatDate(datetime.value)}\n
      Service: ${service.value}\n
      Message: ${message.value}\n
    `;

    emailjs.send('service_kzsj3ro', 'template_a1k0pc3', {
      to_email: 'nguyentiendung.it.2912@gmail.com',
      message: messageBody
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
    try {
      const formEle = document.querySelector("form")
      const form = new FormData(formEle)
      fetch("https://script.google.com/macros/s/AKfycbyo_OFEXj6qrxCs0iIb5eeA92wQFuWnFjWi8f8TCpUARm66UnekCyr1gdnN6T17V7Bf/exec",
      {
        method: "POST",
        body: form
      })
      alert("Đặt lịch hẹn thành công! Chúng tôi sẽ liên hệ bạn sớm nhất")
      sendEmail(event)
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
                    Liên hệ đặt lịch ngay để nhận ưu đãi cực kỳ hấp dẫn. Hoặc gọi ngay hotline <span style={{color: "red"}}>0383.899.488</span> để nhận được tư vấn về các dịch vụ khác.
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
                          <option> Lựa chọn dịch vụ</option>
                          <option value="Massage body, Massage mặt, Tắm trắng">Massage body, Massage mặt, Tắm trắng</option>
                          <option value="Gội đầu thường và Gội đầu dưỡng sinh">Gội đầu thường và Gội đầu dưỡng sinh</option>
                          <option value="Điều trị mụn, Nám, Tàn nhang, Lăn kim, Sẹo rỗ">Điều trị mụn, Nám, Tàn nhang, Lăn kim, Sẹo rỗ</option>
                          <option value="Chăm sóc quầng thâm mắt">Chăm sóc quầng thâm mắt</option>
                          <option value="Phun môi collagen, Phum mày, Phun mi">Phun môi collagen, Phum mày, Phun mi</option>
                          <option value="Điều trị căng bóng da">Điều trị căng bóng da</option>
                          <option value="Tẩy nốt ruồi, Cấy collagen tươi, Triệt lông">Tẩy nốt ruồi, Cấy collagen tươi, Triệt lông</option>
                          <option value="Và nhiều dịch vụ khác">Và nhiều dịch vụ khác</option>
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
