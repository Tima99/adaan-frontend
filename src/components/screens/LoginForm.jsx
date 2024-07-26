import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import Input, { IWraper } from "../Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";

const LoginForm = () => {
  const [icon, setIcon] = useState();
  const [type, setType] = useState("password");

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

  return (
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

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
