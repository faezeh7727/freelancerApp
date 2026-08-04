/** @format */

import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../Services/ProjectService";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
     staleTime: 0,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
