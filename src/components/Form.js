import React, { createContext } from "react";
import FormInput from "./Form/FormInput";

export const FormContext = createContext();

const Form = ({ formData, handleOnSubmit, id, method, context }) => {
  return (
    <FormContext.Provider value={context}>
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
        id={id}
        method={method}
      >
        {formData.map((element, i) => {
          return <FormInput {...element} key={i} />;
        })}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
