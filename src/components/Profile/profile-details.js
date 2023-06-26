import { Avatar, Typography } from "@mui/material";
import React from "react";
import "./ProfilePage.css";

function Profile() {
  return (
    <div className="k-flex k-aic">
      <Avatar
        src="assets/illustrations/Ellipse 47.svg"
        alt="Profile Photo"
        sx={{ width: "55px", height: "55px", border: "1px solid #980387", mr: 2 }}
      />
      <Typography sx={{ fontSize: '21px', lineHeight: '32px', color: '#000000'}}>Reeta Sharma</Typography>
    </div>
  );
}

export default Profile;
