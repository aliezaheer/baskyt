import React from "react";
import profile from "../assets/profile.jpg";
import profile2 from "../assets/profile1.jpg";
import profile3 from "../assets/profile3.jpg";
import UserTable from "./UserTable";

const TopCutomerCard = () => {
  return (
    <div>
      <div className="topCutomerContainer">
        <div className="innerContainerTopCustomer">
          <div className="upperPart">
            <img className="customerProfile" src={profile} alt="" />
            <p className="topCustomerName">
              Christina <br /> Ambrosia
            </p>
            <p className="topCustomerAmount">$ 34,137</p>
          </div>
          <div className="bottomPart">
            <div>
              <p className="bottomPartText">REVENUE / MONTH</p>
              <div className="countContainer">
                <p>$ 34,137</p>
                <p className="ratingGreenText">↑ 182</p>
              </div>
            </div>
            <div>
              <p className="bottomPartText">PROCESSED ORDERS / MONTH</p>
              <div className="countContainer">
                <p>182</p>
                <p className="ratingRedText">↓ 182</p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainerTopCustomer">
          <div className="upperPart">
            <img className="customerProfile" src={profile2} alt="" />
            <p className="topCustomerName">
              Anna <br /> Hails
            </p>
            <p className="topCustomerAmount">$ 29,337</p>
          </div>
          <div className="bottomPart">
            <div>
              <p className="bottomPartText">REVENUE / MONTH</p>
              <div className="countContainer">
                <p>$ 29,337</p>
                <p className="ratingGreenText">↑ 132</p>
              </div>
            </div>
            <div>
              <p className="bottomPartText">PROCESSED ORDERS / MONTH</p>
              <div className="countContainer">
                <p>182</p>
                <p className="ratingRedText">↓ 122</p>
              </div>
            </div>
          </div>
        </div>

        <div className="innerContainerTopCustomer">
          <div className="upperPart">
            <img className="customerProfile" src={profile3} alt="" />
            <p className="topCustomerName">
              Christina <br /> Ambrosia
            </p>
            <p className="topCustomerAmount">$ 49,137</p>
          </div>
          <div className="bottomPart">
            <div>
              <p className="bottomPartText">REVENUE / MONTH</p>
              <div className="countContainer">
                <p>$ 49,137</p>
                <p className="ratingGreenText">↑ 232</p>
              </div>
            </div>
            <div>
              <p className="bottomPartText">PROCESSED ORDERS / MONTH</p>
              <div className="countContainer">
                <p>182</p>
                <p className="ratingRedText">↓ 322</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default TopCutomerCard;
