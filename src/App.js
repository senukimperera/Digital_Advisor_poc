import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './screens/welcomePage';
import ScanQRScreen from './screens/ScanQRScreen';
import OnboardScreen from './screens/OnboardScreen';
import VerificationScreen from './screens/VerificationScreen.jsx';
import DPPScreen from './screens/DPPScreen';
import MapScreen from './screens/MapScreen';
import CCMapScreen from './screens/CCMapScreen';
import GS1DLScreen from './screens/GS1DLScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/onboard" element={<OnboardScreen />} />
          <Route path="/scanqr" element={<ScanQRScreen />} />
          <Route path="/verification" element={<VerificationScreen />} />
          <Route path="/dpp" element={<DPPScreen />} />
          <Route path="/map" element={<MapScreen />} />
          <Route path="/ccmap" element={<CCMapScreen />} />
          <Route path="/gs1" element={<GS1DLScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
