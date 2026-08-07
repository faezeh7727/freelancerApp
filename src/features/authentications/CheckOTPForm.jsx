/** @format */

import OTPInput from "react-otp-input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CheckOtp } from "../../Services/AuthService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import { HiOutlineClock, HiOutlinePencilAlt } from "react-icons/hi";
import Loading from "../../ui/Loading";
import { useEffect } from "react";
import { formatTime } from "../../utils/FormatTime";

const ReSendTime = 90;

export default function CheckOTPForm({
  phoneNumber,
  onBack,
  onResendOtp,
  otpResponse,
  isSendingOtp,
}) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(ReSendTime);
  const Navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    //mutation function
    mutationFn: CheckOtp,
  });

  const CheckOtpHandler = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return Navigate("/complete-profile");
      if (user.status === 1) {
        Navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return Navigate("/owner");
      if (user.role === "FREELANCER") return Navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  //timer
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div>
        {otpResponse && (
          <div
            dir="rtl"
            className="flex items-center justify-between gap-2 bg-bg-primary/50 border border-border-secondary rounded-lg px-3 py-2 my-4 shadow-sm w-full max-w-sm mx-auto"
          >
            <span className="text-xs sm:text-sm text-text-secondary leading-6">
              {" "}
              کد تایید برای شماره{" "}
              <span className="text-primary font-bold ">
                {otpResponse.phoneNumber}
              </span>{" "}
              برابر است با{" "}
              <span className="text-success font-bold tracking-wider">
                {otpResponse.otpCode}
              </span>
            </span>

            <button
              onClick={onBack}
              className="flex-shrink-0 text-primary hover:bg-primary/10 p-1.5 rounded-md transition-colors"
              title="ویرایش شماره"
            >
              <HiOutlinePencilAlt className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center flex-col sm:flex-row justify-between gap-2">
        <div className="min-h-[32px] flex items-center">
          {time > 0 ?
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 animate-pulse">
              <HiOutlineClock className="w-5 h-5" />
              <span>{formatTime(time)}</span>
              <p className="text-xs font-medium">
                ارسال مجدد در: <span className="font-bold">{time}</span> ثانیه
              </p>
            </div>
          : <button
              onClick={onResendOtp}
              className="text-sm font-semibold text-primary hover:text-primary-light transition-all flex items-center gap-1 group"
            >
              <span>ارسال مجدد کد تایید</span>
              <BsArrowClockwise className="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-500" />
            </button>
          }
        </div>

        <button
          onClick={onBack}
          className="flex items-center gap-2 mt-3 sm:mt-0 text-secondary border border-border-secondary transition-colors p-2 rounded-lg hover:bg-primary hover:text-white"
        >
          <BsArrowRight className="w-5 h-5" />
        </button>
      </div>
      <form
        onSubmit={CheckOtpHandler}
        className="w-full h-56 flex flex-col items-center justify-center gap-5"
      >
        <h1 className="text-text-secondary text-xl font-bold">
          کد تایید را وارد کنید
        </h1>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={({ style, ...props }) => (
            <input {...props} className="input-style" />
          )}
          containerStyle="flex flex-row gap-x-2 justify-center"
        />
        <div className="w-full mt-5">
          {isSendingOtp ?
            <Loading />
          : <button type="submit" className="btn-primary ">
              تایید
            </button>
          }
        </div>
      </form>
    </div>
  );
}
