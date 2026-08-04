/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/textField";
import RHFselect from "../../ui/RHFselect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatepickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

export default function CreatProjectForm({ onClose, projectToEdit = {} }) {
  //Edit project form
  const { _id: editTd } = projectToEdit;
  //ایا در حال ویرایش هستیم ؟=isEditSession =boolean
  const isEditSession = Boolean(editTd);
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;
  let editValue = {};
  if (isEditSession) {
    editValue = {
      title,
      description,
      budget,
      category: category._id,
      deadline: new Date(deadline),
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isCreating, CreateProject } = useCreateProject();
  const { isEditing, EditProject } = useEditProject();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm({ values: editValue });

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      budget: Number(data.budget),
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      EditProject(
        { id: editTd, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
    } else {
      CreateProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center space-y-4 "
      action=""
    >
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "وارد کردن عنوان الزامی است",
          minLength: { value: 3, message: "عنوان باید حداقل ۳ کاراکتر باشد" },
          maxLength: {
            value: 30,
            message: "عنوان نباید بیشتر از ۳۰ کاراکتر باشد",
          },
        }}
        errors={errors}
      />

      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات پروژه را بنویسید",
          minLength: {
            value: 30,
            message: "توضیحات کوتاه است (حداقل ۳۰ کاراکتر )",
          },
        }}
        errors={errors}
      />

      <TextField
        label=" بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "تعیین بودجه الزامی است",
          minLength: {
            value: 5,
            message: "مبلغ بودجه را به صورت کامل وارد کنید (حداقل ۵ رقم)",
          },
        }}
        errors={errors}
      />
      <div className="flex flex-col space-y-2">
        <RHFselect
          label="دسته بندی"
          name="category"
          control={control}
          required
          register={register}
          options={categories}
        />
        <label className="text-secondary text-sm mb-2">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
        <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      </div>
      <div className="!mt-6">
        {isCreating || isEditing ?
          <Loading />
        : <button className="btn-primary  w-64" type="submit">
            تایید
          </button>
        }
      </div>
    </form>
  );
}
