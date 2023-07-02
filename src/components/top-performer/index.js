import "./index.css";
import { Typography } from "@mui/material";
import Performer from "../common/Card/performer";

const TopPerformer = ({ title, performer }) => {
  return (
    <div className="k-pl16 k-pr16">
      <Typography className="k-mb16 theme__typography--primary theme__palette--primary theme__fw--primary">Top performers</Typography>
      {performer && performer.map((performer, index) => <Performer key={index} performer={performer} />)}
    </div>
  );
};

export default TopPerformer;
