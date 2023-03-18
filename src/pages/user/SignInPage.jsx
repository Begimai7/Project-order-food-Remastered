import { Grid as MuiGrid, TextField, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import { Button } from '../../components/UI/Button';
import { signIn } from '../../store/auth/authThunk';


export const SignInPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setError("")
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    setError("")

  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    

    dispatch(signIn(userData))
    .unwrap()
    .then(() => navigate('/'))
    .catch((e) => setError(e.response.data.message))
    }
    
  

  const isEmailValid = () => {
    return email.length === 0 || (email.length > 5 && email.includes('@'));
  };
  const isPasswordValid = () => {
    return password.length === 0 || password.length > 5;
  };

  return (
    <Grid>
      <Form onSubmit={submitHandler}>
        <TextField 
          error={!isEmailValid()} 
          value={email} 
          onChange={emailChangeHandler} 
          label="email"
          name='email' />
        <TextField
          error={!isPasswordValid()}
          value={password} 
          onChange={passwordChangeHandler} 
          label="Password"
          name='password' />

        {error &&
          <Typography textAlign="center" sx={{ color: (theme) => theme.palette.error.main }}>
            {error}
          </Typography>
        }

        <Button type="submit" >SignIn</Button>
        <Link to={'/signup'}>Don't have an account?</Link>
      </Form>
    </Grid>
  );
};
const Grid = styled(MuiGrid)(() => ({
  width: '500px',
  margin: '9rem auto',
}));
const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  gap: '20px',
}));
