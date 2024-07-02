import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { cookies, headers } from 'next/headers';
import Link from 'next/link';
import { GeneralLayout } from '../layout/GeneralLayout';
import { CopyToClipboard } from '@/app/lib/components/CopyToClipboard';

export const setup2FA = () => {
  const cookieStore = cookies();
  const setupSecretKey = cookieStore.get('setup_secret_key');

  return (
    <GeneralLayout title="Por favor, ingresa el siguiente valor en tu Google Authenticator">
      <div style={{ textAlign: 'center' }}>
        <CopyToClipboard text={'V349KJG83O4KF83J'} />
        <Alert color="secondary">
          {' '}
          Puedes copiar el valor al dar clic al ícono al lado del código{' '}
        </Alert>
        <Button
          href="/auth/validate2FA"
          variant="contained"
          fullWidth
          color="secondary"
        >
          <Typography sx={{ ml: 1 }}>Continuar</Typography>
        </Button>
      </div>

      {/* 
      <Box
        sx={{
          height: '100vh', // Ensure the container spans the full viewport height
          display: 'flex',
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
        }}
      >
        <Paper
          sx={{ width: '90%', px: '30px', py: '40px', textAlign: 'center' }}
          elevation={0}
        >
          <Typography variant="h5" sx={{mb:5}}>
            Por favor ingresa el siguiente valor en tu Google Authenticator
          </Typography>

          <Typography variant="h5" sx={{mb:5}}>  <strong> {setupSecretKey?.value} </strong></Typography>


        </Paper>
      </Box> */}
    </GeneralLayout>
  );
};

export default setup2FA;
