/* eslint-disable react/prop-types */

function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={`focus:scale-90 transition-all bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 border-2 border-blue-500 hover:border-blue-400 rounded-lg shadow-lg hover:shadow-md ${className}`}
    >
      {children}
    </button>
  );
}
function Right({ leftElement, ...rest }) {
  return (
    <div className="w-full flex justify-between items-center">
      {leftElement}
      <Button {...rest}></Button>
    </div>
  );
}

Button.Right = Right;

export default Button;
