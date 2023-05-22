import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import {Navigate  } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Button, TextField, Typography } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");



  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      console.log("reg",email,password,firstName,lastName);
      context.register(email, password, firstName, lastName);
      
      setRegistered(true);
    }
  }

 // const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
   return <Navigate to="./home" />;
  }

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2">Signup</Typography>
      <TextField
        id="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        style={{ width: '300px' }}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        InputProps={{
          startAdornment: <AccountCircle />,
        }}
      />
      <TextField
        id="firstName"
        label="First Name"
        placeholder="Enter your first name"
        value={firstName}
        style={{ width: '300px' }}
        onChange={(e) => setFirstName(e.target.value)}
        margin="normal"
      />
      <TextField
        id="lastName"
        label="Last Name"
        placeholder="Enter your last name"
        value={lastName}
        style={{ width: '300px' }}
        onChange={(e) => setLastName(e.target.value)}
        margin="normal"
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        style={{ width: '300px' }}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        InputProps={{
          startAdornment: <Lock />,
        }}
      />
      <TextField
        id="passwordAgain"
        label="Confirm Password"
        type="password"
        placeholder="Enter your password again"
        value={passwordAgain}
        style={{ width: '300px' }}
        onChange={(e) => setPasswordAgain(e.target.value)}
        margin="normal"
        InputProps={{
          startAdornment: <Lock />,
        }}
      />
      <br></br>
      <Button variant="contained" onClick={register}>Register</Button>
      <br></br>
      <Typography variant="body1">
        Already have an account? <Link to="/login">Log in</Link>
      </Typography>
    </div>
    </>
  );
};

export default SignUpPage;
