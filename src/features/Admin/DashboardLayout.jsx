/** @format */

import React from "react";
import Dashboardheader from "../../ui/Dashboardheader";
import Loading from "../../ui/Loading";
import useproposals from "../Proposals/useProposals";
import useProjects from "../../hooks/useProjects";
import useUsers from "./useUsers";
import Stats from "./Stats";

function DashboardLayout() {
  const { proposals, isLoading: isLoading1 } = useproposals();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, users } = useUsers();
  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;
  return (
    <div>
      <Dashboardheader />
      <Stats
        proposals={proposals.length}
        users={users.length}
        projects={projects.length}
      />
    </div>
  );
}

export default DashboardLayout;
