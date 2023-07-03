import Typography from '@mui/material/Typography'
import Container from "@mui/material/Container";
import React from 'react'
import CustomAccordian from '../accordian/accordian.js';

const Data = [
  {
    name: "Himanshu",
    number: "9323238321",
    earning: "Earning 326600 | Last payout",
    level: "Network size 32 | Level 2",
  },
  {
    name: "rabindra",
    number: "9323238321",
    earning: "Earning 326500 | Last payout",
    level: "Network size 132 | Level 2",
  },
  {
    name: "sneha",
    number: "9323238321",
    earning: "Earning 326300 | Last payout",
    level: "Network size 332 | Level 2",
  },
  {
    name: "kusum",
    number: "9323238321",
    earning: "Earning 326200 | Last payout",
    level: "Network size 3322 | Level 2",
  },
];

const NetworksByLevel = ({networks}) => {
  return (
    <Container>
      <Typography className="k-pt32 k-ml16 k-mb16 theme__typography--primary theme__palette--primary theme__fw--primary">
        My Network
      </Typography>
      <CustomAccordian data={networks}/>
    </Container>
  )
}

export default NetworksByLevel