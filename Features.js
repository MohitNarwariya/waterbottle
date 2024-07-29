import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const features = [
  { title: 'Track Hydration', description: 'Keep track of your water intake.' },
  { title: 'Smart Reminders', description: 'Get reminded to drink water.' },
  { title: 'Stylish Design', description: 'Looks great on the go.' },
];

const Features = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Features
    </Typography>
    <Grid container spacing={4}>
      {features.map((feature, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Paper style={{ padding: '16px' }}>
            <Typography variant="h6" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body1">
              {feature.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Features;
