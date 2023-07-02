import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../../components/iconify';
import { isValidEmail, isValidMobileNumber, isValidPassword, isValidUserName } from '../../../../utils/validations';
import { AuthContext } from '../../../../context/authentication/authContextProvider';

import './index.css';

export default function LoginForm() {
  const route = useLocation();
  const { login } = useContext(AuthContext)
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(route.search);
    setMobile(() => searchParams.get('mobile_number'));
  }, [])
  
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setOtpError('');
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login validation here
    if(!validate()) return
    const response = await login({
      mobile_number: mobile,
      otp: otp
    })

    if(response && response.message) {
      setOtpError(response.message);
    }
  };

  const validate = () => {
    let isValid = true;

    if(mobile.length !== 10) {
      setMobileError('Mobile number should be 10 digit long.');
      isValid = false;
    } else if(!isValidMobileNumber(mobile)) {
      setMobileError('Mobile number is not valid.');
      isValid = false;
    }

    if (otp.length !== 6) {
      setOtpError('Enter valid otp');
      isValid = false;
    } else if(isValid) {
      setMobileError('');
      setOtpError('');
    }

    return isValid;
  };

  return (
    <>
      <Stack spacing={3} sx={{ mb: 5}}>
        <TextField
          disabled
          type="tel"
          name="mobile_number"
          value={mobile}
          error={mobileError ? true : false}
          helperText={mobileError ? mobileError : ''}
          pattern="[0-9]{10}"
          size='small'
        />
        <TextField
          name="otp"
          placeholder="Enter 6 digit OTP"
          value={otp}
          onChange={handleOtpChange}
          error={otpError ? true : false}
          helperText={otpError ? otpError : ''}
          type='number'
          pattern="[0-9]{6}"
          size='small'
          inputMode="numeric"
        />
      </Stack>
      <Stack className="k-flex k-jcc k-fdr">
        <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleSubmit} className="login__loading--button">
          Submit OTP
        </LoadingButton>
      </Stack>
    </>
  );
}
