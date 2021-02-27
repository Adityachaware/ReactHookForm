import React from "react";
import BasicForm from "./BasicForm";
import ContactForm from "./ContactForm";
import ComplexForm from "./ComplexForm";

const Form = (props) => {
    const {methods} = props;
    const {handleSubmit} = methods;
    console.log(props,'props');

    const onSubmit = data =>console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BasicForm></BasicForm>
      <ContactForm></ContactForm>
      <ComplexForm></ComplexForm>
      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;
