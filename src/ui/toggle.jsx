/** @format */

import { Switch } from "@headlessui/react";

export default function Toggle({
  enabled,
  onChange,
  activeText = "",
  inactiveText = "",
}) {
  return (
    <div className="flex items-center  gap-2">
      <span
        className={`text-sm font-medium transition-colors duration-300 ${
          enabled ? "text-green-600" : "text-red-500"
        }`}
      >
        {enabled ? activeText : inactiveText}
      </span>
      <Switch
        checked={enabled}
        onChange={onChange}
        className={`${
          enabled ? "bg-primary-light" : "bg-gray-300"
        } relative inline-flex h-5 w-10 rounded-full transition-colors duration-300`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all duration-300 ${
            enabled ? "left-5" : "left-0.5"
          }`}
        />
      </Switch>
    </div>
  );
}
