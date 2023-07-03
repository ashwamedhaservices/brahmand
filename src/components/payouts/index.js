import PayoutCard from "../common/Card/payout_card";
import { Typography, Container } from "@mui/material";

const Payouts = ({ payouts }) => {
  return (
    <Container>
      <Typography className="k-pt32 k-ml16 k-mb16 theme__typography--primary theme__palette--primary theme__fw--primary">
        Payouts
      </Typography>
      {payouts && payouts.length > 0 ? (
        <Container className="scrollbar__container k-flex k-fnw scrollbar">
          {payouts &&
            payouts.map((payout, index) => (
              <PayoutCard payout={payout} key={index} />
            ))}
        </Container>
      ) : (
        <Typography className="k-pl16 theme__typography--secondary theme__palette--tertiary theme__fw--seconary">
          No data
        </Typography>
      )}
    </Container>
  );
};

export default Payouts;
