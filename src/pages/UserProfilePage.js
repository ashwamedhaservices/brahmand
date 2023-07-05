import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NetworksByLevel from '../components/networks-by-level';
import ProfileHeader from '../components/profile-header';
import { getPartnerAccountsNetwork } from '../service/ash_mlm';
import Partner_Accounts_Network from '../_mock/partner_accounts_network';

const UserProfilePage = () => {
  const [partnerAccountNetwork, setPartnerAccountNetwork] = useState({});
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    // setPartnerAccountNetwork(() => Partner_Accounts_Network);
    fetchPartnerAccountsNetwork(userId);
  }, [userId]);

  const fetchPartnerAccountsNetwork = async (userId) => {
    try {
      console.log('[USER_PROFILE_PAGE]::[fetchPartnerAccountsNetwork]:: Start');
      const accountsData = await getPartnerAccountsNetwork(userId);
      console.log('[USER_PROFILE_PAGE]::[fetchPartnerAccountsNetwork]:: response', accountsData);
      if(accountsData) {
        setPartnerAccountNetwork(() => accountsData);
      }
    } catch(err) {
      console.log('[USER_PROFILE_PAGE]::[fetchPartnerAccountsNetwork]:: err', err);
    }
  }

  const handleSelectedUserClick = (user) => {
    setUserId(() => user.id)
  }
  return (
    <Container>
      <ProfileHeader currentUser={partnerAccountNetwork}/>
      <NetworksByLevel networks={partnerAccountNetwork.network} handleUserClick={handleSelectedUserClick}/>
    </Container>
  )
}

export default UserProfilePage;