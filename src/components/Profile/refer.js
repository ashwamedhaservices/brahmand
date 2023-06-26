import React from 'react';
import './ProfilePage.css'

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
    return (
        <>
            <div className='k-ml24 k-mt24 k-mb16'>Refer a friend</div>
            <div className='k-flex k-aic k-jcsb'>
                <div className='k-flex k-fdc k-ml24'>
                <img className='' src="assets/illustrations/Ellipse 47.svg" alt="Profile Photo" width="30px" />
                </div>
            <div className='dottet'></div>
            <img className='k-ml8 k-mr24' src="assets/illustrations/Ellipse 47.svg" alt="Profile Photo" width="30px" />
            </div>

            <div className='k-flex k-aic k-jcsb k-ml8 k-mr8'>
                <div className='title-head k-mt8 k-ml8 no-wrap'>Copy Link</div>
            <div className='title-head no-wrap k-mt8 k-mr8'>Share Via</div>
            </div>
        
        </>


    );
}


export default ReferFriend;
