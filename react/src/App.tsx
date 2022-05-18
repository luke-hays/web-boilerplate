import AppRoutes from 'AppRoutes';

import Navbar from 'components/Navbar';

const App = (): JSX.Element => {
  return (
    <div>
      <div id="NavbarContainer">
        <Navbar />
      </div>
      <div id="MainContainer">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
