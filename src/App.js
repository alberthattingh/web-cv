import React from 'react';
import './App.css';
import Background from './components/background'
import Container from "./components/container";

function App() {
  return (
      <div>
        <Background />
        <Container>
          <h1>Hello, World!</h1>
        </Container>
      </div>
  );
}

export default App;
