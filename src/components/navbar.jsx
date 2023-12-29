import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Navbar = () => {
  return (
    <div>
      <nav className="">
        {/* Desktop Navbar */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="justify-between hidden gap-20 text-sm md:flex "
        >
          <motion.li variants={item}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/work">Works</Link>
          </motion.li>
        </motion.ul>
      </nav>
    </div>
  );
};

export default Navbar;
