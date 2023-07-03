import { Container } from '@mui/material/node_modules/@mui/system';
import React, { useEffect, useState } from 'react'
import NetworksByLevel from '../components/networks-by-level';
import ProfileHeader from '../components/profile-header';
import { getPartnerAccountsNetwork } from '../service/ash_mlm';
import Partner_Accounts_Network from '../_mock/partner_accounts_network';

const UserProfilePage = () => {
  const [partnerAccountNetwork, setPartnerAccountNetwork] = useState([]);

  useEffect(() => {
    // setPartnerAccountNetwork(() => Partner_Accounts_Network);
    fetchPartnerAccountsNetwork();
  }, []);

  const fetchPartnerAccountsNetwork = async () => {
    try {
      console.log('[USER_PROFILE_PAGE]::[fetchPartnerAccountsNetwork]:: Start');
      const accountsData = await getPartnerAccountsNetwork();
      console.log('[USER_PROFILE_PAGE]::[fetchPartnerAccountsNetwork]:: response', accountsData);
      if(accountsData) {
        setPartnerAccountNetwork(() => accountsData);
      }
    } catch(err) {
      console.log('[USER_PROFILE_PAGE]::[fetchPartnerAccountsNetwork]:: err', err);
    }
  }
  return (
    <Container>
      <ProfileHeader />
      <NetworksByLevel networks={partnerAccountNetwork}/>
    </Container>
  )
}

export default UserProfilePage;