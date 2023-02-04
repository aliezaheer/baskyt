import { useState } from "react";
import Chart from "./Chart";
import Filter from "./Filter";
import StatsCard from "./StatsCard";
import { UserData } from "../data/Data";
import TopCutomerCard from "./TopCutomerCard";

const statsData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1769/1769041.png",
    title: "Customers",
    value: 7453,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1656/1656850.png",
    title: "Orders",
    value: 1907,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/846/846296.png",
    title: "Delivery",
    value: 18707,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2438/2438078.png",
    title: "Users",
    value: 12907,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/846/846296.png",
    title: "Revenue",
    value: 7453,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2438/2438078.png",
    title: "AVG.Rating",
    value: "4.0",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5412/5412778.png",
    title: "REVENUE PER CUSTOMER",
    value: 12907,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2893/2893811.png",
    title: "AVG.REVENUE PER USER",
    value: 12907,
  },
];

const HomePage = () => {
  const [appData, setAppData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "USER STATISTICS",
        data: UserData.map((data) => data.monthlyUsers),
      },
    ],
  });
  return (
    <div>
      <Filter />
      <div className="cardAndChart">
        <StatsCard statsData={statsData} />
        <Chart chartData={appData} />
      </div>
      <TopCutomerCard />
    </div>
  );
};

export default HomePage;
