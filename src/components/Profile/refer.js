import { Avatar } from "@mui/material";
import React from "react";
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

function ReferFriend() {
  const getCopyLinkIcon = () => `/assets/theme/common/light/copy-link.svg`;
  const getShareIcon = () => `/assets/theme/common/light/share.svg`;
  return (
    <div className="k-pb32">
      <div className="k-ml24 k-mt24 k-mb16">Refer a friend</div>
      <div className="k-flex k-aic k-jcsb">
        <div className="k-flex k-fdc k-ml24">
          <Avatar
            className="refer__img--container"
            src="/assets/theme/common/light/copy-link.svg"
            alt="copy link"
            width="18px"
            height="18px"
          />
        </div>
        <div className="dottet"></div>
        <div>referal link</div>
        <div className="dottet"></div>
        <Avatar
          className="k-ml8 k-mr24 refer__img--container"
          src="/assets/theme/common/light/share.svg"
          alt="share"
          imgProps="hey men"
          width="18px"
          height="18px"
        />
      </div>

      <div className="k-flex k-aic k-jcsb k-ml8 k-mr8">
        <div className="title-head k-mt8 k-ml8 no-wrap">Copy Link</div>
        <div className="title-head no-wrap k-mt8 k-mr8">Share Via</div>
      </div>
    </div>
  );
}

export default ReferFriend;
