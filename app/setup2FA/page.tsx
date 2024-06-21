import { Box, Button, Paper, Typography } from '@mui/material';
import { cookies, headers } from 'next/headers';
import Link from 'next/link';

export const setup2FA = () => {
  const cookieStore = cookies();
  const setupSecretKey = cookieStore.get('setup_secret_key');

  return (
    <>
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

          <Typography variant="h5" sx={{mb:5}}>  <strong> {setupSecretKey?.value}</strong></Typography>

          <Link
            href="/validate2FA"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <Button variant="contained" size="large">
              Continuar
            </Button>
          </Link>
        </Paper>
      </Box>
      {/* <div style={{ margin: 'auto', padding: '10px' }}>
        <h2>
          {' '}
          Hola, por favor ingresa el siguiente valor en tu Google Authenticator
        </h2>
        <strong> {setupSecretKey?.value}</strong>
        <br></br>
        <Link href="/validate2FA"> Click aquí para continuar </Link>
      </div> */}
    </>
  );
};

export default setup2FA;
