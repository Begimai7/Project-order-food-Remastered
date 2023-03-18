import { AppBar, Toolbar, Button, IconButton, Grid as MuiGrid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/auth/authThunk';
import styled from 'styled-components';

const menus = [
  {
    path: 'meals',
    title: 'Meals',
  },
  {
    path: 'orders',
    title: 'Orders',
  },
];


export const AdminHeader = () => {
  const dispatch = useDispatch();

  const SignOutPageHandler = () => {
    dispatch(signOut());
    // navigate('/signin')
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Grid>
           {menus.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
              >
                {item.title}
              </NavLink>
            ))}

          <Button color="inherit" onClick={SignOutPageHandler}>
            Sign Out
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const Grid = styled(MuiGrid)`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
