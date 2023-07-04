import { Container, Divider } from '@mui/material';
import React from 'react'
import NetworkInfo from '../network-info';
import Profile from '../Profile/profile-details';
import ReferFriend from '../Profile/refer';
import Search from '../search';
import './index.css';

const ProfileHeader = () => {
  return (
    <Container className='parent-container'>
      <Profile />
      {/* <Search /> */}
      <ReferFriend />
      {/* <NetworkInfo />     */}
    </Container>
  )
}

export default ProfileHeader;