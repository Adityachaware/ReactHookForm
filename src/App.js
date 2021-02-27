import React from "react";
import "./styles/App.scss";
import classNames from "classnames";
import { useForm, FormProvider } from "react-hook-form";
import Form from "./Form";

function App() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="container py-3 w-75">
        <Form methods={methods}></Form>
      </div>
    </FormProvider>
  );
}

export default App;
