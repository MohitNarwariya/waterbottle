import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Smart Water Bottle
      </Typography>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Features</Button>
      <Button color="inherit">Testimonials</Button>
      <IconButton color="inherit">
        <ShoppingCartIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
