/** @format */

import ProjectHeader from "../features/SingleProject/projectHeader";
import ProposaleTable from "../features/SingleProject/proposalTable";
import useSingleeProject from "../features/SingleProject/singleProject";
import Loading from "../ui/Loading";

export default function SingleProject() {
  const { project, isLoading } = useSingleeProject();

  if (isLoading) return <Loading />;

  return (
    <div>
      <ProjectHeader project={project}/>
      <ProposaleTable proposals={project.proposals} />
    </div>
  );
}
