import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
// this is a navbar for small devices
const SMNavBar = () => {
  // context
  const { user, pic } = useContext(AuthContext);

  return (
    <nav aria-label="Main Nav" className="flex flex-col ">
      <NavLink
        to="/"
        className="flex items-center gap-2 border-s-[3px] bg-blue-50 px-4 py-3 text-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <span className="text-sm font-medium"> Home </span>
      </NavLink>

      <NavLink
        to="/blogs"
        className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <span className="text-sm font-medium"> Blog </span>
      </NavLink>

      <NavLink
        to="/contact"
        className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>

        <span className="text-sm font-medium"> Contact </span>
      </NavLink>

      {!user ? (
        <div
          to=""
          className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-sm font-medium">
            <NavLink to="/login">Login</NavLink>
          </span>
          /
          <span className="text-sm font-medium">
            <NavLink to="/signUp">Sign Up</NavLink>
          </span>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-4">
            {pic === false ? (
              <div>
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  src={pic}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
              </div>
            ) : (
              <div className="flex gap-2 p-4 items-center">
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  src={user?.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div>
                  <p>{user?.displayName}</p>
                </div>
              </div>
            )}
            <Tooltip id="my-tooltip" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default SMNavBar;
