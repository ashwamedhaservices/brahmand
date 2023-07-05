import { useState } from "react";
import { Alert, Avatar, Snackbar, Typography } from "@mui/material";
import "./ProfilePage.css";

function ReferFriend({ referralUrl }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const copyLink = () => {
    // Logic to copy the refer link to clipboard
    // You can use the "navigator.clipboard.writeText" method or a third-party library like "react-copy-to-clipboard"
    try {
      if(isWebClipboardSupported) {
        navigator.clipboard.writeText(referralUrl);
        setOpen(() => true);
        setMessage(() => 'Copied referral link')
      }
    } catch(err) {
      console.log('Not able to copy!', err);
      setOpen(() => true);
      setMessage(() => 'Not able to copy referral link')
    }
  };
  
  const isWebShareSupported = () => {
    return navigator.share !== undefined;
  };

  const isWebClipboardSupported = () => {
    return navigator.clipboard !== undefined;
  }

  const shareLink = () => {
    // Logic to share the refer link
    // You can use the Web Share API or any other method for sharing
    try {
      const shareData = {
        title: 'Refer',
        text: 'Use this link!',
        url: referralUrl, // Replace with your actual app URL
      };
      if(isWebShareSupported) {
        navigator.share(shareData);
        setOpen(() => true);
        setMessage(() => 'Sharing referral link')
      } 
    } catch (err) {
      console.log('Not able to share!', err);
      setOpen(() => true);
      setMessage(() => 'Not able to share referral link')
    }
  };
  const handleClose = () => {
    setOpen(() => false);
    setMessage(() => '');
  }

  return (
    <>
      <div className="k-pb32">
        <Typography className="k-ml24 k-mt24 k-mb16 theme__typography--secondary theme__fw--primary theme__palette--primary">
          Refer a friend
        </Typography>
        <div className="k-flex k-aic k-jcsb">
          <div className="k-flex k-fdc k-ml24 k-pr4" onClick={copyLink}>
            <Avatar
              className="refer__img--container"
              src="/assets/theme/common/light/copy-link.svg"
              alt="copy link"
              width="18px"
              height="18px"
            />
          </div>
          <div className="dottet"></div>
          <Typography class="theme__typography--secondary theme__palette--quaternary theme__fw--primary referral__url">
            {referralUrl}
          </Typography>
          <div className="dottet"></div>
          <div onClick={shareLink}>
            <Avatar
              className="k-ml8 k-mr24 refer__img--container"
              src="/assets/theme/common/light/share.svg"
              alt="share"
              width="18px"
              height="18px"
            />
          </div>
        </div>

        <div className="k-flex k-aic k-jcsb k-ml8 k-mr8">
          <Typography className="k-mt8 k-ml8 theme__typography--secondary theme__fw--primary theme__palette--primary" onClick={copyLink}>
            Copy Link
          </Typography>
          <Typography className="k-mt8 k-mr8 theme__typography--secondary theme__fw--primary theme__palette--primary" onClick={shareLink}>
            Share Via
          </Typography>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default ReferFriend;
