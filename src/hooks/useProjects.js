import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../Services/ProjectService";
export default function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
     staleTime: 0,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
