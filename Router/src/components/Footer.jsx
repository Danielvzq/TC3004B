import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '10px', background: '#3f51b5', color: 'white', marginTop: '50px' }}>
      <Typography variant="body1">© 2025 Mi Aplicación</Typography>
    </Box>
  );
};

export default Footer;
