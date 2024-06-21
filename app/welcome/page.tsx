import { Box, Button, Paper, Typography } from '@mui/material';
import Link from 'next/link';

export const welcome = () => {
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
          elevation={10}
        >
          <Typography variant="h5" sx={{ mb: 5 }}>
            Bienvenido al <strong>Monedero Unibagué</strong> <br />
            <br />
            Una nueva forma de gestionar tu dinero dentro del campus
          </Typography>

          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <Button variant="contained" size="large">
              Comenzar
            </Button>
          </Link>
        </Paper>
      </Box>
    </>
  );
};

export default welcome;
