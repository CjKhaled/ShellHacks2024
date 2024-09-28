import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import GameWindow from './components/GameWindow';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/game" element={<GameWindow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;