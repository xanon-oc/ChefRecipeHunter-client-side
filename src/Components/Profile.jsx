import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const Profile = () => {
  const { user, emailSendToV, passwordChangeEmail } = useContext(AuthContext);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
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
  // email verification
  const handleVerification = () => {
    emailSendToV().then(() => {
      return alert("Email verification sent!");
    });
  };

  //   password reset

  const handlePasswordReset = () => {
    passwordChangeEmail()
      .then(() => {
        return alert("Password reset email sent!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   form handler

  const handleFormData = (e) => {
    const auth = getAuth();
    setSuccess("");
    setError("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(name, photo);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setSuccess("Profile updated!");
        setError("");
        alert("Profile updated!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className=" mx-auto mt-4">
      <section className="w-[83%] mx-auto flex flex-col items-center bg-gray-100 rounded-lg p-16">
        <div className="pb-10">
          <div className="flex flex-col items-center gap-4">
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
          <div className="flex flex-col lg:flex justify-center items-center mx-auto w-1/2 gap-2 mt-4 space-x-3 md:mt-6">
            {user.emailVerified === false && (
              <button
                onClick={() => handleVerification()}
                className="rounded-full  bg-blue-600 text-white hover:bg-[#EB4A36] px-5 py-2.5 text-sm font-medium hover:text-white shadow hover:shadow-lg transition"
              >
                VERIFY
              </button>
            )}

            <button
              onClick={() => {
                handlePasswordReset();
              }}
              className="rounded-full  hover:bg-[#EB4A36] px-5 py-2.5 text-sm font-medium hover:text-white shadow hover:shadow-lg transition "
            >
              R'PASSWORD
            </button>
          </div>
        </div>

        <div
          className={`w-full flex-1 mx-auto ${
            isSmallScreen ? "" : "form_container"
          }`}
        >
          <form onSubmit={handleFormData} className="">
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
                required
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
                required
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
            <p className="text-center mt-4">
              <small className="text-red-600">{error}</small>
              <small className="text-green-500  ">{success}</small>
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
