import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" mx-auto mt-4">
      <section className="w-[83%] mx-auto lg:flex justify-evenly items-center gap-24 bg-gray-100 rounded-lg p-16">
        <div className="pb-10">
          <div className="flex flex-col  items-center gap-4">
            <img
              className="w-24 h-24 mb-3 mt-8 rounded-full shadow-lg"
              src={user.photoURL}
              alt="Bonnie image"
            />
            <p className="flex flex-col items-center">
              <span className="flex gap-2 items-center mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user.displayName}{" "}
                {user.emailVerified === false ? (
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
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#42A5F5"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </span>
            </p>
          </div>
          <div className="flex mt-4 space-x-3 md:mt-6">
            {user.emailVerified === false && (
              <a
                href="#"
                className="rounded-full bg-blue-600 text-white hover:bg-[#EB4A36] px-5 py-2.5 text-sm font-medium hover:text-white shadow hover:shadow-lg transition"
              >
                VERIFY
              </a>
            )}

            <a
              href="#"
              className="rounded-full hover:bg-[#EB4A36] px-5 py-2.5 text-sm font-medium hover:text-white shadow hover:shadow-lg transition "
            >
              RESET PASSWORD
            </a>
          </div>
        </div>

        <div
          className={`w-full mx-auto ${isSmallScreen ? "" : "form_container"}`}
        >
          <form onSubmit={""} className="">
            <div className="title_container">
              <p className="title">update your profile data</p>
              <span className="subtitle mt-4">
                if you need to change profile information here you can update
                and enjoy the experience.
              </span>
            </div>

            <div className="input_container">
              <label className="input_label" htmlFor="name_field">
                Name
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <input
                placeholder="name"
                title="Inpit title"
                name="name"
                type="text"
                className="input_field"
                id="email_field"
              />
            </div>
            <div className="input_container mt-4">
              <label className="input_label" htmlFor="email_field">
                Email
              </label>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#141B34"
                  d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="#141B34"
                  d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                ></path>
              </svg>
              <input
                placeholder="name@mail.com"
                name="email"
                type="text"
                className="input_field"
              />
            </div>
            <div className="input_container mt-4">
              <label className="input_label" htmlFor="email_field">
                Photo URL
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>

              <input
                placeholder="image link"
                name="photo"
                type="text"
                className="input_field"
              />
            </div>

            <p className="text-center">
              <small className="text-red-600">{""}</small>
              <small className="text-green-500  ">{""}</small>
            </p>
            <button
              title="Sign In"
              type="submit"
              className="sign-in_btn mt-4 mb-10"
            >
              <span>Update</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Profile;
