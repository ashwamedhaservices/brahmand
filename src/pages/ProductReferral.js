
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductReferrals } from '../service/ash_mlm';
import { Container, Accordion, AccordionSummary, Typography, AccordionDetails, } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedIcon from '@mui/icons-material/Verified';

const productButtonStyle = {
  color: "var(--theme-font-color-secondary)",
  backgroundColor: 'var(--theme-background-quaternary)',
  borderRadius: "12px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  padding: "10px",
  width: '90%'
}

const pageHeadingStyle = {
  fontSize: '21px',
  lineHeight: '32px',
  color: '#000000',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 600, 
  letterSpacing: '1.5px',
}


const ProductReferral = () => {
  const { category } = useParams();
  const [referrals, setReferrals] = useState([]);

  const fetchReferrals = async () => {
    const referralResponse = await getProductReferrals(10, category);
    console.log("the referral api response is ", referralResponse);
    setReferrals(referralResponse);
  }

  useEffect(() => {
    fetchReferrals();
  }, [])

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <br/>
      <Typography sx={pageHeadingStyle}>{category.toUpperCase()}</Typography>
        {referrals.map((referral, index) => (
          <React.Fragment key={index}>
            <br />
            <Accordion style={{ ...productButtonStyle }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "var(--theme-font-color-secondary)" }} />}>
                <Typography className="k-flex k-aic">
                  {referral.referred_user_name}
                  <VerifiedIcon sx={{ height: '16px' }} />
                </Typography>
              </AccordionSummary>
              {/* <AccordionDetails>
                <Typography>Name: {subscription.name}</Typography>
                <Typography>UserCategory: {subscription.user_category}</Typography>
                <Typography>Referral Count: {subscription.referral_count}</Typography>
              </AccordionDetails> */}
            </Accordion>
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
};

export default ProductReferral;