/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../Services/ProjectService";
import toast from "react-hot-toast";
import { all } from "axios";
export default function useEditProject(params) {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: EditProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
       console.log("Edit Success, data received:", data);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"],refetchType:all });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isEditing, EditProject };
}
