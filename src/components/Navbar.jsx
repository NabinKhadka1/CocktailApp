import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav__center">
        <div className="nav__header">
          <h1 className="nav__brand">
            CockTail<span>DB</span>
          </h1>
          <ul className="nav__items">
            <li className="nav__item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
