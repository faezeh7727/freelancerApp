/** @format */
import useOutsideClick from "../hooks/useOutsideClick";
import { IoClose } from "react-icons/io5";

export default function Modal({ open, onClose, title, children }) {

 const modalRef =useOutsideClick(onClose);

  return (
    open && (
      // Backdrop:
      <div className="fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className="w-full max-w-lg bg-white/60 rounded-xl shadow-2xl transition-all duration-300 ease-out flex flex-col pb-4"
        >
          <div className="relative  flex items-center justify-between px-6 py-4 rounded-xl bg-gray-100">
            <h3 className="text-lg font-bold text-secondary-2">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-second-primary transition-colors"
            >
             <IoClose className="w-5 h-5 text-secondary" />
            </button>
          </div>
          <div className="p-2">{children}</div>
        </div>
      </div>
    )
  );
}
