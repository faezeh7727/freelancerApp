/** @format */
import { useState } from "react";
import TextField from "../../ui/textField";
import Loading from "../../ui/Loading";

export default function SendOTPForm({ onSubmit,isSendingOtp,register}) {

  return (
    <div className="mt-4" dir="rtl">
      <h1 className="text-xl text-secondary font-bold ">ارسال کد تایید</h1>
      <form
        onSubmit={onSubmit}
        className="mt-4  min-h-[224px] flex flex-col items-center justify-around"
      >
        <TextField
          name="phoneNumber"
          label="شماره موبایل"
          register={register}
        />
        <div className="w-full">
         {isSendingOtp ?
            <Loading />
          : <button type="submit" className="btn-primary">
              ارسال کد تایید
            </button>
          }
        </div>
      </form>
    </div>
  );
}
