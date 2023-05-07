import React from "react";
import CustomForm from "../molecules/form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-3">
      <CustomForm
        heading="login"
        className="w-3/4 md:w-1/2"
        fieldData={formData}
        validationSchema={validationSchema}
      />
      <h6>
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="cursor-pointer text-primary hover:underline"
        >
          Register
        </span>
      </h6>
    </div>
  );
};

export default LoginComponent;
