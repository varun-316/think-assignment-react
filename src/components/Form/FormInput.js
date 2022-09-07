import React from "react";

const FormInput = ({
  type,
  id,
  className,
  requiredFlag,
  placeholder,
  name,
  value,
}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        id={id}
        className={className}
        required={requiredFlag}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </React.Fragment>
  );
};

export default FormInput;
