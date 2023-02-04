import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const CompanyInsights = () => {
  return (
    <div className="companyInsightComponent">
      <h1>Welcome To This Component.</h1>
      <NavLink to="/">
        <Button color="error" variant="contained">
          Home Page
        </Button>
      </NavLink>
    </div>
  );
};

export default CompanyInsights;
