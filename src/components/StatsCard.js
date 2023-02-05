import React from "react";

const StatsCard = (props) => {
  const { statsData } = props;

  return (
    <>
      <div className="mainStatWrapper">
        <div className="statsContainer">
          {statsData.map((data, index) => (
            <div className="innerBox" key={index}>
              <img className="iconImg" src={data.icon} alt="" />
              <p className="statsText">{data.title}</p>
              <p className="dataValue">{data.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StatsCard;
