import { Grid, Typography } from '@mui/material';

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

    <h2 style={{fontFamily:'sans-serif', color:'white'}}> Monedero Unibagué </h2>

      <Grid item
       className='box-shadow'
       xs={ 3 }
       sx={{ 
            width: { sm: 450 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 
        }}>
            { children }
        </Grid>

    </Grid>

  )
}