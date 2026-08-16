/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateProfileApi } from "../../Services/AuthService";
import toast from "react-hot-toast";
export default function useUpdateProfile() {
  const queryClient = useQueryClient();

  const {
    isPending: isUpdating,
    mutate: updateProfile,
    mutateAsync: updateProfileAsync,
  } = useMutation({
    mutationFn: UpdateProfileApi,
    onSuccess: (data) => {
      toast.success(data?.message || "اطلاعات با موفقیت به روزرسانی شد");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      toast.error(
        err?.response?.data?.message || "خطایی در ویرایش اطلاعات رخ داد",
      );
    },
  });
  return { isUpdating, updateProfile, updateProfileAsync };
}
