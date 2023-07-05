import { Container } from '@mui/material';
import NetworkInfo from '../network-info';
import Profile from '../Profile/profile-details';
import ReferFriend from '../Profile/refer';
import Search from '../search';
import './index.css';

const ProfileHeader = ({currentUser}) => {
  return (
    <Container className='parent-container'>
      <Profile name={currentUser.name}/>
      {/* <Search /> */}
      <ReferFriend referralUrl={currentUser.referral_link}/>
      <NetworkInfo earnings={currentUser.earnings} networkSize={currentUser.network_width} networkWidth={currentUser.network_width} networkLength={currentUser && currentUser.network && currentUser.network.length}/>    
    </Container>
  )
}

export default ProfileHeader;