import { Grid, Link, TextField, Typography, Button } from '@mui/material';
import { GeneralLayout } from '../layout/GeneralLayout';
import { Google } from '@mui/icons-material';

export const Login = () => {
  return (
    <GeneralLayout title="Una nueva forma de gestionar tu dinero dentro del campus">
      <form>
        <Grid container>
          {/* <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid> */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button href='/googleLoginRedirect' variant="contained" fullWidth color='secondary'>
                <Google />
                <Typography sx={{ ml: 1 }}>Ingresar con Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </GeneralLayout>
  );
};

export default Login;