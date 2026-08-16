/** @format */
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { GetOtp } from "../../Services/AuthService";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import useUser from "./useUser";
export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const [resendCounter, setResendCounter] = useState(0);
  const { user } = useUser();
  const navigate = useNavigate();

  const {
    isPending: isSendingOtp,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: GetOtp,
  });
  const { handleSubmit, register, getValues } = useForm();
  //send otp handler
  const SendOtpHandler = async (data) => {
    try {
      await mutateAsync(data);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  //if user is logged take them to the home page
  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user,navigate]);

  // resend handler
  const handleResendOtp = async () => {
    const phoneNumber = getValues("phoneNumber");
    try {
      await mutateAsync({ phoneNumber });
      toast.success("کد تایید مجدداً ارسال شد");

      setResendCounter((prev) => prev + 1);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(SendOtpHandler)}
            setStep={setStep}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            key={resendCounter}
            onResendOtp={handleResendOtp}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((step) => step - 1)}
            otpResponse={otpResponse}
            isSendingOtp={isSendingOtp}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}
