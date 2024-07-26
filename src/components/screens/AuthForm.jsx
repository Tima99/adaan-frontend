import Modal from "../Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FORM_ENUMS = {
  LOGIN: "login",
  REGISTER: "register",
  OTP: "otp",
};

const AuthForm = () => {
  const [formState, setFormState] = useState(FORM_ENUMS.REGISTER);

  return formState === FORM_ENUMS.LOGIN ? (
    <Modal onClose={() => setFormState(FORM_ENUMS.REGISTER)}>
      <LoginForm></LoginForm>
    </Modal>
  ) : formState === FORM_ENUMS.REGISTER ? (
    <RegisterForm setFormState={setFormState} />
  ) : (
    <div>OTP</div>
  );
};

export default AuthForm;
