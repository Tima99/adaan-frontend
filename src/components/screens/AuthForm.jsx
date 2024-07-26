import Modal from "../Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

const AuthForm = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return openLoginModal ? (
    <Modal onClose={setOpenLoginModal}>
      <LoginForm></LoginForm>
    </Modal>
  ) : (
    <RegisterForm toLogin={() => setOpenLoginModal(true)} />
  );
};

export default AuthForm;
