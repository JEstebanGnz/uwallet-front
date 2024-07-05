import {Grid} from '@mui/material';
import React from 'react';
import ClientSideNavigation from '../lib/components/ClientSideNavigation';
export default function AuthorizedLayout({
  children}: { children: React.ReactNode}) {

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >
        <h2 style={{ fontFamily: 'sans-serif', color: 'white' }}>
          Monedero Unibagué
        </h2>
        {children}
      </Grid>
      <ClientSideNavigation/>
    </>
  );
}
