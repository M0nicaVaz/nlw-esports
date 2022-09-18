import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../Home';
import { GameDetail } from '../GameDetail';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:slug" element={<GameDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
