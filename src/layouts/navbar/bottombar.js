import React from "react";
// @mui/material
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
// @mui/icons
import { useLocation } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import './bottombar.css';

const Bottombar = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  console.log("Bottombar", location);
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", md: "none" },
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="bottombar k-aic k-jcse"
      >
        <Button href="/home" variant="contained" className={location && location.pathname === '/home' ? 'bottombar__button--selected' : 'bottombar__button'}>
          <Avatar src="/assets/illustrations/HomePage.svg" alt="Home" />
        </Button>
        <Button href="/user-profile" variant="contained" className={location && location.pathname === '/user-profile' ? 'bottombar__button--selected' : 'bottombar__button'}>
          <Avatar src="/assets/illustrations/Customer.svg" alt="Profile" />
        </Button>
        <Button href="/kyc" variant="contained" className={location && location.pathname && location.pathname.split('/').includes('kyc') ? 'bottombar__button--selected' : 'bottombar__button'}>
          <Avatar src="/assets/illustrations/Customer.svg" alt="kyc" />
        </Button>
      </BottomNavigation>
    </Paper>
  );
};

export default React.memo(Bottombar);
