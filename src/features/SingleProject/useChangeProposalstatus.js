/** @format */

// useChangeProposalstatus.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeproposalstatusApi } from "../../Services/ProposalService";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: ChangeproposalStatus } = useMutation({
    mutationFn:  changeproposalstatusApi, 
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, ChangeproposalStatus };
}
