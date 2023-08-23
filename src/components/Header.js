import React, { useContext, useState } from "react";
import { HAMBURGER_URL, LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userContext } from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { loggedInUser } = useContext(userContext);
  let onlineState = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex flex-col items-center justify-center text-center shadow-sm w-[100%] md:flex-row md:justify-between md:w-full">
      <div className="logoContainer my-3 ">
        <img className="logo w-16 h-auto" src={LOGO_URL} alt="Fast Food Logo" />
      </div>
      <div className="nav-items flex flex-col items-center lg:block ">
        <div
          className="HambuggerContainer md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img
            className="logo w-7 h-7"
            src={HAMBURGER_URL}
            alt="Hambugger Menu"
          />
        </div>

        <ul
          className={`flex justify-center align-middle flex-col m-5 text-xl ${
            showMenu ? "hidden" : "block"
          } md:flex-row lg:flex`}
        >
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
