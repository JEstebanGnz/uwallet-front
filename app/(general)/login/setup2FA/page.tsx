import {
  Alert,
  Button,
  Typography,
} from '@mui/material';
import { cookies } from 'next/headers';
import { CopyToClipboard } from '@/app/lib/components/CopyToClipboard';

export const setup2FA = () => {
  const cookieStore = cookies();
  const google2FASecretKey = cookieStore.get('google_2FA_secret_key')?.value;

  return (
    <>

      <Alert color="warning">
      Para proteger tus datos y tu dinero, esta aplicación cuenta con protección mediate doble factor de autenticación (2FA).
      </Alert>
        
      <Typography variant="h6" sx={{ my: 1, textAlign: 'center' }}>
        Ingresa la siguiente llave secreta en tu Google Authenticator.
      </Typography>

      <div style={{ textAlign: 'center' }}>
        <CopyToClipboard text={google2FASecretKey} />
        <Button
          href="/login/validateOTP"
          variant="contained"
          fullWidth
          color="secondary"
        >
          <Typography sx={{ ml: 1 }}>Continuar</Typography>
        </Button>
      </div>
    </>
  );
};

export default setup2FA;
