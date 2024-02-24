import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './pages/StartingPage';
import FirstInctructionPage from './pages/FirstInstuctionPage';
import SecondInctructionPage from './pages/SecondInstructionPage';
import GamePage from './pages/GamePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/1" element={<FirstInctructionPage />} />
        <Route path="/2" element={<SecondInctructionPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
