import React from "react";
import AddInput from "../components/AddInput";

import { useForm } from "react-hook-form";

const AddForm = props => {
  const { register, handleSubmit, errors } = useForm();
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
          minLength: { value: 3, message: "too short" },
          maxLength: { value: 10, message: "error message" }
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
          minLength: { value: 3, message: "too short" },
          maxLength: { value: 10, message: "error message" }
        }}
      />{" "}
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
            pattern: /^[A-Za-z]+$/i
          }}
      />
      <div className="add__input-field">
        <label className="add__label">Addresa</label>
        <input
          className="add__input"
          type="text"
          placeholder="Zámek 1"
          name="address"
          ref={register({
            required: { value: true, message: "povinné pole" },
            maxLength: 15
          })}
        />
        {errors.address ? (
          <span className="add_error">{errors.address.message}</span>
        ) : (
          <span>empty</span>
        )}
      </div>
      <div className="add__input-field">
        <label className="add__label">PSČ</label>
        <input
          className="add__input"
          type="text"
          placeholder="691 42 Valtice"
          name="postalCode"
          ref={register({
            required: { value: true, message: "povinné pole" },
            minLength: 5,
            maxLength: 5,
            pattern: /^[0-9]+$/i
          })}
        />
        {errors.postalCode ? (
          <span className="add_error">{errors.postalCode.message}</span>
        ) : (
          <span>empty</span>
        )}
      </div>
      <div className="add__input-field">
        <label className="add__label">Telefon</label>
        <input
          className="add__input"
          type="tel"
          placeholder="606 028 574"
          name="phoneNumber"
          ref={register({
            required: { value: true, message: "povinné pole" }
          })}
        />
        {errors.phoneNumber ? (
          <span className="add_error">{errors.phoneNumber.message}</span>
        ) : (
          <span>empty</span>
        )}
      </div>
      <div className="add__input-field">
        <label className="add__label">Web URL</label>
        <input
          className="add__input"
          type="url"
          placeholder="http://www.vinarskecentrum.cz/salon-vin/oteviraci-doba-programy/"
          name="url"
          ref={register({
            required: { value: true, message: "povinné pole" }
          })}
        />
        {errors.url ? (
          <span className="add_error">{errors.url.message}</span>
        ) : (
          <span>empty</span>
        )}
      </div>
      <div className="add__input-field">
        <label className="add__label">Webové Stránky</label>
        <input
          className="add__input"
          type="text"
          placeholder="vinarskecentrum.cz"
          name="website"
          ref={register({
            required: { value: true, message: "povinné pole" }
          })}
        />
        {errors.website ? (
          <span className="add_error">{errors.website.message}</span>
        ) : (
          <span>empty</span>
        )}
      </div>
      <div className="add__input-field">
        <label className="add__label">Email</label>
        <input
          className="add__input"
          type="text"
          placeholder="Email"
          name="email"
          ref={register({
            required: { value: true, message: "povinné pole" },
            pattern: /^\S+@\S+$/i
          })}
        />
        {errors.email ? (
          <span className="add_error">{errors.email.message}</span>
        ) : (
          <span>empty</span>
        )}
      </div>
      <div className="add__input-field">
        <button className="add__result" type="submit">
          Uložit
        </button>
      </div>
    </form>
  );
};

export default AddForm;
