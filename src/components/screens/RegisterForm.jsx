import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../../validations/Register";
import Button from "../Button";
import Input, { IWraper } from "../Input";
import Modal from "../Modal";
import LoginForm from "./LoginForm";
import { useState } from "react";
import GodFatherLogo from "../../assets/the-godfather.svg";

const RegisterForm = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);

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

  return openLoginModal ? (
    <Modal onClose={setOpenLoginModal}>
      <LoginForm></LoginForm>
    </Modal>
  ) : (
    <div className="bg-white 2xl:flex-[0.5] flex-[0.6] p-6 flex flex-col">
      <h1 className="-translate-y-10 flex justify-center">
        <img src={GodFatherLogo} alt="" width={220} />
      </h1>
      <div className="text-xl mb-6 flex justify-between items-center">
        <h1 className="text-2xl">Register</h1>
        <span
          onClick={() => setOpenLoginModal(true)}
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

        <Button.Right className={"my-4"} type="submit">
          Save
        </Button.Right>
      </form>
    </div>
  );
};

export default RegisterForm;
