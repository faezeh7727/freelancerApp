/** @format */

import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../Services/ProjectService";
import { useParams } from "react-router-dom";
export default function useSingleeProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getProjectApi(id),
    queryKey: ["project", id],
    retry: false,
  });

  const { project } = data || {};
  return { project, isLoading };
}
