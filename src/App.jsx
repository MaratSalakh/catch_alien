import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './pages/StartingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
