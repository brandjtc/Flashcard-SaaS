// src/app/layout.js
import React from 'react';
import { Container } from '@mui/material';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Container>
          {/* This is where the content of each page will be rendered */}
          {children}
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;