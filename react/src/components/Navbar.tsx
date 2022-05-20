import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = (): JSX.Element => {
  return (
    <div id="NavbarContainer">
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
