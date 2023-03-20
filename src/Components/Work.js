import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Massage",
      text: "Ly spa cung cấp các dịch vụ massage toàn thân và mặt, giúp giảm stress và mệt mỏi, giúp thư giãn tinh thần, cải thiện tuần hoàn máu, tăng cường sức khỏe và làn da.",
    },
    {
      image: ChooseMeals,
      title: "Gội đầu",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Dịch vụ khác",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Dịch Vụ</p>
        <h1 className="primary-heading">Ly Spa</h1>
        <p className="primary-text">
          Cung cấp đầy đủ các dịch vụ về chăm sóc sắc đẹp
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
