import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './pages/StartingPage';
import FirstInctructionPage from './pages/FirstInstuctionPage';
import SecondInctructionPage from './pages/SecondInstructionPage';
import GamePage from './pages/GamePage';
import Results from './pages/Results';
import TheEnd from './pages/TheEnd';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/1" element={<FirstInctructionPage />} />
        <Route path="/2" element={<SecondInctructionPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/theend" element={<TheEnd />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
