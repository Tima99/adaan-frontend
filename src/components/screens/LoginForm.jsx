import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import Input, { IWraper } from "../Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import OTPForm from "./OTPForm";
import { zodResolver } from "@hookform/resolvers/zod";
import schema, { emailSchema } from "../../validations/Login";

const LoginForm = () => {
    const [icon, setIcon] = useState();
    const [type, setType] = useState("password");
    const [loginType, setLoginType] = useState("password");

    const getSchema = () => (loginType === "password" ? schema : emailSchema);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm({
        resolver: zodResolver(getSchema()),
    });

    const handleToggle = () => {
        if (type === "password") {
            setIcon(true);
            setType("text");
        } else {
            setIcon(false);
            setType("password");
        }
    };

    function onSubmit(data) {
        // console.log(data);
        if (loginType === "password") {
            alert(JSON.stringify(data, null, 2));
        } else {
            alert(JSON.stringify(data, null, 2));
            setLoginType("otp");
        }
    }

    return loginType === "otp" ? (
        <div className="flex flex-col">
            <OTPForm
                toLink={() => setLoginType("password")}
                linkText="Password Login ?"
            />
        </div>
    ) : (
        <>
            <div className="flex justify-between items-center mx-5">
                <h1 className="font-bold text-2xl ">Log In</h1>
            </div>

            <form className="mx-5 mt-4" onSubmit={handleSubmit(onSubmit)}>
                <IWraper register={register} errors={errors}>
                    <Input type="email" name="email" label={"Email"}></Input>
                    {loginType === "password" && (
                        <div className="relative">
                            <Input
                                type={type}
                                name="password"
                                label={"Password"}
                            ></Input>
                            <span
                                className="absolute right-2 top-[68%] -translate-y-1/2 transform "
                                onClick={handleToggle}
                            >
                                {icon ? (
                                    <IoEyeOffOutline
                                        className="cursor-pointer"
                                        size={20}
                                        color="lightgrey"
                                    />
                                ) : (
                                    <MdOutlineRemoveRedEye
                                        className="cursor-pointer"
                                        size={20}
                                        color="lightgrey"
                                    />
                                )}
                            </span>
                        </div>
                    )}
                </IWraper>

                <div className="flex gap-4 mt-6">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>

                    <Button.Outline
                        type="button"
                        onClick={() =>
                            setLoginType(
                                loginType === "password"
                                    ? "no-password"
                                    : "password"
                            )
                        }
                        key={loginType}
                    >
                        {loginType === "password"
                            ? "Login via OTP"
                            : "Password Login ?"}
                    </Button.Outline>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
