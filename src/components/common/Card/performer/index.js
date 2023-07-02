import React from 'react';
import {Box, Avatar} from '@mui/material'
import './index.css';

const Performer = ({ performer, isSecondary}) => {
  const {name, earnings, level} = performer
  return (
    <Box
      className={`k-flex k-aic performer__box ${isSecondary ? 'performer__box--secondary': 'performer__box--primary'}`}
    >
      <div className="k-ml16 k-mt16 k-mb16">
        <Avatar src="assets/illustrations/Ellipse 47.svg"
          alt="Profile Photo"
          className="profile-photo"
        />
      </div>
      <div className="k-flex k-fdc k-ml16">
        <div className="b-name">{name}</div>
        <div className="k-flex k-fdr k-jcsb" style={{ width: "150px" }}>
          <div className="b-name k-fs15">{earnings}</div>
          <div className="b-name k-fs15">{level}</div>
        </div>
      </div>
    </Box>
  )
}

export default Performer;