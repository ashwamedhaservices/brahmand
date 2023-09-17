import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, Accordion,  AccordionDetails, AccordionSummary } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
const mystyle = (subscribed) => ({
  color: subscribed === true ? "var(--theme-font-color-secondary)" : 'var(--theme-font-color-primary)',
  // height: '84px',
  backgroundColor: subscribed === true ? 'var(--theme-background-quaternary)' : 'var(--theme-background-tertiary)',
  borderRadius: "12px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  marginTop: "16px",
});

function CustomAccordian({ data, handleUserClick }) {
  return (
    <>
      {data && data.map((item) => (
        <div className="k-ml8 k-mr8" key={item.fname + item.mobile_number
        }>
          <Accordion style={{...mystyle(item.subscribed)}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: item.subscribed === true ? "var(--theme-font-color-secondary)" : 'var(--theme-font-color-primary)' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="k-flex k-fdr k-jcsb" style={{ width: "100%" }}>
                <Typography onClick={() => handleUserClick(item)} className="k-flex k-aic">{item.name} {item.subscribed ? <VerifiedIcon sx={{ height: '16px'}}/> : <GppMaybeIcon sx={{ height: '16px'}} />}</Typography>
                <Typography className="k-mr32">{item.mobile}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={`theme__typography--secondary  ${item.subscribed ? 'theme__palette--tertiary' : 'theme__palette--primary'}`}>
              <div className="k-flex">
                <Typography className="k-flex k-aic">{item.subscribed ? <VerifiedIcon sx={{ height: '16px'}}/> : <GppMaybeIcon sx={{ height: '16px'}} />} {item.subscribed ? 'Subscribed' : 'Not subscribed'}</Typography>
              </div>
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
