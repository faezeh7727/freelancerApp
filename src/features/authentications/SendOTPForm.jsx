/** @format */
import { useState } from "react";
import TextField from "../../ui/textField";
import Loading from "../../ui/Loading";

export default function SendOTPForm({ onSubmit, isSendingOtp, register }) {
  return (
    <div className="mt-4 w-full max-w-sm mx-auto" dir="rtl">
      <h1 className="text-xl text-text-secondary font-bold text-center sm:text-right">
        ارسال کد تایید
      </h1>
      <form
        onSubmit={onSubmit}
        className="mt-4 min-h-[224px] flex flex-col items-center justify-around"
      >
        <TextField
          name="phoneNumber"
          label="شماره موبایل"
          register={register}
        />
        <div className="w-full mt-4">
          {isSendingOtp ?
            <Loading />
          : <button type="submit" className="btn-primary w-full">
              ارسال کد تایید
            </button>
          }
        </div>
      </form>
    </div>
  );
}
