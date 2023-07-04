import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from "react";
import CustomAccordian from "../accordian/accordian.js";

const NetworksByLevel = ({ networks }) => {
  return (
    <Container>
      <Typography className="k-pt32 k-ml16 k-mb16 theme__typography--primary theme__palette--primary theme__fw--primary">
        My Network
      </Typography>
      {networks && networks.length > 0 ? (
        <CustomAccordian data={networks} />
      ) : (
        <Typography className="k-pl16 theme__typography--secondary theme__palette--tertiary theme__fw--seconary">
          No data
        </Typography>
      )}
    </Container>
  );
};

export default NetworksByLevel;
