import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";

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
        <div className="k-ml8 k-mr8" key={item.name + item.number}>
          <Accordion style={mystyle}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="k-flex k-fdr k-jcsb" style={{ width: "100%" }}>
                <div>{item.name}</div>
                <div className="k-mr32">{item.number}</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="k-flex k-fdc">
                <div>{item.level}</div>
                <div className="k-mt8">{item.earning}</div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
}

export default CustomAccordian;
