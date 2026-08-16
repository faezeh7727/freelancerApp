/** @format */

import useOwnerProjects from "../projects/useOwnerProjects";
import Stats from "./stats";
import Loading from "../../ui/Loading";
import Dashboardheader from "../../ui/Dashboardheader";
function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  return (
    <div>
      <Dashboardheader />
      <Stats projects={projects} />
    </div>
  );
}
export default DashboardLayout;