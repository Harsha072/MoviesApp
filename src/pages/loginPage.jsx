import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { Button, TextField, Typography } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material'

const LoginPage = props => {
  const context = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(email, password);
  };


  if (context.isAuthenticated === true) {
    console.log("not authentiate")
    return <Navigate to={"./home"} />;
  }
  return (
    <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2">Login</Typography>
    
      <TextField
        id="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        margin="normal"
        InputProps={{
          startAdornment: <AccountCircle />,
        }}
      />
      <br></br>
      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
        margin="normal"
        InputProps={{
          startAdornment: <Lock />,
        }}
      />
      <br></br>
      <Button variant="contained" onClick={login}>Log in</Button>
      <br></br>
      <Typography variant="body1">
        Not Registered? <Link to="/signup">Sign Up!</Link>
      </Typography>
    </div>
  );
};

export default LoginPage;
