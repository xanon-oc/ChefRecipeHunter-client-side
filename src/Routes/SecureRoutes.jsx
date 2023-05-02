import React, { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { Navigate } from "react-router-dom";

const SecureRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
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
  return <Navigate to="/login"></Navigate>;
};

export default SecureRoutes;
