/** @format */

import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentications/useAuthorize";
import Loading from "./Loading";
import { useEffect } from "react";


function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isAuthorized } = useAuthorize();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/auth", { replace: true });
      } else if (!isAuthorized) {
        navigate("/not-access", { replace: true });
      }
    }
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center bg-secondary">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;

  return null;
}

export default ProtectedRoute;
