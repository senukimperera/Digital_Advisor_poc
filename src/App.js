import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './screens/welcomePage';
import ScanqrScreen from './screens/scanqrScreen';
import VerificationScreen from './screens/verificationScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/scanqrScreen" element={<ScanqrScreen />} />
          <Route path="/verificationScreen" element={<VerificationScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
