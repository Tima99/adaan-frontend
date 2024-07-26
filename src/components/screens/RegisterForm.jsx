import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../../validations/Register";
import Button from "../Button";
import Input, { IWraper } from "../Input";

const RegisterForm = () => {
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
  }

  return (
    <div>
      <h2 className="text-2xl mb-6">Register</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <IWraper errors={errors} register={register}>
          <Input label={"Email"} type="email" name="email" />
          <Input label={"Password"} type="password" name="password" />
          <Input
            label={"Re-Type Password"}
            type="password"
            name="confirmPassword"
          />
        </IWraper>

        <Button.Right className={"my-4"} type="submit">
          Save
        </Button.Right>
      </form>
    </div>
  );
};

export default RegisterForm;
