import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const fixedUsername = 'admin';
  const fixedPassword = '1234';

  const handleLogin = () => {
   
    if (username === fixedUsername && password === fixedPassword) {

      setIsAuthenticated(true); 
      navigate('/dashboard');  
    } else {
     
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ marginBottom: '20px', width: '300px' }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginBottom: '20px', width: '300px' }}
      />
      <Button variant="contained" onClick={handleLogin} sx={{ width: '300px' }}>
        Iniciar Sesión
      </Button>
    </Box>
  );
};

export default Login;
