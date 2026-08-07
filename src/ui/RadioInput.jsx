/** @format */

// src/components/ui/RadioInput.jsx
export default function RadioInput({
  label,
  value,
  name,
  checked,
  register,
  validationSchema,
  watch,
}) {
  const isChecked = watch(name) === value;
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer p-3 rounded-lg border transition-all ${
        isChecked ?
          "border-primary bg-primary/10 text-primary"
        : "border-border-secondary bg-bg-secondary text-text-secondary hover:border-primary/50"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        {...register(name, validationSchema)}
        className="hidden"
      />
      <div
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isChecked ? "border-primary" : "border-secondary-light"}`}
      >
        {isChecked && <div className="w-2 h-2 rounded-full bg-primary" />}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
}
