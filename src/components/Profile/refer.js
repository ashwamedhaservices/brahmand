import { Avatar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { storageGetItem } from "../../service/ash_mlm";
import "./ProfilePage.css";

const copyLink = () => {
  // Logic to copy the refer link to clipboard
  // You can use the "navigator.clipboard.writeText" method or a third-party library like "react-copy-to-clipboard"
  // Example: navigator.clipboard.writeText(referLink);
};

const shareLink = () => {
  // Logic to share the refer link
  // You can use the Web Share API or any other method for sharing
  // Example: navigator.share({ title: 'Refer a Friend', text: 'Check out this referral link', url: referLink });
};

function ReferFriend({referralUrl}) {
  
  return (
    <div className="k-pb32">
      <Typography className="k-ml24 k-mt24 k-mb16 theme__typography--secondary theme__fw--primary theme__palette--primary">Refer a friend</Typography>
      <div className="k-flex k-aic k-jcsb">
        <div className="k-flex k-fdc k-ml24 k-pr4">
          <Avatar
            className="refer__img--container"
            src="/assets/theme/common/light/copy-link.svg"
            alt="copy link"
            width="18px"
            height="18px"
          />
        </div>
        <div className="dottet"></div>
        <Typography class="theme__typography--secondary theme__palette--quaternary theme__fw--primary referral__url">{referralUrl}</Typography>
        <div className="dottet"></div>
        <Avatar
          className="k-ml8 k-mr24 refer__img--container"
          src="/assets/theme/common/light/share.svg"
          alt="share"
          width="18px"
          height="18px"
        />
      </div>

      <div className="k-flex k-aic k-jcsb k-ml8 k-mr8">
        <Typography className="k-mt8 k-ml8 theme__typography--secondary theme__fw--primary theme__palette--primary">Copy Link</Typography>
        <Typography className="k-mt8 k-mr8 theme__typography--secondary theme__fw--primary theme__palette--primary">Share Via</Typography>
      </div>
    </div>
  );
}

export default ReferFriend;
