import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import {ImSearch} from "react-icons/im"
import "./Header.scss";
function Header()
{
      return(
            <>
            <div className="navbar">
                  <nav className="hader">
                        <img src={logo} alt="Logo" />
                  </nav>
                  <div>
                        <Link to="/tvshows">TV Shows</Link>
                        <Link to="/tvshows">Movies</Link>
                        <Link to="/tvshows">Recently Added</Link>
                        <Link to="/tvshows">My List</Link>
                  </div>
            <ImSearch />
            </div>
            </>
      )
}
export default Header;