import React from "react";
import AddInput from "./AddInput";

import { useForm } from "react-hook-form";

const AddForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  console.log(errors);
  return (
    <form className="add__form" onSubmit={handleSubmit(props.onSubmit)}>
      <AddInput
        labelString={"Zeměpisná šířka"}
        name={"lat"}
        type={"number"}
        placeholder={"48.7396201"}
        register={register}
        errors={errors}
        validationOptions={{
          required: { value: true, message: "povinné pole" },
          minLength: { value: 2, message: "too short" },
          maxLength: { value: 10, message: "error message" },
        }}
      />
      <AddInput
        labelString={"Zeměpisná délka"}
        name={"lng"}
        type={"number"}
        placeholder={"16.7554235"}
        register={register}
        errors={errors}
        validationOptions={{
          required: { value: true, message: "povinné pole" },
          minLength: { value: 2, message: "too short" },
          maxLength: { value: 10, message: "error message" },
        }}
      />
      <AddInput
        labelString={"Název"}
        name={"name"}
        type={"text"}
        placeholder={"Národní vinařské centrum"}
        register={register}
        errors={errors}
        validationOptions={{
          required: { value: true, message: "povinné pole" },
          minLength: 5,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        }}
      />
      <AddInput
        labelString={"Addresa"}
        name={"address"}
        type={"text"}
        placeholder={"Zámek 1"}
        register={register}
        errors={errors}
        validationOptions={{
          required: { value: true, message: "povinné pole" },
          minLength: 5,
          maxLength: 20,
        }}
      />
      <AddInput
        labelString={"PSČ"}
        name={"postalCode"}
        type={"text"}
        placeholder={"691 42 Valtice"}
        register={register}
        errors={errors}
        validationOptions={{
          required: { value: true, message: "povinné pole" },
          minLength: { value: 5, message: "minimálně 5 čísel" },
          maxLength: { value: 20, message: "maximálně 20 znaků" },
        }}
      />
      <AddInput
        labelString={"Telefon"}
        name={"phoneNumber"}
        type={"tel"}
        placeholder={"606 028 574"}
        register={register}
        errors={errors}
        validationOptions={{
          required: { value: true, message: "povinné pole" },
          minLength: { value: 9, message: "minimálně 9 čísel" },
          maxLength: { value: 13, message: "maximálně 13 čísel" },
        }}
      />
      <AddInput
        labelString={"Web URL"}
        name={"url"}
        type={"url"}
        placeholder={
          "http://www.vinarskecentrum.cz/salon-vin/oteviraci-doba-programy/"
        }
        register={register}
        errors={errors}
        validationOptions={{
          required: { value: true, message: "povinné pole" },
          minLength: { value: 9, message: "minimálně 9 znaků" },
        }}
      />
      <AddInput
        labelString={"Webové Stránky"}
        name={"website"}
        type={"text"}
        placeholder={"vinarskecentrum.cz"}
        register={register}
        errors={errors}
        validationOptions={{
          required: { value: true, message: "povinné pole" },
          minLength: { value: 5, message: "minimálně 5 znaků" },
        }}
      />
      <AddInput
        labelString={"Email"}
        name={"email"}
        type={"text"}
        placeholder={"email@email.com"}
        register={register}
        errors={errors}
        validationOptions={{
          required: { value: true, message: "povinné pole" },
          pattern: /^\S+@\S+$/i,
        }}
      />
      <div className="add__input-field">
        <button className="add__button upload__button" type="submit">
          Uložit
        </button>
      </div>
    </form>
  );
};

export default AddForm;
