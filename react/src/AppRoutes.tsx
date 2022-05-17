import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from 'components/about/About';
import App from './App';

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
