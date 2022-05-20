import AppRoutes from 'AppRoutes';

import Header from './views/Header/Header';

import './App.css';

const App = (): JSX.Element => {
  return (
    <div>
      <div id="HeaderContainer">
        <Header />
      </div>
      <div id="MainContainer">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
