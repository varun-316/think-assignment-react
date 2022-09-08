import React, { useState, useContext, useEffect } from "react";
import { FormContext } from "../Form";

const FormInput = (
  { type, id, className, requiredFlag, placeholder, name, value },
  key
) => {
  const [val, setVal] = useState(value ? value : "");
  const [contextVal, setContext] = useContext(FormContext);
  useEffect(() => {
    const contextObj = {
      ...contextVal,
    };
    contextObj[`${name}`] = val;
    setContext(contextObj);
  }, [val]);
  const handleOnChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <React.Fragment>
      <input
        type={type}
        id={id}
        className={className}
        required={requiredFlag}
        placeholder={placeholder}
        name={name}
        value={val}
        key={key}
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
    </React.Fragment>
  );
};

export default FormInput;
