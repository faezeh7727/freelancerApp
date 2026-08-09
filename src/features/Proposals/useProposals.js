/** @format */
import {  useQuery } from "@tanstack/react-query";
import { getproposalsApi } from "../../Services/ProposalService";
export default function useproposals() {
  const { data, isLoading } = useQuery({
    queryFn: getproposalsApi,
    queryKey: ["proposals"],
  });


  const { proposals } = data || {};
  return { proposals, isLoading };
}
