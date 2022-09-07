import React from "react";
import FormInput from "./Form/FormInput";

const Form = ({ formData, action, id, method }) => {
  return (
    <form action={action} id={id} method={method}>
      {formData.map((element) => {
        return <FormInput {...element} />;
      })}
    </form>
  );
};

export default Form;
