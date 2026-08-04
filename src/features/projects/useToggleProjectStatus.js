/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToggleProjectStatusApi } from "../../Services/ProjectService";
import { data } from "react-router-dom";
import toast from "react-hot-toast";
export default function useToggleProjectStatus(params) {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: UpdateProjectStatus } = useMutation({
    mutationFn: ToggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => 
      toast.error(err?.response?.data?.message),
      
  });
  return { isUpdating, UpdateProjectStatus };
}
