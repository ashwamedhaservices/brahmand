import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material/node_modules/@mui/system';
import Payouts from '../components/payouts';
import NetworkInfo from '../components/network-info';
import TopPerformer from '../components/top-performer';
import BottomPerformer from '../components/bottom-performer';
import { getPartnerAccounts } from '../service/ash_mlm'
import Partner_Accounts from '../_mock/partner_accounts';

const HomePage = () => {
  const [partnerAccount, setPartnerAccount] = useState({});

  useEffect(() => {
    setPartnerAccount(() => Partner_Accounts);
    // fetchPartnerAccounts();
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
      <Payouts payouts={partnerAccount.payout} />
      <NetworkInfo network={getNewtworkInfo}/>
      <TopPerformer performer={partnerAccount.top_performers}/>
      <BottomPerformer performer={partnerAccount.bottom_performers}/>
    </Container>
  )
}

export default HomePage