import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import { Typography } from "@mui/material";

const mystyle = {
  color: "var(--theme-font-color-secondary)",
  // height: '84px',
  backgroundColor: "var(--theme-background-quaternary)",
  borderRadius: "12px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  marginTop: "16px",
};

function CustomAccordian({ data }) {
  return (
    <>
      {data && data.map((item) => (
        <div className="k-ml8 k-mr8" key={item.fname + item.mobile_number
        }>
          <Accordion style={mystyle}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="k-flex k-fdr k-jcsb" style={{ width: "100%" }}>
                <div>{item.fname}</div>
                <div className="k-mr32">{item.mobile_number}</div>
              </div>
            </AccordionSummary>
            <AccordionDetails className="theme__typography--secondary theme__palette--tertiary">
              {/* <div className="k-flex">
                <div>Newtwork size: {item.newtwork_size}</div>
                <div className="k-pl4 k-pr4">|</div>
                <div className="">Level {item.level}</div>
              </div>
              <div className="k-flex">
                <div>Earnings {item.earning}</div>
                <div className="k-pl4 k-pr4">|</div>
                <div className="">Last payout {item.earning}</div>
              </div> */}
              <Typography>No data to show</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
}

export default CustomAccordian;
