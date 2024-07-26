import Input, { IWraper } from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

const Register = () => {
  const form = useForm();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = form;

  function submitHandler(data) {
    console.log(data);
  }

  return (
    <div className="w-full h-screen flex">
      <div className="bg-white flex-[0.6] p-6 flex flex-col gap-16">
        <h1>Mirror</h1>
        <div className="">
          <h2 className="text-2xl mb-6">Register</h2>

          <form onSubmit={handleSubmit(submitHandler)}>
            <IWraper
              errors={errors}
              register={register}
              validation={{ required: true }}
            >
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
      </div>

      <div className="bg-green-400 flex-1"></div>
    </div>
  );
};

export default Register;
