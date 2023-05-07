import React from "react";
import CustomForm from "../molecules/form";
import * as Yup from "yup";

const LoginComponent = () => {
  const formData = [
    {
      label: "What is your email?",
      placeholder: "Enter email here",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "What is your password?",
      placeholder: "Enter password here",
      required: true,
      name: "password",
      type: "password",
    },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(5),
  });

  return (
    <div className="flex justify-center items-center h-full">
      <CustomForm
        heading="login"
        className="w-3/4 md:w-1/2"
        fieldData={formData}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default LoginComponent;
