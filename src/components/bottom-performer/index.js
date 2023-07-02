import { Typography } from "@mui/material";
import Performer from "../common/Card/performer";
import "./index.css";

const mystyle = {
  color: "var(--theme-font-color-primary)",
  height: "84px",
  backgroundColor: 'var(--theme-background-tertiary)',
  borderRadius: "20px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};

const BottomPerformer = ({ title, performer }) => {
  return (
    <div className="k-pl16 k-pr16 k-mt32">
      <Typography className="k-mb16 theme__typography--primary theme__palette--primary theme__fw--primary">Bottom performers</Typography>
      {performer && performer.map((performer, index) => <Performer key={index} performer={performer} isSecondary={true}/>)}
    </div>
  );
};

export default BottomPerformer;
