import React, { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const SecureRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="loader">
            <span className="loader-text">loading</span>
            <span className="load"></span>
          </div>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default SecureRoutes;
