import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import homeIcon from "../assets/home-run.svg";
import bellIcon from "../assets/bell.svg";
import iconThree from "../assets/card payment.svg";
import iconFour from "../assets/Group 4282.svg";
import iconSix from "../assets/levels&bonuses_icon.svg";
import iconSeven from "../assets/Mask Group 29.svg";

import StatsCard from "./StatsCard";
import Chart from "./Chart";
import Filter from "./Filter";
import TopCutomerCard from "./TopCutomerCard";

const ContainerCust = styled(Box)`
  margin-top: 0px;
  background: #283848;
  width: 4rem;
  height: 100%;
`;

const ListItemCust = styled(ListItemButton)`
  color: #fff;
  & > img {
    margin-top: 25px;
  }
`;

const ImgIcons = styled(`img`)`
  width: 23px;
`;

const MainContainer = styled(`div`)`
  display: flex;
`;

export default function SideBar() {
  const list = [
    homeIcon,
    bellIcon,
    iconThree,
    iconFour,
    iconSix,
    iconSeven,
    iconThree,
    iconSix,
    iconThree,
    iconSeven,
    iconFour,
  ];

  return (
    <>
      <MainContainer>
        <Box sx={{ display: "flex" }}>
          <ContainerCust variant="permanent">
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemCust
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {list.map((listItem, index) => (
                    <ImgIcons key={index} src={listItem} alt="" />
                  ))}
                </ListItemCust>
              </ListItem>
            </List>
          </ContainerCust>
        </Box>
      </MainContainer>
    </>
  );
}
