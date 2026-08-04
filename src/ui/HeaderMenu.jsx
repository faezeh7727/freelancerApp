/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import useOutsideClick from "../hooks/useOutsideClick";
import Logout from "../features/authentications/LogOut"
import UserAvatar from "../features/authentications/UserAvatar";
import {
  HiOutlineUser,
  HiOutlineAcademicCap,
  HiOutlineShoppingBag,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

export default function HeaderMenu() {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => setOpen(false));

  return (
    <div ref={ref} className="relative flex items-center gap-3">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-1.5 border-2 rounded-xl border-border-secondary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </button>
      <DarkModeToggle />
      {open && (
        <div
          className={`absolute top-12 left-0 lg:right-[-16px] z-[9999] w-64 p-2 rounded-xl bg-white shadow-xl
        transition-all duration-300 ease-in-out origin-top overflow-hidden
    ${
      open ?
        "opacity-100 scale-100 visible translate-y-0"
      : "opacity-0 scale-95 invisible -translate-y-2"
    }
  `}
        >
            <div className="flex items-center px-2 gap-x-2  border-b pb-2 border-border-secondary">
           <UserAvatar/> 
           </div>
          <Link
            to="dashboard"
            className="dropdown-item flex items-center gap-3"
          >
            <HiOutlineUser className="w-5 h-5" />
            <span>حساب کاربری</span>
          </Link>
          <Link className="dropdown-item flex w-full items-center gap-3 text-red-500 hover:bg-red-50 hover:text-red-600">
           <Logout/>
          </Link>
        </div>
      )}
    </div>
  );
}
