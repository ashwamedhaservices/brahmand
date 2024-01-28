import React from "react";
// @mui/material
import Paper from "@mui/material/Paper";

// @mui/icons
import { useLocation } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import './bottombar.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BottomNavigation from "@mui/material/BottomNavigation";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
          <HomeRoundedIcon sx={{color: '#4979D1'}}/>
        </Button>
        <Button href="/products" variant="contained" className={location && location.pathname === '/products' ? 'bottombar__button--selected' : 'bottombar__button'}>
          <CategoryRoundedIcon sx={{color: '#4979D1'}}/>
        </Button>
        <Button href="/user-profile" variant="contained" className={location && location.pathname === '/user-profile' ? 'bottombar__button--selected' : 'bottombar__button'}>
          <AccountCircleIcon sx={{color: '#4979D1'}}/>
        </Button>
        <Button href="/kyc" variant="contained" className={location && location.pathname && location.pathname.split('/').includes('kyc') ? 'bottombar__button--selected' : 'bottombar__button'}>
          <ManageAccountsIcon sx={{color: '#4979D1'}}/>
        </Button>
      </BottomNavigation>
    </Paper>
  );
};

export default React.memo(Bottombar);
