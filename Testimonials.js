import React from 'react';
import { Container, Typography, Grid, Paper, Avatar } from '@mui/material';

const testimonials = [
  { name: 'John Doe', text: 'This water bottle changed my life!', image: '/path/to/avatar1.jpg' },
  { name: 'Jane Smith', text: 'I love the reminders to stay hydrated.', image: '/path/to/avatar2.jpg' },
];

const Testimonials = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
        
      Testimonials
    </Typography>
    <Grid container spacing={4}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Paper style={{ padding: '16px' }}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar src={testimonial.image} alt={testimonial.name} />
              </Grid>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  {testimonial.name}
                </Typography>
                <Typography variant="body1">
                  {testimonial.text}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Testimonials;
