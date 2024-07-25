/* eslint-disable react/prop-types */

function Button({ children, className, ...rest }) {
    return (
        <button
            {...rest}
            className={`py-2 px-6 font-bold text-white bg-primary rounded-md outline-none ${className}`}
        >
            {children}
        </button>
    );
}

function Right({ ...rest }) {
    return (
        <div className="w-full flex justify-end">
            <Button {...rest}></Button>
        </div>
    );
}

Button.Right = Right;

export default Button;
