import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import { Container } from '@mui/system';
import { getAccountsOnboarding, putAccountsKyc } from '../../../service/ash_mlm';

const AddressProofUpload = () => {
  const navigate = useNavigate();
  const [kycId, setKycId] = useState(null);
  const [isKyced, setIsKyced] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [addressProofData, setAddressProofData] = useState({
    address_proof_no: '',
    address_proof_type: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchKycData();
  }, []);

  const fetchKycData = async () => {
    try {
      const response = await axios.get('/api/getAccountsKyc');
      setKycId(response.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  const updateAddressProof = async () => {
    try {
      console.log("[address]::[_createKycAddress]:: Enter", addressProofData);
      const addressProofPayload = { kyc: addressProofData };

      const data = await putAccountsKyc(addressProofPayload, kycId);
      console.log("[address_proof_upload]::[updateAddressProof]::[response]::", data);

      await _fetchOnboardingStatus();
    } catch (error) {
      console.error(error);
    }
  };

  const _fetchOnboardingStatus = async () => {
    try {
      console.log("[ProfilePage]::[_fetchOnboardingStatus]");
      const onboarding = await getAccountsOnboarding();

      const flow = onboarding["flow"];

      const pages = flow.filter((page) => !page["status"]);
      console.log(pages);

      if (!onboarding["status"]) {
        const path = `/kyc/${pages && pages[0]["page"]}`;
        console.log(path);
        navigate(path, { replace: true });
      }

      console.log(`[ProfilePage]::[_fetchOnboardingStatus]`, pages, onboarding);
    } catch (err) {
      console.log(`[ProfilePage]::[_fetchOnboardingStatus]::err ${err}`);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setAddressProofData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleAddressSubmit = async event => {
   
  };

  const buttonDisabled = () => {
    return false
  }
  
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
            Address proof upload
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <TextField
          label="Enter address proof no"
          type="text"
          name="address_proof_no"
          value={addressProofData.address_proof_no}
          onChange={handleInputChange}
          error={Boolean(errors.address_proof_no)}
          helperText={errors.address_proof_no}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Address proof type"
          name="address_proof_type"
          select
          value={addressProofData.address_proof_type}
          onChange={handleInputChange}
          error={Boolean(errors.address_proof_type)}
          helperText={errors.address_proof_type}
          fullWidth
          margin="normal"
        >
          <option value="aadhaar">Aadhaar</option>
          <option value="passport">Passport</option>
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

export default AddressProofUpload;
