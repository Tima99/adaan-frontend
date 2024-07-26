import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import Input, { IWraper } from "../Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import OTPForm from "./OTPForm";

const LoginForm = () => {
  const [icon, setIcon] = useState();
  const [type, setType] = useState("password");
  const [loginType, setLoginType] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(true);
      setType("text");
    } else {
      setIcon(false);
      setType("password");
    }
  };

  function onSubmit() {}

  return loginType === "password" ? (
    <>
      <div className="flex justify-between items-center mx-5">
        <h1 className="font-bold text-2xl ">Log In</h1>
      </div>

      <form className="mx-5 space-y-2 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <IWraper register={register}>
          <Input type="email" name="email" label={"Email"}></Input>
          <div className="relative mb-4">
            <Input type={type} name="password" label={"Password"}></Input>
            <span
              className="absolute right-2 top-[68%] -translate-y-1/2 transform "
              onClick={handleToggle}
            >
              {icon ? (
                <IoEyeOffOutline
                  className="cursor-pointer"
                  size={20}
                  color="lightgrey"
                />
              ) : (
                <MdOutlineRemoveRedEye
                  className="cursor-pointer"
                  size={20}
                  color="lightgrey"
                />
              )}
            </span>
          </div>
        </IWraper>

        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <Button type="button" onClick={() => setLoginType("otp")}>
            Login via OTP
          </Button>
        </div>
      </form>
    </>
  ) : (
    <div className="flex flex-col">
      <OTPForm noRegistrationLink={true} />
    </div>
  );
};

export default LoginForm;
