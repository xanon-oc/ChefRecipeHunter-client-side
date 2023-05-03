import { useContext, useState } from "react";
import logo from "../../public/default-monochrome.svg";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import SMNavBar from "../Components/SMNavBar";
// header for md and lg devices
const Header = () => {
  // context
  const { user, logOut } = useContext(AuthContext);
  // state
  const [visible, setVisible] = useState(false);
  // log out handler
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  const navHandler = () => {
    setVisible(!visible);
  };

  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/">
              <img src={logo} className="w-[50%]" alt="" />
            </Link>
          </div>

          <div className="hidden md:block md:mr-[9rem] lg:mr-[9rem]">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/blogs"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex items-center sm:gap-4">
              <div className="flex gap-2">
                <button
                  data-tooltip-id="my-tooltip2"
                  data-tooltip-content="Search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <Tooltip id="my-tooltip2" />
                </button>
                {user ? (
                  <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-4">
                      <div>
                        <img
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={user.displayName}
                          src={user.photoURL}
                          className="w-10 h-10 rounded-full"
                          alt=""
                        />
                      </div>
                      <Tooltip id="my-tooltip" />
                    </div>
                    <button
                      onClick={() => handleLogOut()}
                      data-tooltip-id="my-tooltip2"
                      data-tooltip-content="Log Out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                      <Tooltip id="my-tooltip2" />
                    </button>
                  </div>
                ) : (
                  <div className="lg:flex md:flex items-center gap-4 hidden">
                    <div className="hidden sm:flex items-center gap-8">
                      <Link
                        className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                        to="/login"
                      >
                        Sign In
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="rounded-full bg-[#EB4A36] px-5 py-2.5 text-sm font-medium text-white shadow"
                        to="/signUp"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="block md:hidden">
              <button
                onClick={() => navHandler()}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${visible === true ? "visible" : "hidden"}`}>
        <SMNavBar />
      </div>
    </header>
  );
};

export default Header;
