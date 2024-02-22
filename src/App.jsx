import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './pages/StartingPage';
import FirstInctructionPage from './pages/FirstInstuctionPage';
import SecondInctructionPage from './pages/SecondInstructionPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/firstInstruction" element={<FirstInctructionPage />} />
        <Route path="/secondInstruction" element={<SecondInctructionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
