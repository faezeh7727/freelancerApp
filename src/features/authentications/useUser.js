/** @format */

import { useQuery } from "@tanstack/react-query";
import { GetUser } from "../../Services/AuthService";
export default function useUser(params) {
  const { data, isloading } = useQuery({
    queryKey: ["user"],
    queryFn: GetUser,
    retry: false,
    refetchOnWindowFocus: true,
  });
  const { user } = data || {};
  return { isloading, user };

}
