/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Heading from "../Headings";
import Button from "../Button";
import { FORM_ENUMS } from "./AuthForm";

const OTPForm = ({ setFormState }) => {
  const [otpBoxes, setOtpBoxes] = useState(Array(6).fill(null));
  const inputRefs = useRef([]);

  function handleOtpInputs(index) {
    return (ev) => {
      const { value } = ev.target;

      const enteredValue = otpBoxes.toSpliced(index, 1, value);
      const newValue = enteredValue[index];

      newValue?.length <= 1 && setOtpBoxes(enteredValue);

      const focusIndex = newValue === "" ? index - 1 : index + 1;
      inputRefs.current[focusIndex]?.focus();
    };
  }

  function onVerifyOtp() {
    alert(otpBoxes.join(" "));
  }

  return (
    <>
      <Heading>
        <div className="flex gap-2 items-center justify-between">
          <span>OTP</span>
          <span
            onClick={() => setFormState(FORM_ENUMS.REGISTER)}
            className="text-base hover:underline cursor-pointer"
          >
            New Registration ?
          </span>
        </div>
      </Heading>
      <div className="flex gap-4 justify-center my-8">
        {otpBoxes.map((_, index) => {
          return (
            <input
              autoFocus={index === 0}
              type="number"
              key={index}
              className="p-4 w-16 h-16 border border-primary outline-none text-center text-2xl font-medium"
              onChange={handleOtpInputs(index)}
              value={otpBoxes[index]}
              placeholder="0"
              ref={(ele) => (inputRefs.current[index] = ele)}
            />
          );
        })}
      </div>

      <Button onClick={onVerifyOtp} className={"mx-[12%]"}>
        Verify
      </Button>
    </>
  );
};

export default OTPForm;
