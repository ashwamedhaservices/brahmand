import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  TextField,
  Button,
  MenuItem,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import {
  getAccountsKyc,
  getAccountsOnboarding,
  postAccountsKycedBank,
} from "../../../service/ash_mlm";
import { accountNoValidation, ifscValidation } from "../../../utils/validations";

const Bank = () => {
  const navigate = useNavigate();
  const [kycId, setKycId] = useState(null);
  const [bankData, setBankData] = useState({
    account_number: "",
    account_type: "",
    ifsc: "",
  });
  const [accountNoError, setAccountNoError] = useState("");
  const [ifscError, setIfscError] = useState("");

  useEffect(() => {
    fetchKycData();
  }, []);

  const fetchKycData = async () => {
    try {
      const kyc = await getAccountsKyc();
      console.log("[address]::[_fetchKycData]::", kyc);
      setKycId(kyc.id);
    } catch (error) {
      console.error("[address]::[_fetchKycData]::err", error);
    }
  };

  const createBank = async () => {
    try {
      console.log("[bank]::[createBank]:: Enter", bankData);
      const bankPayload = { bank_account: bankData };
      console.log("[bank]::[createBank]::", bankPayload);

      const data = await postAccountsKycedBank(bankPayload, kycId);
      console.log("[bank]::[createBank]::[response]::", data);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBankData((prevData) => ({ ...prevData, [name]: value }));
  };

  const _accountNoValidation = (value) => {
    const error = accountNoValidation(value);
    setAccountNoError(error);
  };

  const _ifscValidation = (value) => {
    const error = ifscValidation(value);
    setIfscError(error);
  };

  const handleBankSubmit = async () => {
    console.log(bankData);
    _accountNoValidation(bankData.account_number);
    if (accountNoError) {
      return;
    }
    _ifscValidation(bankData.ifsc);
    if (ifscError) {
      return;
    }

    await createBank();
  }

  const buttonDisabled = () => {
    return (
      bankData &&
      (!bankData.account_number || !bankData.account_type || !bankData.ifsc)
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
            Bank details
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ padding: "16px", marginTop: "32px" }}>
        <TextField
          label="Enter account number"
          type="number"
          name="account_number"
          value={bankData.account_number}
          onChange={handleInputChange}
          error={Boolean(accountNoError)}
          helperText={accountNoError}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Account type"
          name="account_type"
          select
          value={bankData.account_type}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="savings">Savings</MenuItem>
          <MenuItem value="current">Current</MenuItem>
        </TextField>

        <TextField
          label="Enter IFSC code"
          type="text"
          name="ifsc"
          value={bankData.ifsc}
          onChange={handleInputChange}
          error={Boolean(ifscError)}
          helperText={ifscError}
          fullWidth
          margin="normal"
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
          onClick={handleBankSubmit}
          disabled={buttonDisabled()}
        >
          Continue
        </Button>
      </Container>
    </div>
  );
};

export default Bank;
