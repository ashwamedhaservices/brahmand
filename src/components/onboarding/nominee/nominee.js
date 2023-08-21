import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import { useNavigate } from "react-router-dom";
import { getAccountsKyc, getAccountsOnboarding, postAccountsKycedNominees } from '../../../service/ash_mlm';

const Nominee = () => {
  const navigate = useNavigate();
  const [kycId, setKycId] = useState(null);
  const [isKyced, setIsKyced] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [nomineeData, setNomineeData] = useState({
    name: '',
    dob: '',
    relationship: '',
  });

  useEffect(() => {
    fetchKycData();
  }, []);

  const fetchKycData = async () => {
    try {
      const kyc = await getAccountsKyc();
      console.log("[nominee]::[_fetchKycData]::", kyc);
      setKycId(kyc.id);
    } catch (error) {
      console.error("[nominee]::[_fetchKycData]::err", error);
    }
  };;

  const createNominee = async () => {
    try {
      console.log("[nominee]::[createNominee]:: Enter", nomineeData);
      const nomineePayload = { nominee: nomineeData };
      console.log("[nominee]::[createNominee]:: Enter", nomineePayload);

      const data = await postAccountsKycedNominees(nomineePayload, kycId);
      console.log("[nominee]::[createNominee]::[response]::", data);

      await _fetchOnboardingStatus();
    } catch (error) {
      console.error("[nominee]::[createNominee]::err", error);
    }
  };

  const _fetchOnboardingStatus = async () => {
    try {
      console.log("[NomineePage]::[_fetchOnboardingStatus]");
      const onboarding = await getAccountsOnboarding();

      const flow = onboarding["flow"];

      const pages = flow.filter((page) => !page["status"]);
      console.log(pages);

      if (onboarding["status"]) { // This condition is changed
        const path = `/kyc`;
        console.log(path);
        navigate(path, { replace: true });
      }

      console.log(`[NomineePage]::[_fetchOnboardingStatus]`, pages, onboarding);
    } catch (err) {
      console.log(`[NomineePage]::[_fetchOnboardingStatus]::err ${err}`);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNomineeData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await createNominee();
    if (!isKyced) {
      // history.push(profile); // Replace with your actual profile route
    }
  };

  const handleAddressSubmit = async () => {
    console.log(nomineeData);
    await createNominee();
  }

  const buttonDisabled = () => {
    return (
      nomineeData &&
      (!nomineeData.name ||
        !nomineeData.dob ||
        !nomineeData.relationship )
    );
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{
          backgroundColor: "var(--theme-background-secondary)",
          elevation: 0,
        }}
      >
        <Toolbar>
          <IconButton onClick={() => navigate("/kyc", { replace: true })}>
            <ArrowBackSharpIcon
              color="primary"
              style={{ color: "var(--theme-primary-navbar-color)" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            color="primary"
            style={{ color: "var(--theme-primary-navbar-color)" }}
          >
            Nominee Details
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ padding: "16px", marginTop: "32px" }}>
        <TextField
          label="Enter nominee name"
          type="text"
          name="name"
          value={nomineeData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Select Date of birth"
          name="dob"
          type="date"
          value={nomineeData.dob}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Relationship with nominee"
          name="relationship"
          select
          value={nomineeData.relationship}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="self">Self</MenuItem>
          <MenuItem value="spouse">Spouse</MenuItem>
          <MenuItem value="child">Child</MenuItem>
          <MenuItem value="parent">Parent</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>

        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: "16px",
            color: `${
              buttonDisabled() ? "white" : "var(--theme-background-tertiary)"
            }`,
            backgroundColor: `${
              buttonDisabled()
                ? "var(--theme-background-tertiary)"
                : "var(--theme-primary-color)"
            }`,
          }}
          onClick={handleAddressSubmit}
          disabled={buttonDisabled()}
        >
          Continue
        </Button>
      </Container>
    </div>
  );
};

export default Nominee;
