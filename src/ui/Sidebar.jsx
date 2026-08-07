/** @format */
import { NavLink } from "react-router-dom";
import { HiHome, HiBriefcase } from "react-icons/hi";

export default function Sidebar({ children }) {
  return (
    <div className="py-2">
      <div className=" h-[1.5px] w-full bg-border-secondary"></div>
      <ul className="text-sm py-2">{children}</ul>
    </div>
  );
}
