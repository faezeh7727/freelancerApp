/** @format */

import React from "react";
import UsersTabel from "../features/Admin/Users/UsersTabel";

function Users() {
  return (
    <div>
      <h1 className="text-secondary text-xl my-5">  لیست کاربران</h1>
      <UsersTabel />
    </div>
  );
}

export default Users;
