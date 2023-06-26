import React from 'react'
import { Container } from '@mui/material/node_modules/@mui/system';
import Payouts from '../components/payouts';
import NetworkInfo from '../components/network-info';
import TopPerformer from '../components/top-performer';
import BottomPerformer from '../components/bottom-performer';

const HomePage = () => {
  return (
    <Container>
      <Payouts />
      <NetworkInfo />
      <TopPerformer />
      <BottomPerformer />
    </Container>
  )
}

export default HomePage