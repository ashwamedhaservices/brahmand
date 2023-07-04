import { Avatar, Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { storageGetItem } from "../../service/ash_mlm";
import "./ProfilePage.css";

function Profile() {
  const [name, setName] = useState('Guest');
  
  useEffect(() => {
    getStorageItem();
  }, [])

  const getStorageItem = () => {
    const user = JSON.parse(storageGetItem('users'));
    setName(() => user.full_name)
    return 
  }
  return (
    <Container>
      <Stack sx={{ px: 2, py: 2 }} className="k-fdr k-aic">
        {/* <Avatar
          src="assets/illustrations/Ellipse 47.svg"
          alt="Profile Photo"
          sx={{ width: "55px", height: "55px", border: "1px solid #980387", mr: 2 }}
        /> */}
        <Avatar
          sx={{ width: "55px", height: "55px", border: "1px solid #980387", mr: 2, bgcolor: 'var(--theme-background-primary)' }}
        >
          {name.split(' ')[0].split('')[0]}
        </Avatar>
      <Typography sx={{ fontSize: '21px', lineHeight: '32px', color: '#000000'}}>{name}</Typography>
      </Stack>
    </Container>
  );
}

export default Profile;
