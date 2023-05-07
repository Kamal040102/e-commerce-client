import React from "react";
import CustomInput from "../atoms/input";
import { useFormik } from "formik";
import classNames from "classnames";

const CustomForm = ({
  heading,
  fieldData = [],
  validationSchema = {},
  className,
}) => {
  const [initialValues, setInitialValues] = React.useState({});

  React.useEffect(() => {
    fieldData?.map((field) => {
      initialValues[field.name] = "";
      setInitialValues(initialValues);
    });
  }, []);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema,
  });
  return (
    <div className={classNames(className, "flex flex-col gap-y-3")}>
      {heading && (
        <h3 className="text-center text-xl font-semibold underline tracking-wide">
          {heading?.toUpperCase()}
        </h3>
      )}
      <form
        className={classNames("flex flex-col gap-y-5")}
        onSubmit={formik.handleSubmit}
      >
        {fieldData?.map((field, key) => {
          return (
            <CustomInput
              key={key}
              label={field?.label}
              required={field?.required}
              type={field?.type}
              placeholder={field?.placeholder}
              error={formik.touched[field?.name] && formik.errors[field?.name]}
              name={field?.name}
              formikOnChange={formik.handleChange}
              value={formik.values[field?.name]}
            />
          );
        })}
        <button className="btn btn-primary w-full">{heading}</button>
      </form>
    </div>
  );
};

export default CustomForm;
