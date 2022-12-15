import React from 'react';
import Container from '@mui/material/Container';

import RoutesApp from './routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <RoutesApp />
      </Container>
    </div>
  );
}

export default App;
