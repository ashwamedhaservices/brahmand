import { Button } from "@mui/material";
import { downloadNetworkReportPdf } from "../../service/ash_mlm";




const NetworkReport = ({ }) => {
  const handleNetworkReportPdfDownloadClick = async () => {
    const response = await downloadNetworkReportPdf();
    // create file link in browser's memory
    const href = URL.createObjectURL(response.data);

    // create "a" HTML element with href to file & click
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', `network_report_${new Date().toLocaleDateString()}.pdf`); //or any other extension
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }

  return (<div style={{ width: '100%', padding: '16px' }}>
    <Button
      variant="contained"
      color="primary"
      className="theme__palette--primary"
      style={{ backgroundColor: 'var(--theme-background-tertiary)', width: '100%' }}
      onClick={() => handleNetworkReportPdfDownloadClick()}
    >
      Download Network Report
    </Button>
  </div>)
}

export default NetworkReport;