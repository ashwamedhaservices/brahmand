import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { getAccountsKyc, getAccountsOnboarding, postAccountsKycedNominees } from '../../../service/ash_mlm';

const Nominee = () => {
  // const history = useHistory();
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
      setKycId(kyc.id);
    } catch (error) {
      console.error(error);
    }
  };

  const createNominee = async () => {
    try {
      const nomineePayload = { nominee: nomineeData };
      const data = await postAccountsKycedNominees(nomineePayload, kycId);
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
    setNomineeData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await createNominee();
    if (!isKyced) {
      // history.push(profile); // Replace with your actual profile route
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          label="RelationShip with nominee"
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
          type="submit"
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default Nominee;
