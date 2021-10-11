import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header>
      <Link to="/">
        <img
          src="https://www.freeiconspng.com/thumbs/cookie/download-biscuit-cookie-monster-clipart-24.png"
          alt="cookie"
        />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/productlist">Product List</Link>
      <Link to="/detail" className="button">
        Details
      </Link>
    </header>
  );
}

export default NavBar;
