/** @format */

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export default function DarkModeToggle() {
  const isDarkMode = false;
  return (
    <div>
      <button className="text-secondary-600 transition-all duration-300">
       <HiOutlineSun className="w-5 h-5 text-primary-light"/>
      </button>
    </div>
  );
}
