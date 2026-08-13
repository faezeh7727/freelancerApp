/** @format */

import { useQuery } from "@tanstack/react-query";
import { getallProjectsApi } from "../Services/ProjectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
export default function useProjects() {
  const { search } = useLocation();

  const queryObject = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getallProjectsApi(search),
    staleTime: 0,
  });

  
  const {projects} = data || {};

  return { isLoading, projects };
  //return { isLoading, projects };
}
