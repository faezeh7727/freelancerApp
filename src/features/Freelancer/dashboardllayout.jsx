/** @format */

import React from "react";
import Dashboardheader from "./Dashboardheader";
import Stats from "./FreelancerStats";
import useproposals from "../Proposals/useProposals";
import Loading from "../../ui/Loading";
function Dashboardlayout() {
  const { proposals, isLoading } = useproposals();
  if (isLoading) return <Loading/>;
  return (
    <div>
      <Dashboardheader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default Dashboardlayout;
