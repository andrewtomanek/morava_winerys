import React from 'react';
import { CSSTransition } from "react-transition-group";
import database from "../data/db";
import "../App.css";
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className="add__container">

    <form className="add__form" onSubmit={handleSubmit(onSubmit)}>
      <label>zeměpisná šířka</label>
      <input className="add__input" type="number" placeholder="lat" name="lat" ref={register({required: true, minLength: 5, maxLength: 10})} />
      {errors.lat && 'lat is required'}
      <label>zeměpisná délka</label>
      <input className="add__input" type="number" placeholder="lng" name="lng" ref={register({required: true, maxLength: 10})} />
      <label>Název </label>
      <input className="add__input" type="text" placeholder="název" name="name" ref={register({required: true, minLength: 5, maxLength: 20,pattern: /^[A-Za-z]+$/i})} />
      {errors.name && errors.name.type + '  xxxxx  ' + errors.name.message}
      <label>Addresa</label>
      <input className="add__input" type="text" placeholder="addresa" name="address" ref={register({required: true, maxLength: 15})} />
      <label>PSČ</label>
      <input className="add__input" type="text" placeholder="postalCode" name="postalCode" ref={register({required: true, minLength: 5, maxLength: 5,pattern: /^[0-9]+$/i})} />
      <label>Telefon</label>
      <input className="add__input" type="tel" placeholder="phoneNumber" name="phoneNumber" ref={register({required: true})} />
      <label>Web URL</label>
      <input className="add__input" type="url" placeholder="url" name="url" ref={register({required: true})} />
      <label>Webové Stránky</label>
      <input className="add__input" type="text" placeholder="website" name="website" ref={register({required: true})} />
      <label>Email</label>
      <input className="add__input" type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      {errors.Email && 'Email required'}
      <label>Uložit</label>
      <input className="add__submit" type="submit" />
    </form>
    </div>
  );
}