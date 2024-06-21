'use client';
import { Open_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#003D7C"
    },
    secondary:{
      main: "#F7BC00"
    }
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
});

export default theme;
