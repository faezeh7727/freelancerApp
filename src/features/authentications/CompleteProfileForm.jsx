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
import getRedirectPathByRole from "../../utils/getRedirectPathByRole";
export default function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const Navigate = useNavigate();
  const { mutateAsync: completeProfile, isPending } = useMutation({
    mutationFn: CompleteProfile,
  });
  const onSubmit = async (data) => {
    try {
      const { user, message } = await completeProfile(data);
      toast.success(message);
      if (user.status !== 2) {
        Navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      const redirectPath = getRedirectPathByRole(user);
      Navigate(redirectPath, { replace: true });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="p-4 sm:p-6 w-full max-w-md mx-auto" dir="rtl">
      <h1 className="text-xl text-text-secondary font-bold text-center mb-6">
        تکمیل اطلاعات پروفایل
      </h1>
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

        <div className="text-sm text-text-secondary font-bold self-start sm:self-center">
          انتخاب نوع فعالیت:
        </div>

        <div className="flex gap-4">
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
          : <button type="submit" className="btn-primary">
              تایید و ادامه
            </button>
          }
        </div>
      </form>
    </div>
  );
}
