/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogoutApi } from "../../Services/AuthService";
import {  replace, useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const Navigate = useNavigate();
  const { isPending, mutate: logout } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      Navigate("/auth", { replace: true });
    },
  });

  return { isPending, logout };
}
