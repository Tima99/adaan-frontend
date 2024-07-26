import GodFatherLogo from "../assets/the-godfather.svg";
import GodFatherBanner from "../assets/godFather.jpg";
import GodFatherAk from "../assets/ak47.jpg";
import Smash from "../assets/smash.jpg";
import getRandomNumber from "./../utils/getRandomNumber";
import RegisterForm from "./../components/screens/RegisterForm";

const Gallery = [Smash, GodFatherAk, GodFatherBanner];

const Register = () => {
  return (
    <div className="w-full h-screen flex flex-row-reverse">
      <div className="bg-white 2xl:flex-[0.5] flex-[0.6] p-6 flex flex-col">
        <h1 className="-translate-y-10 flex justify-center">
          <img src={GodFatherLogo} alt="" width={220} />
        </h1>
        <RegisterForm />
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
