import GodFatherBanner from "../assets/godFather.jpg";
import GodFatherAk from "../assets/ak47.jpg";
import Smash from "../assets/smash.jpg";
import getRandomNumber from "./../utils/getRandomNumber";
import RegisterForm from "./../components/screens/RegisterForm";

const Gallery = [Smash, GodFatherAk, GodFatherBanner];

const Register = () => {
  return (
    <div className="w-full h-screen flex flex-row-reverse">
      <RegisterForm />

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
