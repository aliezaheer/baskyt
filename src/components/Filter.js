import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";

import { NavLink } from "react-router-dom";

export default function Filter() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <div className="filterAndBtn">
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{ width: 150, ml: 3.3, mt: 2 }}
        renderInput={(params) => <TextField {...params} label="Filter By" />}
      />

      <NavLink to="/company-insight">
        <Button
          className="tqmBtn"
          variant="contained"
          color="error"
          sx={{ mr: 4, mt: 2, px: 8 }}
        >
          TQM
        </Button>
      </NavLink>
    </div>
  );
}

const top100Films = [
  { id: 1, title: "data1", year: 1000, weeklyUsers: 200 },
  { id: 2, title: "data2", year: 800, weeklyUsers: 500 },
  { id: 3, title: "data3", year: 1500, weeklyUsers: 300 },
  { id: 4, title: "data4", year: 1600, weeklyUsers: 400 },
  { id: 5, title: "data5", year: 1650, weeklyUsers: 100 },
  { id: 6, title: "data6", year: 1700, weeklyUsers: 100 },
  { id: 7, title: "data7", year: 1720, weeklyUsers: 100 },
];
