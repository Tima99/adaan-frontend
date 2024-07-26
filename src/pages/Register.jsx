import Input, { IWraper } from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../validations/Register";
import GodFatherLogo from "../assets/the-godfather.svg";
import GodFatherBanner from "../assets/godFather.jpg";
import GodFatherAk from "../assets/ak47.jpg";
import Smash from "../assets/smash.jpg";
import getRandomNumber from './../utils/getRandomNumber';

const Gallery = [GodFatherAk, GodFatherBanner, Smash];

const Register = () => {
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
    <div className="w-full h-screen flex">
      <div className="bg-white 2xl:flex-[0.5] flex-[0.6] p-6 flex flex-col">
        <h1 className="-translate-y-10 flex justify-center">
          <img src={GodFatherLogo} alt="" width={220} />
        </h1>
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
      </div>

      <div className="bg-green-400 flex-1">
        <img
          src={Gallery[getRandomNumber()]}
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Register;
