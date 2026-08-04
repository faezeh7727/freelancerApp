/** @format */

export default function TextField({
  name,
  label,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
}) {

  return (
    <div className="relative w-64 ">
      <input
        id={name}
        {...register(name, validationSchema)}
        dir="auto"
        type={type}
        placeholder=" "
        className="peer input-base pt-6 "
        autoComplete="off"
      />
      {errors && errors[name] && <span className="text-red-300 text-sm block font-bold mt-2">{errors[name]?.message}</span>}
      <label
        htmlFor={name}
        className="label-base 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-label-secondary 
        peer-focus:top-[-1px] peer-focus:text-base peer-focus:text-primary"
      >
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-secondary">{label}</span>
          {required && (
            <span className="text-red-500 text-xs" title="این فیلد اجباری است">
              *
            </span>
          )}
        </div>
      </label>
    </div>
  );
}
