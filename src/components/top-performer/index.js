import React from "react";
import PayoutCard from "../common/Card/payout_card";
import TopPerforemrs from "../common/Card/payout_card";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import "./index.css";
import { Typography } from "@mui/material";

const mystyle = {
  color: "#000",
  height: "84px",
  backgroundColor: "#A290A0",
  borderRadius: "20px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};

const TopPerformer = () => {
  return (
    <div className="k-ml16 k-mr16 k-mt32">
      <Typography className="k-pt32 k-ml16 k-mb16 theme__typography--primary theme__palette--primary theme__fw--primary">Top performers</Typography>
      <Box
        className="k-mt16 k-flex k-aic"
        sx={{ boxShadow: 4 }}
        style={mystyle}
      >
        <div className="profile-photo k-ml16 k-mt16 k-mb16">
          <img src="assets/illustrations/Ellipse 47.svg" alt="Profile Photo" />
        </div>
        <div className="k-flex k-fdc k-ml16">
          <div className="b-name">Name</div>
          <div className="k-flex k-fdr k-jcsb" style={{ width: "150px" }}>
            <div className="b-name k-fs15">Earning</div>
            <div className="b-name k-fs15">Lvl</div>
          </div>
        </div>
      </Box>
      <Box
        className="k-mt16 k-flex k-aic"
        sx={{ boxShadow: 4 }}
        style={mystyle}
      >
        <div className="profile-photo k-ml16 k-mt16 k-mb16">
          <img src="assets/illustrations/Ellipse 47.svg" alt="Profile Photo" />
        </div>
        <div className="k-flex k-fdc k-ml16">
          <div className="b-name">Name</div>
          <div className="k-flex k-fdr k-jcsb" style={{ width: "150px" }}>
            <div className="b-name k-fs15">Earning</div>
            <div className="b-name k-fs15">Lvl</div>
          </div>
        </div>
      </Box>
      <Box
        className="k-mt16 k-flex k-aic"
        sx={{ boxShadow: 4 }}
        style={mystyle}
      >
        <div className="profile-photo k-ml16 k-mt16 k-mb16">
          <img src="assets/illustrations/Ellipse 47.svg" alt="Profile Photo" />
        </div>
        <div className="k-flex k-fdc k-ml16">
          <div className="b-name">Name</div>
          <div className="k-flex k-fdr k-jcsb" style={{ width: "150px" }}>
            <div className="b-name k-fs15">Earning</div>
            <div className="b-name k-fs15">Lvl</div>
          </div>
        </div>
      </Box>
      <Box
        className="k-mt16 k-flex k-aic"
        sx={{ boxShadow: 4 }}
        style={mystyle}
      >
        <div className="profile-photo k-ml16 k-mt16 k-mb16">
          <img src="assets/illustrations/Ellipse 47.svg" alt="Profile Photo" />
        </div>
        <div className="k-flex k-fdc k-ml16">
          <div className="b-name">Name</div>
          <div className="k-flex k-fdr k-jcsb" style={{ width: "150px" }}>
            <div className="b-name k-fs15">Earning</div>
            <div className="b-name k-fs15">Lvl</div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default TopPerformer;
