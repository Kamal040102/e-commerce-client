import React from "react";
import classNames from "classnames";

const CustomInput = ({
  label,
  type = "text",
  placeholder,
  error,
  required,
  onChange,
  formikOnChange,
  value,
  name,
  className,
}) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text">
            {label}
            {"   "}
            {required && <span className="text-error">*</span>}
          </span>
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={classNames(className, "input input-primary input-bordered")}
        onChange={
          formikOnChange ? formikOnChange : (e) => onChange(e.target.value)
        }
        value={value}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
};

export default CustomInput;
