/** @format */

import React from "react";
import Stat from "../../ui/stat";
import { HiMiniUsers } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";

import { BsCollection } from "react-icons/bs";
function Stats({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 ">
      <Stat
        color="green"
        title="کاربر ها"
        value={users}
        icon={<HiMiniUsers className="w-6 h-6 md:w-12 md:h-12" />}
      />
      <Stat
        color="primary"
        title=" درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-6 h-6 md:w-12 md:h-12" />}
      />
      <Stat
        color="yellow"
        title=" پروژه ها"
        value={projects}
        icon={<BsCollection className="w-6 h-6 md:w-12 md:h-12" />}
      />
    </div>
  );
}

export default Stats;
