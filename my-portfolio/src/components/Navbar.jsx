import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/work-experience">Work Experience</Link></li>
        <li><Link to="/web-development">Web Development</Link></li>
        <li><Link to="/game-development">Game Development</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;