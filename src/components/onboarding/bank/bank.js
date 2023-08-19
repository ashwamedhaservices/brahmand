import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { getAccountsKyc, getAccountsOnboarding, postAccountsKycedBank } from '../../../service/ash_mlm';

const Bank = () => {
  // const history = useHistory();
  const [kycId, setKycId] = useState(null);
  const [isKyced, setIsKyced] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [bankData, setBankData] = useState({
    account_number: '',
    account_type: '',
    ifsc: '',
  });
  const [accountNoError, setAccountNoError] = useState('');
  const [ifscError, setIfscError] = useState('');

  useEffect(() => {
    fetchKycData();
  }, []);

  const fetchKycData = async () => {
    try {
      const kyc = await getAccountsKyc();
      setKycId(kyc.id);
    } catch (error) {
      console.error(error);
    }
  };

  const createBank = async () => {
    try {
      const bankPayload = { bank_account: bankData };
      const data = await postAccountsKycedBank(bankPayload, kycId);
      await fetchOnboardingStatus();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOnboardingStatus = async () => {
    try {
      const onboarding = await getAccountsOnboarding();
      const { status, flow } = onboarding;
      const pages = flow.filter(page => !page.status);
      setIsKyced(status);
      setCurrentPage(pages.length > 0 ? pages[0].page : '');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBankData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    accountNoValidation(bankData.account_number);
    if (accountNoError) {
      return;
    }
    ifscValidation(bankData.ifsc);
    if (ifscError) {
      return;
    }
    await createBank();
    if (!isKyced) {
      // history.push(currentPage);
    }
  };

  const accountNoValidation = value => {
    const error = accountNoValidation(value);
    setAccountNoError(error);
  };

  const ifscValidation = value => {
    const error = ifscValidation(value);
    setIfscError(error);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter account number"
          type="text"
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
          type="submit"
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default Bank;