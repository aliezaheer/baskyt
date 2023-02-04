import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const CompanyInsights = () => {
  return (
    <div className="companyInsightContainer">
      <div className="iconCotainer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/679/679922.png"
          alt="box"
          className="iconBox"
        />
      </div>
      <div className="percentageContainer">
        <p className="percentValue">Order Acceptance</p>
        <p className="percentValue">8%</p>
      </div>
      <div className="cutmBtnContainer">
        <NavLink to="/">
          <Button className="cutsmBtn">Phase 1 Goal</Button>
        </NavLink>
      </div>
    </div>
    //     <div className="companyInsightComponent">
    //       <h1>Welcome To This Component.</h1>
    //       <NavLink to="/">
    //         <Button color="error" variant="contained">
    //           Home Page
    //         </Button>
    //       </NavLink>
    //     </div>
  );
};

export default CompanyInsights;
