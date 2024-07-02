'use client';
import { useState } from 'react';
import { HttpClient } from '../Http/HttpClient';
import { useRouter } from 'next/navigation';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { GeneralLayout } from '@/app/auth/layout/GeneralLayout';
import { Button, Typography } from '@mui/material';

interface Params {
  token_2fa: string;
}

const InputForm = ({ token_2fa }: Params) => {
  const [otp, setOtp] = useState('');

  const router = useRouter();

  const csrfCookieRequest = async () => {
    const http = HttpClient.getInstance();
    await http.get('/sanctum/csrf-cookie');
  };

  const handleSubmit = async () => {
    await csrfCookieRequest();
    const data = {
      otp: otp,
      token_2fa: token_2fa,
    };
    let http = HttpClient.getInstance();
    const response = await http.post('api/auth/2fa/validate', data);

    const accessToken = response.headers['auth-token'];
    http.setAuthToken(accessToken);
    //Save token to axiosInstance
    console.log(response);
    router.push('/auth');
  };
  const handleOtpChange = (newOtpValue: string) => {
    setOtp(newOtpValue);
  };
  return (
    <>
      <MuiOtpInput
        value={otp}
        length={6}
        onChange={handleOtpChange}
        sx={{ my: '20px' }}
        gap={0.5}
      />
      <Button onClick={handleSubmit} variant="contained" fullWidth color='secondary'>
        <Typography sx={{ ml: 1 }}>Comprobar</Typography>
      </Button>{' '}
      </>
  );
};

export default InputForm;
