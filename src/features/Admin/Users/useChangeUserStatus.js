/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeUserStatusApi } from "../../../Services/AuthService";
import toast from "react-hot-toast";
export default function useChangeUserStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: ChangeUserStatus } = useMutation({
    mutationFn: ChangeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, ChangeUserStatus };
}
