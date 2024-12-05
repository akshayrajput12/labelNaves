import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LabelNave
        </Link>

        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </div>

        <div className={`nav-overlay ${isOpen ? 'show' : ''}`} onClick={toggleMenu}>
          <div className="nav-links" onClick={(e) => e.stopPropagation()}>
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/products" className="nav-link" onClick={toggleMenu}>
              Products
            </Link>
            <Link to="/cart" className="nav-link" onClick={toggleMenu}>
              Cart
            </Link>
            <Link to="/checkout" className="nav-link" onClick={toggleMenu}>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
