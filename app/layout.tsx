import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import { Container } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>
        <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
        <Container sx={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: "center"}}> 
        {children}
        </Container>
        </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
      </head>
    </html>
  );
}


