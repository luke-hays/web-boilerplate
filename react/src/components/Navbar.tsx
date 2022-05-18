import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
  return (
    <div>
      <h2>Nav</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
