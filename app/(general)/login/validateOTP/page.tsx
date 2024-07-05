import DialogPage from '@/app/lib/components/DialogPage';
import InputForm from '@/app/lib/components/InputForm';
import { cookies } from 'next/headers';
import { Typography } from '@mui/material';

export const validateOTP = () => {
  const cookieStore = cookies();
  const userLoginToken = cookieStore.get('user_login_token')?.value;
  // String(token_2fa?.value)

  return (
    <>
      <Typography variant="h5" sx={{ mb: 1, textAlign: 'center' }}>
        Ingresa el código de 6 dígitos mostrado en tu Google Authenticator
      </Typography>

      <InputForm userLoginToken={String(userLoginToken)}></InputForm>
      <DialogPage />
    </>
  );
};

export default validateOTP;
