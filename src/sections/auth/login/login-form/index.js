import { useContext, useEffect, useState } from 'react';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../../components/iconify';
import { isValidEmail, isValidMobileNumber, isValidPassword, isValidUserName } from '../../../../utils/validations';
import { AuthContext } from '../../../../context/authentication/authContextProvider';

// ----------------------------------------------------------------------
import './index.css';

export default function LoginForm() {

  const { login } = useContext(AuthContext)
  const [mobile] = useState('9087860631');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [otpError, setOtpError] = useState('');

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
    
    if (otp.length !== 6) {
      setOtpError('Enter valid otp');
      isValid = false;
    }

    else if(isValid) {
      setOtpError('')
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
          pattern="[0-9]{10}"
          size='small'
        />
        <TextField
          name="password"
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
