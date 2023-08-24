import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import {
  getAccountsKyc,
  getAccountsOnboarding,
  postAccountsKyc,
  putAccountsKyc,
} from "../../../service/ash_mlm";
import { panNumberValidation } from "../../../utils/validations";
import { replace } from "lodash";

const Pan = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [panNumberError, setPanNumberError] = useState("");

  const [kycData, setKycData] = useState({
    name: "",
    id_proof_no: "",
    id_proof_type: "pan",
  });

  useEffect(() => {
    const kycId = searchParams.get('id');
    if(kycId) {
      _fetchKycData();
    }
  }, [])

  const _fetchKycData = async () => {
    try {
      const kyc = await getAccountsKyc();
      console.log("[nominee]::[_fetchKycData]::", kyc);
      setKycData({...kyc})
    } catch (error) {
      console.error("[nominee]::[_fetchKycData]::err", error);
    }
  };

  const _createKyc = async () => {
    console.log(`[_createKyc]:: Enter ${kycData}`);
    const kycPayload = { kyc: kycData };
    console.log(`[_createKyc]:: ${kycPayload}`);

    const data = await postAccountsKyc(kycPayload);
    console.log(`[_createKyc]::[response]:: ${data}`);

    await _fetchOnboardingStatus();
  };

  const updateKyc = async () => {
    try {
      console.log("[_updateKyc]:: Enter", kycData);
      const kycPayload = { kyc: kycData };
      console.log("[_updateKyc]::", kycPayload);

      const data = await putAccountsKyc(kycPayload, kycData.id);
      console.log("[_updateKyc]::[response]::", data);

      navigate('/kyc', {replace: true});
    } catch (error) {
      console.error("[_updateKyc]::err", error);
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

  const _panNumberValidation = (value) => {
    console.log(`[PanUpload]::[_panNumberValidation]:: Enter ${value}`);
    setPanNumberError(() => panNumberValidation(value));
  };

  const handlePanSubmit = async () => {
    console.log(kycData);
    if(kycData && kycData.id) {
      console.log('Update');
      updateKyc();
      return
    }
    await _createKyc();
  };

  const handleKycDetails = (event) => {
    if (event.target.name === "id_proof_no") {
      _panNumberValidation(event.target.value.toUpperCase());
    }

    setKycData({
      ...kycData,
      [event.target.name]:
        event.target.name === "id_proof_no"
          ? event.target.value.toUpperCase()
          : event.target.value,
    });
  };

  const buttonDisabled = () => {
    if (panNumberError) return true;
    if (kycData && !kycData.name) return true;
    if (kycData && !kycData.id_proof_no) return true;
    return false;
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
            Pan details
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ padding: "16px", marginTop: "32px" }}>
        <TextField
          name="name"
          label="Enter pan name"
          value={kycData.name}
          variant="outlined"
          fullWidth
          onChange={handleKycDetails}
        />
        <Grid sx={{ mt: 2 }}></Grid>
        <TextField
          name="id_proof_no"
          label="Enter pan number"
          value={kycData.id_proof_no}
          variant="outlined"
          fullWidth
          error={panNumberError.length > 0}
          helperText={panNumberError}
          onChange={handleKycDetails}
        />
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
          onClick={handlePanSubmit}
          disabled={buttonDisabled()}
        >
          {kycData && kycData.id ? 'Update' : 'Continue'}
        </Button>
      </Container>
    </div>
  );
};

export default Pan;
