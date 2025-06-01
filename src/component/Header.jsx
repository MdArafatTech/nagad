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
  // Function to close drawer
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* Navbar */}
          <div className="navbar mt-4 px-4 md:px-10 w-full max-w-screen-xl mx-auto bg-white text-black shadow shadow-blue-100 rounded-4xl py-2 flex justify-between items-center">
            <Link to="/">
              <img className="h-10" src={headericon} alt="logo" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="menu menu-horizontal text-lg gap-4">
                <li>
                  <Link to="/" className={navLinkStyle}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={navLinkStyle}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/offers" className={navLinkStyle}>
                    Offers
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className={navLinkStyle}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/career" className={navLinkStyle}>
                    Career
                  </Link>
                </li>

               <AuthStatus closeDrawer={closeDrawer} />
              </ul>
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
        <div className="drawer-side z-550">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <div className="bg-white text-black h-full w-full flex flex-col justify-between items-center py-5 px-6 relative">
            {/* Close Icon */}
            <label
              htmlFor="my-drawer-3"
              className="absolute right-6 top-6 text-2xl cursor-pointer"
            >
              <FaTimes />
            </label>

            {/* Links */}
            <ul className="flex flex-col items-center gap-6 text-xl mt-10">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/offers", label: "Offers" },
                { to: "/about-us", label: "About Us" },
                { to: "/career", label: "Career" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={navLinkStyle}
                    onClick={closeDrawer}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li>
               <AuthStatus closeDrawer={closeDrawer} />
              </li>
            </ul>

            {/* Social Icons */}
            <div className="w-full flex justify-center items-center px-4 mt-10">
              <div className="flex gap-4 text-2xl mt-[-150px]">
                {[
                  { href: "https://www.instagram.com", icon: <FaInstagram /> },
                  { href: "https://www.facebook.com", icon: <FaFacebookF /> },
                  { href: "https://www.youtube.com", icon: <FaYoutube /> },
                  { href: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
                  { href: "https://www.tiktok.com", icon: <FaTiktok /> },
                ].map(({ href, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-current transition"
                    onClick={closeDrawer}
                  >
                    {icon}
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
