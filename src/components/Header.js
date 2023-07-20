import React from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between shadow-sm">
      <div className="logoContainer  ">
        <img className="logo w-24 h-auto" src={LOGO_URL} alt="Fast Food Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex justify-center align-middle m-5  text-xl">
          <li className="p-4 cursor-pointer">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <Link to="/">
            <li className="p-4  cursor-pointer">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-4  cursor-pointer">About Us </li>
          </Link>
          <Link to="contact">
            <li className="p-4  cursor-pointer">Contact</li>
          </Link>
          <Link>
            <li className="p-4  cursor-pointer">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
