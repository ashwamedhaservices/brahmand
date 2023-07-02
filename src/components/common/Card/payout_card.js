import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './payout_card.css';

const PayoutCard = ({ payout }) => {
  return (
    <Card variant="outlined" className="payout_card k-flex k-jcc k-aic k-fdc k-bs--primary k-box-shadow--primary">
      <Typography>{payout.amount}</Typography>
      <Typography>{payout.level}</Typography>
      <Typography>{payout.frequency}</Typography>
    </Card>
  )
}

export default PayoutCard