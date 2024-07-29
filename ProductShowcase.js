import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

const ProductShowcase = () => (
  <Container>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/bottle/7/u/5/1000-botmultp6-6-botmultp6-flipkart-smartbuy-original-imahyubhu4t5tffq.jpeg?q=70" alt="Smart Water Bottle" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h3" gutterBottom>
          Stay Hydrated with Smart Water Bottle
        </Typography>
        <Typography variant="body1" paragraph>
          Our Smart Water Bottle tracks your hydration levels and reminds you to drink water.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Buy Now
        </Button>
      </Grid>
    </Grid>
  </Container>
);

export default ProductShowcase;
