import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, Accordion,  AccordionDetails, AccordionSummary } from "@mui/material";

const mystyle = {
  color: "var(--theme-font-color-secondary)",
  // height: '84px',
  backgroundColor: "var(--theme-background-quaternary)",
  borderRadius: "12px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  marginTop: "16px",
};

function CustomAccordian({ data, handleUserClick }) {
  return (
    <>
      {data && data.map((item) => (
        <div className="k-ml8 k-mr8" key={item.fname + item.mobile_number
        }>
          <Accordion style={{...mystyle, opacity: !data.isSubscribed ? .3 : 1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="k-flex k-fdr k-jcsb" style={{ width: "100%" }}>
                <Typography onClick={() => handleUserClick(item)}>{item.name}</Typography>
                <Typography className="k-mr32">{item.mobile}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className="theme__typography--secondary theme__palette--tertiary">
              <div className="k-flex">
                <Typography>Newtwork size {item.network_width}</Typography>
                {/* <Typography className="k-pl4 k-pr4">|</Typography>
                <Typography className="">Level {item.level}</Typography> */}
              </div>
              <div className="k-flex">
                <Typography>Earnings {item.earnings}</Typography>
                <Typography className="k-pl4 k-pr4">|</Typography>
                <Typography className="">Last payout {item.last_payout}</Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
}

export default CustomAccordian;
