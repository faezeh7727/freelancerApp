/** @format */

import React from "react";
import UseMoveBack from "../hooks/useMoveBack";
import DarkModeToggle from "../ui/DarkModeToggle";
import { HiArrowRight } from "react-icons/hi2";

export default function NotFound() {
  const MoveBack = UseMoveBack();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-secondary text-text-secondary px-4 text-center relative transition-colors duration-300">

      <div className="text-8xl sm:text-9xl font-black text-primary mb-6 tracking-wider drop-shadow-sm">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-text-secondary mb-4">
        صفحه‌ای که به دنبال آن بودید پیدا نشد!
      </h1>
      <p className="text-secondary mb-8 max-w-md text-sm sm:text-base leading-relaxed">
        متأسفیم، به نظر می‌رسد این آدرس تغییر کرده یا وجود ندارد. بیایید شما را
        به مسیر درست برگردانیم.
      </p>
      <div>
        <button
          onClick={MoveBack}
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
