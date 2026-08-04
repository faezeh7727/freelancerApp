/** @format */
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { GetOtp } from "../../Services/AuthService";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";
export default function AuthContainer() {
  const {
    isPending: isSendingOtp,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    //mutation function
    mutationFn: GetOtp,
  });

  const SendOtpHandler = async (data) => {
    try {
      const {message} = await mutateAsync(data);
      setStep(2);
      //toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [step, setStep] = useState(1);
  //const [phoneNumber, SetPhoneNumber] = useState("09181111111");
  const { handleSubmit, register, getValues } = useForm();
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
            onResendOtp={SendOtpHandler}
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
