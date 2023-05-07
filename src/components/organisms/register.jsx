import React from "react";
import CustomForm from "../molecules/form";
import * as Yup from "yup";

const RegisterComponent = () => {
  const formData = [
    {
      label: "What is your full name?",
      placeholder: "Enter full name here",
      required: true,
      name: "name",
    },
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
    {
      label: "What is your phone number?",
      placeholder: "Enter phone number here",
      required: true,
      name: "phone",
      type: "phone",
    },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(5),
    phone: Yup.number().min(10).max(10),
  });

  return (
    <div className="flex justify-center items-center h-full">
      <CustomForm
        validationSchema={validationSchema}
        heading="register"
        className="w-3/4 md:w-1/2"
        fieldData={formData}
      />
    </div>
  );
};

export default RegisterComponent;
