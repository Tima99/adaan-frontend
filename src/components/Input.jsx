/* eslint-disable react/prop-types */

import { createContext, useContext, useId } from "react";

const InputContext = createContext();

export function IWraper({ children, ...rest }) {
  return (
    <InputContext.Provider value={rest}>
      <div className="flex gap-4 flex-col">{children}</div>
    </InputContext.Provider>
  );
}

function Input({ label, name, validation, ...rest }) {
  const {
    errors,
    register,
    validation: defaultValidation,
  } = useContext(InputContext);
  const id = useId();

  return (
    <label htmlFor={id}>
      <span className="font-semibold text-sm">{label}</span>
      <div>
        <input
          id={id}
          className={"p-2 border-primary border outline-none rounded-md w-full"}
          {...rest}
          {...register(name, validation || defaultValidation)}
        />
        {errors?.[name]?.type === "required" && (
          <p className="text-red-500 text-xs">This field is required</p>
        )}
      </div>
    </label>
  );
}

export default Input;
