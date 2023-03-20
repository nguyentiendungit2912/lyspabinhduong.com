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
              <h5>Our Services</h5>
              <h2>What We Provide</h2>
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
                      <Link to="/service-details">Facials</Link>
                    </h4>
                    <p>
                      Cras id aliquam leo. Vestibulum laoreet, mi sit amet
                      tristique tincidunt nec laoreet.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon-right">
                    <img src={Icon2} alt="icon01" />
                  </div>
                  <div className="text">
                    <h4>
                      <Link to="/service-details">Mineral Baths</Link>
                    </h4>
                    <p>
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
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
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
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
                      <Link to="/service-details">Body Treatments</Link>
                    </h4>
                    <p>
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Icon5} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details">Waxing</Link>
                    </h4>
                    <p>
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Icon6} alt="icon01" />
                  </div>
                  <div className="text pt-10">
                    <h4>
                      <Link to="/service-details">Geothermal Spa</Link>
                    </h4>
                    <p>
                      Aenean eleifend turpis tellus, nec laoreet metus elementum
                      ac.
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
