/** @format */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/textField";
import { TagsInput } from "react-tag-input-component";
import Loading from "../../ui/Loading";
import useUpdateProfile from "../authentications/useUpdateProfile";

function EditProfileForm({ user = {}, onClose }) {
  const { isUpdating, updateProfile } = useUpdateProfile();

  const [skills, setSkills] = useState(user?.skills || []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
      biography: user?.biography || "",
      companyName: user?.companyName || "",
    },
  });

  /*const onSubmit = (formData) => {
    const  updatedData= {
      ...formData,
      skills: user?.role === "FREELANCER" ? skills : undefined,
    };

    updateProfile(updatedData, {
      onSuccess: () => {
        if (onClose) onClose();
      },
    });
  };*/

  const onSubmit = (formData) => {
    const updatedData = {
      name: formData.name,
      email: formData.email,
    };

    if (formData.phoneNumber) updatedData.phoneNumber = formData.phoneNumber;
    if (formData.biography !== undefined)
      updatedData.biography = formData.biography;
    if (user?.role === "FREELANCER" && Array.isArray(skills)) {
      updatedData.skills = skills;
    }

    updateProfile(updatedData, {
      onSuccess: () => {
        if (onClose) onClose();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 w-full flex flex-col"
      dir="rtl"
    >
      <div className="mx-auto mb-5 space-y-5">
        <div className="w-full">
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            required
            validationSchema={{
              required: "نام و نام خانوادگی الزامی است",
              minLength: {
                value: 3,
                message: "نام باید حداقل ۳ کاراکتر باشد",
              },
            }}
            errors={errors}
          />
        </div>

        <div className="w-full">
          <TextField
            label="ایمیل"
            name="email"
            type="email"
            register={register}
            required
            validationSchema={{
              required: "ایمیل الزامی است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "فرمت ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
        </div>
  

      <div className="w-full">
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
          errors={errors}
        />
      </div>

      {user?.role === "FREELANCER" && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-secondary">
            مهارت‌ها و تخصص‌ها (با زدن Enter اضافه کنید):
          </label>
          <div className="w-full">
            <TagsInput
              value={skills}
              onChange={setSkills}
              name="skills"
              placeHolder="افزودن مهارت (مثال: React، Figma...)"
            />
          </div>
        </div>
      )}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-secondary">
          درباره من / بیوگرافی:
        </label>
        <textarea
          {...register("biography")}
          rows={4}
          placeholder="توضیحات کوتاه درباره خودتان، سوابق یا حوزه فعالیت..."
          className="w-full p-3 rounded-lg border border-border-secondary bg-bg-secondary text-text-secondary placeholder-gray-400 focus:border-primary-light focus:ring-1 focus:ring-primary-light outline-none text-sm transition-all"
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-border-secondary">
        <button
          type="button"
          onClick={onClose}
          disabled={isUpdating}
          className="px-4 py-2 text-sm rounded-lg border border-border-secondary text-secondary hover:bg-bg-primary transition"
        >
          انصراف
        </button>

        <button
          type="submit"
          disabled={isUpdating}
          className="px-6 py-2 text-sm rounded-lg bg-primary text-white hover:bg-primary-light transition flex items-center justify-center min-w-[120px]"
        >
          {isUpdating ?
            <Loading width="24" height="24" />
          : "ذخیره تغییرات"}
        </button>
      </div>
    </form>
  );
}

export default EditProfileForm;
