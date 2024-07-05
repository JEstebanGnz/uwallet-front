'use client';

import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';

export default function ClientSideNavigation() {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/login/setup2FA'); // Replace with your route
        break;
      case 1:
        router.push('/login/validate2FA'); // Replace with your route
        break;
      case 2:
        return // Replace with your route
        break;
      case 3:
        return // Replace with your route
        break;
    }
  };

  return (
    <BottomNavigation showLabels value={value} onChange={handleChange}>
      <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
      <BottomNavigationAction label="Pagar" icon={<ShoppingCartIcon />} />
      <BottomNavigationAction label="Recargar" icon={<CurrencyExchangeIcon />}/>
      <BottomNavigationAction label="Salir" icon={<LogoutIcon />} />
    </BottomNavigation>
  );
}
