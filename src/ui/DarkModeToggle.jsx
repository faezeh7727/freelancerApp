/** @format */

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ?
          <HiOutlineMoon className="w-6 h-6  text-primary-light" />
        : <HiOutlineSun className="w-6 h-6  text-primary-light " />}
      </button>
    </div>
  );
}
