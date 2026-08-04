/** @format */

export default function ConfirmDelete({ resourcename, onClose, onConfirm ,disabled}) {
  return (
    <div>
      <h2 className="text-secondary">آیا از حذف {resourcename} مطمعن هستید؟</h2>
      <div className="flex justify-around items-center mt-6">
        <button
          onClick={onClose}
          disabled={disabled}
          className="bg-primary-light ring-2 ring-gray-400  p-1 w-12 rounded-xl  text-white"
        >
          لغو
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className=" ring-2 ring-red-500 text-red-500 p-1 w-12 rounded-xl"
        >
          تایید
        </button>
      </div>
    </div>
  );
}
