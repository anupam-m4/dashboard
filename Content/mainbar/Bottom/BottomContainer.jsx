import React from "react";
import "./BottomContainer.css";
import { BsCart4 } from "react-icons/bs";
import { FaBagShopping, FaCommentsDollar } from "react-icons/fa6";

import Card from "../../../compo/Card";
import Activity from "../../../compo/Activity";
import Order from "../../../compo/Order";

import image1 from "../../../assets/man.jpg";
import image2 from "../../../assets/man2.jpg";
import image3 from "../../../assets/man3.jpg";
import image4 from "../../../assets/women4.jpg";
import image5 from "../../../assets/women2.jpg";
import image6 from "../../../assets/women3.jpg";
import Profit from "../../../compo/Profit";
import Goals from "../../../compo/Goals";
import Review from "../../../compo/Review";

const orders = [
  {
    customerName: "Wade Warren",
    customerImage: image1,
    orderNumber: 15478256,
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customerName: "Jane Cooper",
    customerImage: image2,
    orderNumber: 48965786,
    amount: "$365.02",
    status: "Delivered",
  },
  {
    customerName: "Guy Hawkins",
    customerImage: image3,
    orderNumber: 78958215,
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    customerName: "Kristin Watson",
    customerImage: image4,
    orderNumber: 20965732,
    amount: "$65.00",
    status: "Pending",
  },
  {
    customerName: "Cody Fisher",
    customerImage: image5,
    orderNumber: 95715620,
    amount: "$545.00",
    status: "Delivered",
  },
  {
    customerName: "Savannah Nguyen",
    customerImage: image6,
    orderNumber: 78514568,
    amount: "$128.20",
    status: "Delivered",
  },
];
const reviews = [
  {
    imgSrc: image1,
    name: "Wade Warren",
    rating: 5,
    feedback:
      "Fantastic service! I highly recommend it for quality and reliability. The attention to detail and commitment to customer satisfaction set it apart",
  },
  {
    imgSrc: image2,
    name: "Jane Cooper",
    rating: 4,
    feedback:
      "Absolutely fantastic service! I wholeheartedly endorse it and would recommend it to anyone looking for quality and reliability",
  },
  {
    imgSrc: image3,
    name: "Guy Hawkins",
    rating: 3,
    feedback:
      "Outstanding service! Don't hesitate to give it a try you won't be disappointed!.",
  },
  {
    imgSrc: image4,
    name: "Kristin Watson",
    rating: 4,
    feedback:
      "The service provided is truly exceptional! I fully support it and would advocate for it to anyone in pursuit of quality and dependability.",
  },
];

const BottomContainer = () => {
  return (
    <div className="bottom-container">
      <div className="left-bottom">
        <div className="left-top">
          <div className="card-container">
            <Card
              icon={<BsCart4 />}
              title="Total Orders"
              value="75"
              change="3"
              isPositive={true}
            />
            <Card
              icon={<FaBagShopping />}
              title="Total Delivered"
              value="70"
              change="3"
              isPositive={false}
            />
            <Card
              icon={<FaBagShopping />}
              title="Total Cancelled"
              value="05"
              change="3"
              isPositive={true}
            />
            <Card
              icon={<FaCommentsDollar />}
              title="Total Revenue"
              value="$12K"
              change="3"
              isPositive={false}
            />
          </div>
        </div>

        <div className="left-mid">
          <Activity />
        </div>
        <div className="left-lower">
          <Order orders={orders} />
        </div>
      </div>
      <div className="right-bottom">
        <div className="right-top">
          <Profit />
        </div>
        <div className="right-mid">
          <Goals />
        </div>
        <div className="right-mid">
          <Review reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default BottomContainer;
