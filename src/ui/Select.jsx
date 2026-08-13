/** @format */
import { Listbox, Portal } from "@headlessui/react";
import { IoChevronDown, IoCheckmark } from "react-icons/io5"; // مطمئن شو react-icons نصب است

function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "انتخاب کنید...",
}) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative w-full">
        <Listbox.Button className="relative w-full py-2 px-3 text-right bg-bg-secondary text-text-secondary border border-border-secondary text-xs font-bold rounded-lg cursor-pointer outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all shadow-sm flex items-center justify-between">
          <span className="block truncate">
            {options.find((opt) => opt.value === value)?.label || placeholder}
          </span>
          <span className="flex items-center">
            <IoChevronDown className="text-text-secondary w-4 h-4" />
          </span>
        </Listbox.Button>
          <Listbox.Options className="absolute z-50 w-full mt-1 max-h-60 overflow-auto bg-bg-secondary border border-border-secondary text-text-secondary rounded-lg shadow-xl focus:outline-none py-1">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-3 text-xs transition-colors ${
                    active ?
                      "bg-primary/10 text-primary"
                    : "text-text-secondary"
                  }`
                }
              >
                {({ selected }) => (
                  <div className="flex items-center justify-between">
                    <span
                      className={`block truncate ${selected ? "font-bold" : "font-medium"}`}
                    >
                      {option.label}
                    </span>
                    {selected && (
                      <IoCheckmark className="text-primary w-4 h-4" />
                    )}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
      </div>
    </Listbox>
  );
}

export default CustomSelect;
