/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/textField";
import Loading from "../../ui/Loading";
import { data } from "react-router-dom";
import useCreateProposal from "./useCreatPrroposal";
function CreatProposal({ onClose, projectId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isCreating, CreateProposal } = useCreateProposal();

  const Onsubmit = (data) => {
    CreateProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(Onsubmit)}
      className="w-full flex flex-col items-center space-y-5 my-2"
    >
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "وارد کردن توضیحات الزامی است",
          minLength: {
            value: 10,
            message: "توضیحات باید حداقل10 کاراکتر باشد",
          },
          maxLength: {
            value: 60,
            message: "عنوان نباید بیشتر از 60 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="قیمت"
        name="price"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "وارد کردن قیمت الزامی است",
        }}
        errors={errors}
      />
      <TextField
        label="مدت زمان"
        name="duration"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "وارد کردن مدت زمان الزامی است",
        }}
        errors={errors}
      />
      <div className="!mt-6">
        {isCreating ?
          <Loading />
        : <button className="btn-primary  w-64" type="submit">
            تایید
          </button>
        }
      </div>
    </form>
  );
}

export default CreatProposal;
