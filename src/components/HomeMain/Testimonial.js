import BGImg7 from "../../assets/img/bg/test-bg.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import Img1 from "../../assets/img/testimonial/testi_avatar.png";
import Img2 from "../../assets/img/testimonial/testi_avatar_02.png";
import Icon from "../../assets/img/testimonial/qt-icon.png";

const Testimonial = () => {
  const testimonial = {
    initialIndex: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    autoPlay: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        className="testimonial-area pt-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg7})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="section-title mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Our Testimonial</h5>
                <h2>What Our Clients Says</h2>
                <p className="mt-15">
                  Nullam posuere eros ex, vitae consequat ipsum semper cursus.
                  In ut commodo eros. Vestibulum sed elit id orci rhoncus. Duis
                  quis nunc eu augue efficitur suscipit.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider className="testimonial-active" {...testimonial}>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src={Img1} alt="img" />
                    <div className="ta-info">
                      <h6>Jina Nilson</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src={Img2} alt="img" />
                    <div className="ta-info">
                      <h6>Braitly Dcosta</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src={Img1} alt="img" />
                    <div className="ta-info">
                      <h6>Jina Nilson</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testi-author">
                    <img src={Img2} alt="img" />
                    <div className="ta-info">
                      <h6>Braitly Dcosta</h6>
                      <span>Client</span>
                    </div>
                  </div>
                  <p>
                    “Phasellus aliquam quis lorem amet dapibus feugiat vitae
                    purus vitae efficitur. Vestibulum sed elit id orci rhoncus
                    ultricies. Morbi vitae semper consequat ipsum semper quam”.
                  </p>

                  <div className="qt-img">
                    <img src={Icon} alt="img" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
