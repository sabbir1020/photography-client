import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  //   if (loading) {
  //     return <h1 className="text-5xl text-center"> loading...</h1>;
  //   }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRouter;
