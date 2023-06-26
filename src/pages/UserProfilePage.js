import { Container } from '@mui/material/node_modules/@mui/system';
import React from 'react'
import NetworksByLevel from '../components/networks-by-level';
import ProfileHeader from '../components/profile-header';

const UserProfilePage = () => {
  return (
    <Container>
      <ProfileHeader />
      <NetworksByLevel />
    </Container>
  )
}

export default UserProfilePage;