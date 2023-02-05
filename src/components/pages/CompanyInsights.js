import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const CompanyInsights = (props) => {
  const { phaseData } = props;
  return (
    <div>
      <div className="companyInsightContainer">
        {phaseData.map((data) => (
          <div key={data.id} className="companyInsight">
            <div className="itemtest">
              <div className="iconCotainer">
                <img src={data.img} alt="box" className="iconBox" />
              </div>
              <div className="percentageContainer">
                <p className="percentValue">{data.title}</p>
                <p className="percentValue">{data.percent}</p>
              </div>
              <div className="cutmBtnContainer">
                <NavLink to="/">
                  <Button className="cutsmBtn">{data.button}</Button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInsights;
