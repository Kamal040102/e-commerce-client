import React from "react";
import CustomForm from "../molecules/form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const navigate = useNavigate();
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
    <div className="flex flex-col justify-center items-center h-full gap-y-3">
      <CustomForm
        validationSchema={validationSchema}
        heading="register"
        className="w-3/4 md:w-1/2"
        fieldData={formData}
      />
      <h6>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="cursor-pointer text-primary hover:underline"
        >
          Login
        </span>
      </h6>
    </div>
  );
};

export default RegisterComponent;
