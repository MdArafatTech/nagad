import React from "react";
import { Link } from "react-router-dom";
import headericon from "../assets/nogod-icon.png";
import {
  FaFacebookF,
  FaTimes,
  FaYoutube,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa";
import AuthStatus from "./AuthStatus";

const navLinkStyle =
  "transition-transform duration-200 transform hover:text-blue-600 hover:scale-105";

const Header = () => {
  // Function to close drawer (used by all buttons)
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-777 bg-transparent px-[5%]">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* Navbar */}
          <div className="navbar mt-4 px-4 md:px-10 w-full max-w-screen-xl mx-auto bg-white/65 backdrop-blur-md text-black shadow shadow-blue-100 rounded-4xl py-2 flex justify-between items-center hover:bg-white">

            <Link to="/">
              <img className="h-10" src={headericon} alt="logo" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="menu menu-horizontal text-lg gap-4">
                {[
                  { to: "/", label: "Home" },
                  { to: "/services", label: "Services" },
                  { to: "/offers", label: "Offers" },
                  { to: "/aboutus", label: "AboutUs" },
                  { to: "/career", label: "Career" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className={navLinkStyle}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <AuthStatus closeDrawer={closeDrawer} />
            </div>

            {/* Mobile Drawer Toggle */}
            <div className="lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <FaBars className="h-6 w-5" />
              </label>
            </div>
          </div>

          <div className="h-[90px]"></div>
        </div>

        {/* Drawer Sidebar */}
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <div className="bg-white text-black h-full w-full flex flex-col justify-between items-center py-5 px-6 relative">
            {/* Close Icon */}
            <label
              htmlFor="my-drawer-3"
              className="absolute right-6 top-6 text-2xl cursor-pointer"
            >
              <FaTimes />
            </label>

            {/* Drawer Links */}
            <ul className="flex flex-col items-center gap-6 text-xl mt-10">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/offers", label: "Offers" },
                { to: "/aboutus", label: "AboutUs" },
                { to: "/career", label: "Career" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={navLinkStyle} onClick={closeDrawer}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <AuthStatus closeDrawer={closeDrawer} />
              </li>
            </ul>

            {/* Social Icons */}
            {/* Social Icons */}
<div className="w-full flex justify-center items-center px-4 mt-10">
  <div className="flex gap-4 text-2xl mt-[-150px]">
    {[
      { href: "https://www.instagram.com/mynagad/?hl=en", icon: <FaInstagram /> },
      { href: "https://www.facebook.com/share/1Bwbu4CZEw/", icon: <FaFacebookF /> },
      { href: "https://www.youtube.com/channel/UCxZQ-w684G_71KcJ-8Hjhlw", icon: <FaYoutube /> },
      { href: "https://bd.linkedin.com/company/mynagad", icon: <FaLinkedinIn /> },
      { href: "https://www.tiktok.com/@nagad", icon: <FaTiktok /> },
    ].map(({ href, icon }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 rounded-full p-2 hover:bg-blue-600 transition-colors flex items-center justify-center"
        onClick={closeDrawer}
      >
        <span className="text-white">{icon}</span>
      </a>
    ))}
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
