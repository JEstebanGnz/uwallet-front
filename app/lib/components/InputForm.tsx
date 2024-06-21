'use client'
import { useState } from 'react';
import { HttpClient } from '../Http/HttpClient';
import { useRouter } from 'next/navigation';

interface Params{
    token_2fa: string
}

const InputForm = ({token_2fa}: Params) => {
  const [otp, setOtp] = useState('')

  const router = useRouter()

  const csrfCookieRequest= async () => {
    const http = HttpClient.getInstance();
    await http.get('/sanctum/csrf-cookie')

}

  const handleSubmit = async () => {
    await csrfCookieRequest();
     const data = {
        otp:otp,
        token_2fa: token_2fa
     }
      let http = HttpClient.getInstance();
      const response = await http.post('api/auth/2fa/validate', data);

      const accessToken = response.headers['auth-token'];
      http.setAuthToken(accessToken)
      //Save token to axiosInstance
      console.log(response);
      router.push('/auth')

  }
  const handleOtpValueChange = (newOtpValue: string) => {
      setOtp(newOtpValue)
  }
  return (
      <div style={{margin: 'auto', padding: '10px'}}>
          <h2> Ingresa a continuación los 6 digitos que encuentras en tu Google Authenticator </h2>
          <input type="text" name="otp" value={otp} onChange={(event) => handleOtpValueChange(event.target.value)}/>
          <br></br>
          <button onClick={handleSubmit}> Comprobar</button>
          <br></br>
      </div>
  );
};

export default InputForm;