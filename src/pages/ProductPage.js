import { Button, Container, Accordion, AccordionSummary, Typography, AccordionDetails, } from "@mui/material";
import React, { useEffect, useState } from "react";
import Profile from '../components/Profile/profile-details';
// import { ProductSubscriptionContext, UserContext } from "../context";
import { getPartnerAccounts } from "../service/ash_mlm";
import { createFullName } from "../utils/default";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedIcon from '@mui/icons-material/Verified';
import { useNavigate } from "react-router-dom";


const productButtonStyle = {
  color: "var(--theme-font-color-secondary)",
  backgroundColor: 'var(--theme-background-quaternary)',
  borderRadius: "12px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  padding: "10px",
  width: '90%'
}

const ProductPage = () => {

  const [currentUser, setCurrentUser] = useState({});
  const [subscriptions, setSubscriptions] = useState([]);
  const navigate = useNavigate()

  const fetchUserAndSubscription = async () => {
    try {
      console.log("fetch data being called at product page")
      const accountsData = await getPartnerAccounts();
      console.log("accountsData in product page", accountsData);
      if (accountsData == null) {
        throw new Error("accounts data is null");
      }

      setCurrentUser(accountsData.user);
      setSubscriptions(accountsData.subscribed_products);
    } catch (error) {
      console.log("error in product page", error);
    }
  }

  const subscriptionClickHandler = (category) =>{
    navigate(`/products/referrals/${category}`)
  }

  useEffect(() => fetchUserAndSubscription, []);

  console.log("user from context is", currentUser, subscriptions);
  const fullName = currentUser ? createFullName(currentUser.fname, currentUser.mname, currentUser.lname) : "Invalid Name";
  return (
    <Container>
      <Profile name={fullName} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button variant="contained" href='/user-profile' style={{ ...productButtonStyle }}>App</Button>
        {subscriptions.map((subscription, index) => (
          <React.Fragment key={index}>
            <br />
            <Accordion style={{ ...productButtonStyle }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "var(--theme-font-color-secondary)" }} />}>
                <Typography className="k-flex k-aic" onClick={() => subscriptionClickHandler(subscription.category)}>
                  {subscription.category.toUpperCase()}
                <VerifiedIcon sx={{ height: '16px' }} />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Name: {subscription.name}</Typography>
                <Typography>UserCategory: {subscription.user_category}</Typography>
                <Typography>Referral Count: {subscription.referral_count}</Typography>
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        ))}
      </div>
    </Container>

  )
}

export default ProductPage;