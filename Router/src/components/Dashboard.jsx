import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4">Bienvenido al Dashboard</Typography>
      <Typography variant="h6">Aquí van los datos del usuario.</Typography>
    </Box>
  );
};

export default Dashboard;
