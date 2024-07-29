import React from 'react';

import { CssBaseline } from '@mui/material';
import ProductShowcase from './waterBottle/ProductShowcase';
import Features from './waterBottle/Features';
import Testimonials from './waterBottle/Testimonials';
import Footer from './waterBottle/Footer';
import Header from './waterBottle/Header';

const App = () => (
  <div>
    <CssBaseline />
    <Header />
    <main>
      <ProductShowcase />
      <Features />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default App;
























