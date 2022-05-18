import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from 'views/About';
import Navbar from 'components/Navbar';
import App from './App';

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
