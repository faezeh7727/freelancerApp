/** @format */

import React from "react";
import UseMoveBack from "../hooks/useMoveBack";
export default function NotFound() {

  const MoveBack = UseMoveBack();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="text-8xl font-black text-blue-600 mb-6 opacity-80">
        404
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        صفحه ای که به دنبال آن بودید پیدا نشد!
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        متأسفیم، به نظر می‌رسد این آدرس تغییر کرده یا وجود ندارد. بیایید شما را
        به مسیر درست برگردانیم.
      </p>
      <div>
        <button onClick={MoveBack} type="submit" className="btn-primary">
          بازشگت به صفحه قبل
        </button>
      </div>
    </div>
  );
}
