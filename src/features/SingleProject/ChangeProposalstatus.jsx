/** @format */

import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFselect";
import useChangeProposalStatus from "./useChangeProposalstatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

const options = [
  { value: 0, label: "رد شده" },
  { value: 1, label: "در انتظار تایید" },
  { value: 2, label: "تایید شده" },
];

export default function ChangeProposalStatus({ ProposalId, onClose }) {
  const { register, handleSubmit, control } = useForm();
  const { isUpdating, ChangeproposalStatus } = useChangeProposalStatus();
  const { id: projectId } = useParams();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    ChangeproposalStatus(
      {
        id: ProposalId,
        data,
      },
      {
        onSuccess: () => {
          (onClose(),
            queryClient.invalidateQueries({
              queryKey: ["project", projectId],
            }));
        },
      },
    );
  };
  return (
    <div className="flex justify-center mt-3 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-64 flex flex-col space-y-5"
      >
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
          control={control}
        />
        <div>
          {isUpdating ?
            <Loading />
          : <button className="btn-primary ">تایید</button>}
        </div>
      </form>
    </div>
  );
}
