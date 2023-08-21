import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import UseOnlineStatus from "../utils/useOnlinestatus";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  let onlineState = UseOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between shadow-sm">
      <div className="logoContainer  ">
        <img className="logo w-24 h-auto" src={LOGO_URL} alt="Fast Food Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex justify-center align-middle m-5  text-xl">
          <li className="p-4 cursor-pointer">
            Online Status: {onlineState ? "✅" : "🔴"}
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
          <Link to="/cart">
            <li className="p-4  cursor-pointer">Cart({cartItems.length})</li>
          </Link>
          <span className="p-4  cursor-pointer border-2 rounded-full bg-stone-500 text-white ">
            {loggedInUser}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
