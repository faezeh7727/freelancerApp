/** @format */

import React from "react";
import RHFSelect from "../../../ui/RHFselect";
import Loading from "../../../ui/Loading";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import useChangeUserStatus from "./useChangeUserStatus";

const options = [
  { value: 0, label: "رد شده" },
  { value: 1, label: "در انتظار تایید" },
  { value: 2, label: "تایید شده" },
];
function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit, control } = useForm();
  const { isUpdating, ChangeUserStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    ChangeUserStatus(
      { userId, data }, //{userId,data:{status:1,2}}
      {
        onSuccess: () => {
          (onClose(),
            queryClient.invalidateQueries({
              queryKey: ["users"],
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

export default ChangeUserStatus;
