/** @format */

import React from "react";
import Stat from "./stat";
import { HiOutlineViewGrid } from "react-icons/hi";
import { CiBadgeDollar } from "react-icons/ci";
import { BsCollection } from "react-icons/bs";

//Statistics
function Stats({ projects }) {
  const numOfProjects = projects.length;

  const numOfAcceptedProjects = projects.map((project) => project === 2).length;

  const numOfProposal = projects.reduce((total, project) => {
    return total + (project.proposal?.length || 0);
  }, 0);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 ">
      <Stat
      color="primary"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-6 h-6 md:w-12 md:h-12" />}
      />
      <Stat
       color="yellow"
        title="واگذارشده ها"
        value={numOfProjects}
        icon={<CiBadgeDollar className="w-6 h-6 md:w-12 md:h-12" />}
      />
      <Stat
       color="green"
        title="درخواست ها"
        value={numOfProjects}
        icon={<BsCollection className="w-6 h-6 md:w-12 md:h-12" />}
      />
    </div>
  );
}

export default Stats;
