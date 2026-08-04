/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../Services/ProjectService";
import { data } from "react-router-dom";
import toast from "react-hot-toast";
export default function useRemoveProject() {
  //usemutation:delete post put
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({queryKey:["owner-projects"]});
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { removeProject, isDeleting };
}
