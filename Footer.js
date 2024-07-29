import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => (
  <Container style={{ marginTop: '40px', padding: '16px 0', textAlign: 'center' }}>
    <Typography variant="body2" color="textSecondary">
      © 2024 Smart Water Bottle. All rights reserved.
    </Typography>
    <Link href="#" variant="body2" color="inherit">
      Privacy Policy
    </Link> | 
    <Link href="#" variant="body2" color="inherit">
      Return Policy
    </Link>
  </Container>
);

export default Footer;
