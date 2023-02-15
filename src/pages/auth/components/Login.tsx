import { useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { DefaultInput, PasswordInput } from "../../../components/inputs/Input";

const Login = () => {
  interface LoginState {
    email: string;
    password: string;
  }
  const [userDetails, setUserDetails] = useState<LoginState>({
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex flex-col w-full sm:w-10/12 md:w-1/2 lg:w-1/3  bg-white py-8 px-10 sm:shadow-lg"
    >
      <DefaultInput
        style="mb-5"
        type="email"
        name="email"
        label="Email"
        required={true}
        placeholder="Email"
      />
      <PasswordInput
        style="mb-5"
        name="password"
        label="Password"
        required={true}
        placeholder="*******"
        infoText="Must be at least 7 characters"
      />

      <PrimaryButton
        btnText="Sign Up"
        style="py-2.5 font-medium text-white"
        submitting={submitting}
      />
    </form>
  );
};

export default Login;
