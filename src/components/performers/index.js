import { Typography } from "@mui/material";
import Performer from "../common/Card/performer";

const Performers = ({ title, performer, isSecondary }) => {
  return (
    <div className="k-pl16 k-pr16 k-pb32">
      <Typography className="k-mb16 theme__typography--primary theme__palette--primary theme__fw--primary">
        {title}
      </Typography>
      {performer && performer.length ? (
        performer.map((performer, index) => (
          <Performer key={index} performer={performer} isSecondary={isSecondary}/>
        ))
      ) : (
        <Typography className="theme__typography--secondary theme__palette--tertiary theme__fw--seconary">
          No data
        </Typography>
      )}
    </div>
  );
};

export default Performers;
