/** @format */

import React from "react";
import UseMoveBack from "../hooks/useMoveBack";
import { HiArrowRight } from "react-icons/hi2";

function NotAccess() {
  const moveBack = UseMoveBack();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-secondary text-text-secondary px-4 text-center transition-colors duration-300">
      <div className="text-8xl sm:text-9xl font-black text-red-500 mb-6 tracking-wider drop-shadow-sm">
        403
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-text-secondary mb-4">
        شما به این صفحه دسترسی ندارید!
      </h1>
      <p className="text-secondary mb-8 max-w-md text-sm sm:text-base leading-relaxed">
        نقش کاربری شما اجازه دسترسی به این بخش را ندارد.
      </p>
      <div>
        <button
          onClick={moveBack}
          type="button"
          className="btn-primary flex items-center justify-center gap-2 px-6 py-2.5"
        >
          <HiArrowRight className="w-5 h-5" />
          <span>بازگشت به صفحه قبل</span>
        </button>
      </div>
    </div>
  );
}

export default NotAccess;
