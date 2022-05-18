import { Routes, Route } from 'react-router-dom';

import About from 'views/About';
import Home from 'views/Home';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
};

export default AppRoutes;
