import React from "react";
import PayoutCard from "../common/Card/payout_card";
import Container from "@mui/system/Container";
import { Typography } from "@mui/material";

const PAYOUT_DATA = [
  {
    amount: "5.4 Cr",
    level: "level 1",
    type: "Weekly payout",
  },
  {
    amount: "3 Cr",
    level: "level 2",
    type: "Weekly payout",
  },
  {
    amount: "3 Cr",
    level: "level 1",
    type: "Weekly payout",
  },
];
const Payouts = () => {
  return (
    <Container>
      <Typography className="k-pt32 k-ml16 k-mb16 theme__typography--primary theme__palette--primary theme__fw--primary">
        Payouts
      </Typography>
      <div
        className="scrollbar__container k-flex k-fnw scrollbar"
      >
        {PAYOUT_DATA.map((payout, index) => (
          <PayoutCard payout={payout} key={index}/>
        ))}
      </div>
    </Container>
  );
};

export default Payouts;
