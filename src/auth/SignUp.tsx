import { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { DefaultInput, PasswordInput } from "../components/inputs/Input";

const SignUp = () => {
  interface SignUpState {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }
  const [userDetails, setUserDetails] = useState<SignUpState>({
    firstname: "",
    lastname: "",
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
    <div className="flex w-full justify-center items-center">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col w-full sm:w-10/12 md:w-1/2 lg:w-1/3  bg-white py-8 px-10 sm:shadow-md"
      >
        <DefaultInput
          style="mb-5"
          type="text"
          name="firstname"
          label="Firstname"
          required={true}
          placeholder="Enter your name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <DefaultInput
          style="mb-5"
          type="text"
          name="lastname"
          label="Lastname"
          required={true}
          placeholder="Enter your name"
          onChange={() => {}}
        />

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
    </div>
  );
};

export default SignUp;
