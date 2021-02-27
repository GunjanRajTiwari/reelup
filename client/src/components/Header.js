import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='brand'>
        ReelUp
      </Link>
      <div className='nav-right'>
        <Link to='/streams/show' className='nav-link'>
          Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
