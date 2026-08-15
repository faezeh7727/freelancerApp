/** @format */

import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentications/useAuthorize";
import Loading from "./Loading";
import { useEffect } from "react";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isAuthorized, isVerified } =
    useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/auth", { replace: true });
      }
      if (!isVerified) {
        navigate("/")
        toast.error("پروفایل شما هنوز تایید نشده است")
      } else if (!isAuthorized) {
        navigate("/not-access", { replace: true });
      }
    }
  }, [isAuthenticated, isAuthorized, isLoading, navigate,isVerified]);

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
