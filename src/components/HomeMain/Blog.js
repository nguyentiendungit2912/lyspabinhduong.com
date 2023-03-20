import BGImg8 from "../../assets/img/bg/blog-bg.png";
import { Link } from "react-router-dom";
import React from "react";
import Img1 from "../../assets/img/blog/inner_b1.jpg";
import Img2 from "../../assets/img/blog/inner_b2.jpg";
import Img3 from "../../assets/img/blog/inner_b3.jpg";

const Blog = () => {
  return (
    <>
      <section
        id="blog"
        className="blog-area p-relative fix pt-90 pb-90"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg8})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Our Blog</h5>
                <h2>Latest Blog & News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="blog-thumb2">
                  <Link to="/blog-details">
                    <img src={Img1} alt="img" />
                  </Link>
                </div>
                <div className="blog-content2">
                  <div className="date-home">Massage</div>
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-alt"></i> 24th March 2021
                        </li>
                        <li>
                          <i className="fa fa-user"></i> By Admin
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    <Link to="/blog-details">
                      Cras accumsan nulla nec lacus ultricies placerat.
                    </Link>
                  </h4>
                  <div className="blog-btn">
                    <Link to="/blog-details">
                      Read More <i className="far fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 mb-30 hover-zoomin wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="blog-thumb2">
                  <Link to="/blog-details">
                    <img src={Img2} alt="img" />
                  </Link>
                </div>
                <div className="blog-content2">
                  <div className="date-home">Massage</div>
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-alt"></i> 24th March 2021
                        </li>
                        <li>
                          <i className="fa fa-user"></i> By Admin
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    <Link to="/blog-details">
                      Dras accumsan nulla nec lacus ultricies placerat.
                    </Link>
                  </h4>
                  <div className="blog-btn">
                    <Link to="/blog-details">
                      Read More <i className="far fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 mb-30 hover-zoomin wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="blog-thumb2">
                  <Link to="/blog-details">
                    <img src={Img3} alt="img" />
                  </Link>
                </div>
                <div className="blog-content2">
                  <div className="date-home">Massage</div>
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-alt"></i> 24th March 2021
                        </li>
                        <li>
                          <i className="fa fa-user"></i> By Admin
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    <Link to="/blog-details">
                      Seas accumsan nulla nec lacus ultricies placerat.
                    </Link>
                  </h4>
                  <div className="blog-btn">
                    <Link to="/blog-details">
                      Read More <i className="far fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
