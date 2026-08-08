/** @format */

import React from "react";
const colors = {
  primary: "bg-violet-200 text-violet-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
};
function Stat({ icon, value, title ,color}) {
  return (
    <div className="bg-bg-primary/50 border border-border-secondary rounded-lg px-3 py-4 my-3 shadow-sm">
      <div className="flex items-center justify-around ">
        <div className={` p-1.5 md:p-3  rounded-full ${colors[color]}`}>
          {icon}
        </div>
        <div className="flex flex-col gap-y-2 pr-2 md:pr-0">
          <h5 className="text-secondary-2 "> {title}</h5>
          <p className="text-primary">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default Stat;
