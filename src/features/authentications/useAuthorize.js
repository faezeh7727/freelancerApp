/** @format */

import React from "react";
import useUser from "./useUser";
import { useLocation } from "react-router-dom";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation(); //example:owner/project

  let isAuthenticated = false;
  if (user) isAuthenticated = true;
  let isAuthorized = false;
  let isVerified = false;

  if (user && Number(user.status) === 2) isVerified = true;

  const RoleKeys = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  //get role from pathname url
  //at(1): first index of pathname
  const pathnameRole = pathname.split("/").at(1);

  if (Object.keys(RoleKeys).includes(pathnameRole)) {
    if (user && user.role === RoleKeys[pathnameRole]) isAuthorized = true;
  }

  return { user, isLoading, isAuthenticated, isAuthorized, isVerified };
}
