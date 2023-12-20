
import { Link } from 'react-router-dom';

const Navbar = () => {
 

  return (
    <div>
      <nav className=''>
        {/* Desktop Navbar */}
        <ul className='justify-between hidden gap-20 text-sm md:flex '>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul> 
      </nav>
    </div>
  );
};

export default Navbar;
