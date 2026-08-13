/** @format */

import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentications/useAuthorize";
import Loading from "./Loading";
import { useEffect } from "react";


function ProtectedRoute({ children }) {
  const { isAuthenticated, isloading, isAuthorized } = useAuthorize();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isloading) navigate("/auth");
    if (!isAuthorized && !isloading) navigate("/not-access" ,{ replace: true });
  }, [isAuthenticated, isAuthorized, isloading, navigate]);

  if (isloading)
    return (
      <div className="h-screen flex items-center justify-center bg-secondary">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
  
}

export default ProtectedRoute;
