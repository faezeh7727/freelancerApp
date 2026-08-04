/** @format */

import { Listbox } from "@headlessui/react";
import { IoChevronDown, IoCheckmark } from "react-icons/io5";
import { Controller } from "react-hook-form";

export default function RHFSelect({
  name,
  label,
  control,
  required,
  options,
  className,
}) {
  return (
    <div className={`w-full ${className}`}>
      <label className="block mb-2 text-sm text-secondary">
        {label}
        {required && <span className="mr-1 text-red-500">*</span>}
      </label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Listbox value={field.value} onChange={field.onChange}>
            <div className="relative">
              {/* دکمه انتخاب */}
              <Listbox.Button className="relative w-full py-2.5 pr-3 pl-10 text-right bg-white border border-gray-200 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20">
                <span className="block truncate text-primary">
                  {options.find((o) => o.value === field.value)?.label ||
                    "انتخاب کنید"}
                </span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoChevronDown className="text-gray-500" />
                </span>
              </Listbox.Button>

              {/* لیست گزینه‌ها */}
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto bg-white border-2  border-border-secondary rounded-lg shadow-lg max-h-60 ring-1  ring-opacity-5 focus:outline-none">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option.value}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 px-4 ${
                        active ? "bg-primary/10 text-primary" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <div className="flex items-center justify-between">
                        <span
                          className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                        >
                          {option.label}
                        </span>
                        {selected ?
                          <IoCheckmark className="text-primary" />
                        : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        )}
      />
    </div>
  );
}
