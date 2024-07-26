/* eslint-disable react/prop-types */
import Button from "../Button";
import Input, { IWraper } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../../validations/Register";
import { FORM_ENUMS } from "./AuthForm";
import Heading from "../Headings";

const RegisterForm = ({ setFormState }) => {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  function submitHandler(data) {
    console.log(data);
    setFormState(FORM_ENUMS.OTP);
  }

  return (
    <>
      <div className="text-xl mb-6 flex justify-between items-center">
        <Heading>Register</Heading>
        <span
          onClick={() => setFormState(FORM_ENUMS.LOGIN)}
          className="cursor-pointer hover:underline"
        >
          Login
        </span>
      </div>

      <form onSubmit={handleSubmit(submitHandler)}>
        <IWraper errors={errors} register={register}>
          <Input label={"Name"} type="text" name="name" />
          <Input label={"Phone"} type="number" name="phone" />
          <Input label={"Email"} type="email" name="email" />
          <Input label={"Password"} type="password" name="password" />
          <Input
            label={"Re-Type Password"}
            type="password"
            name="confirmPassword"
          />
        </IWraper>

        <Button.Right className={"my-7"} type="submit">
          Save
        </Button.Right>
      </form>
    </>
  );
};

export default RegisterForm;
