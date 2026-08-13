/** @format */

import React from "react";
import useUser from "./useUser";
import { useLocation } from "react-router-dom";

export default function useAuthorize() {
  const { isloading, user } = useUser();
  const { pathname } = useLocation(); //example:owner/project

  let isAuthenticated = false;
  if (user) isAuthenticated = true;
  let isAuthorized = false;

  const RoleKeys = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  //get role from pathname url
  //at(1): first index of pathname
  const pathnameRole = pathname.split("/").at(1);
  
  if (Object.keys(RoleKeys).includes(pathnameRole)) {
    if (user && user.role=== RoleKeys[pathnameRole]) isAuthorized = true;
  }

  console.log("Check:", { 
  pathnameRole, 
  userRole: user?.role, 
  expectedRole: RoleKeys[pathnameRole],
  isMatch: user?.role === RoleKeys[pathnameRole] 
});



  return { user, isloading, isAuthenticated, isAuthorized };
}
