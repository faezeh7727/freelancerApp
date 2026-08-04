/** @format */

import { useState } from "react";
import TextField from "../../ui/textField";
import RadioInput from "../../ui/RadioInput";
import { CompleteProfile } from "../../Services/AuthService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioinputGroup";
export default function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const Navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: CompleteProfile,
  });
  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        Navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (role === "OWNER") return Navigate("/owner");
      if (role === "FREELANCER") return Navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 items-center"
      >
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          validationSchema={{
            required: "وارد کردن نام و نام خانوادگی الزامی است",
          }}
          errors={errors}
        />

        <TextField
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "وارد کردن ایمیل الزامی است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
          errors={errors}
        />

        <div className="text-sm text-text-secondary font-bold">
          انتخاب نوع فعالیت
        </div>

        <div className="flex  gap-4">
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                { value: "FREELANCER", label: "فریلنسر" },
              ],
            }}
          />
        </div>
        <div className="w-full mt-3">
          {isPending ?
            <Loading />
          : <button type="submit" className="btn-primary ">
              تایید
            </button>
          }
        </div>
      </form>
    </div>
  );
}
