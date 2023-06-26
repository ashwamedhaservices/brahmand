import React from 'react'
import NetworkInfo from '../network-info';
import Profile from '../Profile/profile-details';
import ReferFriend from '../Profile/refer';
import Search from '../search';
import './index.css';

const ProfileHeader = () => {
  return (
    <div className='parent-container'>
      <div className='app-conatiner'>
        <Profile />
        <Search />
      </div>
      <ReferFriend />
      <NetworkInfo />    
    </div>
  )
}

export default ProfileHeader;