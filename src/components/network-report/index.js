import { Button } from "@mui/material";
import { downloadNetworkReportPdf } from "../../service/ash_mlm";




const NetworkReport = ({ }) => {
  return (<div style={{ width: '100%', padding: '16px' }}>
    <Button
      variant="contained"
      color="primary"
      className="theme__palette--primary"
      style={{ backgroundColor: 'var(--theme-background-tertiary)', width: '100%' }}
      onClick={() => downloadNetworkReportPdf()}
    >
      Download Network Report
    </Button>
  </div>)
}

export default NetworkReport;