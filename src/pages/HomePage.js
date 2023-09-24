import React, { useState, useEffect } from 'react'
import { Button, Container, Typography } from '@mui/material';
import Payouts from '../components/payouts';
import NetworkInfo from '../components/network-info';
import { getPartnerAccounts, getPartnerAccountsNetwork, storageGetItem } from '../service/ash_mlm'
import Partner_Accounts from '../_mock/partner_accounts';
import Performers from '../components/performers';
import ProfileHeader from '../components/profile-header';
import NetworkReport from '../components/network-report';

const HomePage = () => {
  const [partnerAccount, setPartnerAccount] = useState({});
  const [currentAccount, setCurrentAccount] = useState({});
  const [currentAccountsNetwork, setCurrentAccountsNetwork] = useState({});

  useEffect(() => {
    // setPartnerAccount(() => Partner_Accounts);
    fetchPartnerAccounts();
    fetchCurrentAccount();
    fetchCurrentAccountsNetwork(currentAccount.id);
  }, []);

  const fetchPartnerAccounts = async () => {
    try {
      console.log('[HOME_PAGE]::[fetchPartnerAccounts]:: Start');
      const accountsData = await getPartnerAccounts();
      console.log('[HOME_PAGE]::[fetchPartnerAccounts]:: response', accountsData);
      if (accountsData) {
        setPartnerAccount(() => accountsData);
      }
    } catch (err) {
      console.log('[HOME_PAGE]::[fetchPartnerAccounts]:: err', err);
    }
  }

  const fetchCurrentAccount = async () => {
    console.log("fetching current user from local storage");
    const userString = await storageGetItem('users')
    let user;
    if (userString != null) {
      user = JSON.parse(userString);
    }
    if (user && user.id) {
      setCurrentAccount(() => user);
      console.log("current user is", currentAccount);
      return
    }
    console.log("current user is not set");
  }

  const fetchCurrentAccountsNetwork = async (userId) => {
    try {
      console.log('[USER_PROFILE_PAGE]::[fetchPartnerAccountsNetwork]:: Start');
      const accountsData = await getPartnerAccountsNetwork(userId);
      console.log('[USER_PROFILE_PAGE]::[fetchPartnerAccountsNetwork]:: response', accountsData);
      if (accountsData) {
        setCurrentAccountsNetwork(() => accountsData);
      }
    } catch (err) {
      console.log('[USER_PROFILE_PAGE]::[fetchPartnerAccountsNetwork]:: err', err);
    }
  }

  return (
    <Container>
      <ProfileHeader currentUser={currentAccountsNetwork} />
      <NetworkReport></NetworkReport>
      <Payouts payouts={partnerAccount.payouts} />
      {/* <NetworkInfo network={getNewtworkInfo}/> */}
      <Performers title="Top performers" performer={partnerAccount.top} />
      <Performers title="Bottom performers" performer={partnerAccount.bottom} isSecondary />
    </Container>
  )
}

export default HomePage