import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material/node_modules/@mui/system';
import Payouts from '../components/payouts';
import NetworkInfo from '../components/network-info';
import TopPerformer from '../components/top-performer';
import BottomPerformer from '../components/bottom-performer';
import { getPartnerAccounts } from '../service/ash_mlm'

const HomePage = () => {
  const [partnerAccount, setPartnerAccount] = useState({});

  useEffect(() => {
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
      <NetworkInfo network={getNewtworkInfo}/>
      <TopPerformer performer={partnerAccount.top}/>
      <BottomPerformer performer={partnerAccount.bottom}/>
    </Container>
  )
}

export default HomePage