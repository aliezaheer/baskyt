import React from "react";
import CompanyInsights from "./CompanyInsights";

const phaseData = [
  {
    id: "order1",
    img: "https://cdn-icons-png.flaticon.com/512/679/679922.png",
    title: "Order Acceptance",
    percent: "85%",
    button: "Phase 1 Goal",
  },
  {
    id: "order2",
    img: "https://cdn-icons-png.flaticon.com/512/833/833602.png",
    title: "Reaching Vendor",
    percent: "95%",
    button: "Phase 2 Goal",
  },
  {
    id: "order3",
    img: "https://cdn-icons-png.flaticon.com/512/4130/4130365.png",
    title: "Delivery Order",
    percent: "65%",
    button: "Phase 3 Goal",
  },
  {
    id: "order4",
    img: "https://cdn-icons-png.flaticon.com/512/1634/1634264.png",
    title: "Order Acceptance",
    percent: "85%",
    button: "Phase 2 Goal",
  },
  {
    id: "order5",
    img: "https://cdn-icons-png.flaticon.com/512/744/744922.png",
    title: "Total Quality Score",
    percent: "54%",
    button: "Phase 2 Goal",
  },
];

const InsightContainer = () => {
  return (
    <>
      <CompanyInsights phaseData={phaseData} />
    </>
  );
};

export default InsightContainer;
