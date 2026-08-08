/** @format */

import React from "react";
import Stat from "../../ui/stat";
import { HiOutlineViewGrid } from "react-icons/hi";
import { CiBadgeDollar } from "react-icons/ci";
import { BsCollection } from "react-icons/bs";

//Statistics prpposals
function Stats({ proposals }) {
  const numOfproposals = proposals.length;

  const Acceptedproposals = proposals.map((proposal) => proposal === 2).length;

  //proposals price= Acceptedproposals =total price of them
  const balance = Acceptedproposals.reduce(
    (total, proposal) => total + proposal.price,
    0,
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 ">
      <Stat
        color="primary"
        title="پروپوزال ها"
        value={numOfproposals}
        icon={<HiOutlineViewGrid className="w-6 h-6 md:w-12 md:h-12" />}
      />
      <Stat
        color="yellow"
        title="پروپوزال های قبول شده"
        value={Acceptedproposals.length}
        icon={<CiBadgeDollar className="w-6 h-6 md:w-12 md:h-12" />}
      />
      <Stat
        color="green"
        title="کیف پول"
        value={balance}
        icon={<BsCollection className="w-6 h-6 md:w-12 md:h-12" />}
      />
    </div>
  );
}

export default Stats;