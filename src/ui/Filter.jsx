/** @format */

import { useSearchParams } from "react-router-dom";

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const CurrentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex text-secondary items-center gap-x-2">
      <span className="font-bold">وضعیت:</span>
      <div className="flex items-center gap-x-2 bg-second-primary p-1 px-2 rounded-md">
        {options.map((item) => {
          const isActive = item.value === CurrentFilter;
          return (
            <button
              onClick={() => handleClick(item.value)}
               aria-pressed={isActive}
              key={item.value}
              className={`px-2 py-1 rounded-md text-sm font-medium transition-all duration-200
             ${
               isActive ?
                 "!bg-primary text-second-primary-2 ring-1 ring-second-primary-2  "
               : " !text-secondary hover:bg-second-primary hover:text-secondary hover:ring-2 hover:ring-primary/50  "
             }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
