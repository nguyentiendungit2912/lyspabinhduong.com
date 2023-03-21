import React from "react";
import Appointment from "../HomeMain/Appointment";
import { Link } from "react-router-dom";
import Bredcrumb from "../HomeMain/Bredcrumb";

const Main = () => {
  return (
    <>
      <Bredcrumb title="Contact Us" subtitle="Contact Us" />
      <Appointment />

      <div className="map fix" style={{ background: "#F5F5F5" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.800060417258!2d106.67200325073615!3d10.978458992146292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d11e00332a9b%3A0x92780299c25afde5!2zTHkgU3BhIELDrG5oIETGsMahbmc!5e0!3m2!1sen!2s!4v1679411363992!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
