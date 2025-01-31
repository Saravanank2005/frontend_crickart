import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (user?.email) {
      const name = user.email.split('@')[0];
      setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }, [user]);

  const handleLogout = () => {
    setIsMenuOpen(false);
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <nav className='navbar'>
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="CrickArt Logo" />
          <span>CRICKART</span>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </button>

        <div className={`nav-sections ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li>
              <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
                Shop
              </Link>
            </li>
            <li>
              <Link to='/Bats' className={location.pathname === '/Bats' ? 'active' : ''}>
                Bats
              </Link>
            </li>
            <li>
              <Link to='/Balls' className={location.pathname === '/Balls' ? 'active' : ''}>
                Balls
              </Link>
            </li>
            <li>
              <Link to='/Kits' className={location.pathname === '/Kits' ? 'active' : ''}>
                Kits
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            {isAuthenticated && user ? (
              <div className="user-menu">
                <span className="welcome-text">
                  Welcome, {userName}
                </span>
                {user.role === 'admin' && (
                  <Link to="/admin/listproduct" className="admin-link">
                    Admin Dashboard
                  </Link>
                )}
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
                <Link to='/cart' className="cart-link">
                  <img src={cart_icon} alt="Shopping Cart" />
                  <span className="cart-badge">0</span>
                </Link>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to='/login' className="login-btn">
                  Login
                </Link>
                <Link to='/signup' className="signup-btn">
                  Get Started
                </Link>
                <Link to='/cart' className="cart-link">
                  <img src={cart_icon} alt="Shopping Cart" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
