import AppRoutes from 'AppRoutes';

import Navbar from 'components/Navbar';

const App = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <div>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
