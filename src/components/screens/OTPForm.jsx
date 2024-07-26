import { useRef, useState } from "react";
import Heading from "../Headings";
import Button from "../Button";

const OTPForm = () => {
  const [otpBoxes, setOtpBoxes] = useState(Array(6).fill(null));
  const inputRefs = useRef([]);

  function handleOtpInputs(index) {
    return (ev) => {
      const { value } = ev.target;

      setOtpBoxes(otpBoxes.toSpliced(index, 1, value));
      inputRefs.current[index + 1].focus();
    };
  }

  function onVerifyOtp() {
    alert(otpBoxes.join(" "));
  }

  return (
    <>
      <Heading>OTP</Heading>
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
