import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      {/* Your header content, including the logo, title, and navbar */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
