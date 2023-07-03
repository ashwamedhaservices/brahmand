import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import Payouts from '../components/payouts';
import NetworkInfo from '../components/network-info';
import { getPartnerAccounts } from '../service/ash_mlm'
import Partner_Accounts from '../_mock/partner_accounts';
import Performers from '../components/performers';

const HomePage = () => {
  const [partnerAccount, setPartnerAccount] = useState({});

  useEffect(() => {
    // setPartnerAccount(() => Partner_Accounts);
    fetchPartnerAccounts();
  }, []);

  const fetchPartnerAccounts = async () => {
    try {
      console.log('[HOME_PAGE]::[fetchPartnerAccounts]:: Start');
      const accountsData = await getPartnerAccounts();
      console.log('[HOME_PAGE]::[fetchPartnerAccounts]:: response', accountsData);
      if(accountsData) {
        setPartnerAccount(() => accountsData);
      }
    } catch(err) {
      console.log('[HOME_PAGE]::[fetchPartnerAccounts]:: err', err);
    }
  }

  const getNewtworkInfo = () => ({}); 

  return (
    <Container>
      <Payouts payouts={partnerAccount.payouts} />
      {/* <NetworkInfo network={getNewtworkInfo}/> */}
      <Performers title="Top performers" performer={partnerAccount.top}/>
      <Performers title="Bottom performers" performer={partnerAccount.bottom} isSecondary/>
    </Container>
  )
}

export default HomePage