import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './pages/StartingPage';
import FirstInctructionPage from './pages/FirstInstuctionPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/firstInstruction" element={<FirstInctructionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
