/** @format */
import NavMenuItem from "./NavMenuItem";
import { NavLink } from "react-router-dom";
import { HiHome, HiBriefcase } from 'react-icons/hi'; 

export default function Sidebar() {
  return (
    <div className="py-2">
      <div className=" h-[1.5px] w-full bg-border-secondary"></div>
      <ul className="text-sm py-2">
        <NavMenuItem to="/owner/dashboard" label="داشبورد" icon={HiHome} />
        <NavMenuItem to="/owner/projects" label="پروژه‌ها" icon={HiBriefcase} />
      </ul>
    </div>
  );
}
