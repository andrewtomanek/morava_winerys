import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import database from "../data/db";
import "../App.css";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export default function Form({ history }) {
  let [companyDatabase, setCompanyDatabase] = useState(
    JSON.parse(sessionStorage.getItem("businessList")) || null
  );
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    let businessList = sessionStorage.getItem("businessList");
    let businessArray = [];
    if (businessList) {
      businessArray = JSON.parse(businessList);
    }

    businessArray.push({ ...data, businessId: uuidv4() });
    sessionStorage.setItem("businessList", JSON.stringify(businessArray));
    setCompanyDatabase(businessArray);
  };

  useEffect(() => {
    console.log(errors);
  });

  const deleteCompany = pickedCompany => {
    let filteredCompanys = companyDatabase.filter(
      item => item.businessId !== pickedCompany.businessId
    );
    sessionStorage.setItem("businessList", JSON.stringify(filteredCompanys));
    setCompanyDatabase(filteredCompanys);
  };

  return (
    <div className="add__container">
      <form className="add__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="add__input-field">
          <label className="add__label">Zeměpisná šířka</label>
          <input
            className="add__input"
            type="number"
            placeholder="48.7396201"
            name="lat"
            ref={register({
              required: { value: true, message: "povinné pole" },
              minLength: { value: 3, message: "too short" },
              maxLength: { value: 10, message: "error message" }
            })}
          />
          {errors.lat ? (
            <span className="add_error">{errors.lat.message}</span>
          ) : (
            <span>empty</span>
          )}
        </div>
        <div className="add__input-field">
          <label className="add__label">Zeměpisná délka</label>
          <input
            className="add__input"
            type="number"
            placeholder="16.7554235"
            name="lng"
            ref={register({
              required: { value: true, message: "povinné pole" },
              maxLength: 10
            })}
          />
          {errors.lng ? (
            <span className="add_error">{errors.lng.message}</span>
          ) : (
            <span>empty</span>
          )}
        </div>
        <div className="add__input-field">
          <label className="add__label">Název </label>
          <input
            className="add__input"
            type="text"
            placeholder="Národní vinařské centrum"
            name="name"
            ref={register({
              required: { value: true, message: "povinné pole" },
              minLength: 5,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors.name ? (
            <span className="add_error">{errors.name.message}</span>
          ) : (
            <span>empty</span>
          )}
        </div>
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
      <button onClick={() => history.push("/upload")}>Odeslat</button>

      <div className="list__container">
        {companyDatabase &&
          companyDatabase.map((elem, index) => (
            <ul className="list__box" key={index}>
              <li className="text__field">{elem.businessId}</li>
              <li className="text__field">{elem.name}</li>
              <li className="text__field">{elem.lat}</li>
              <li className="text__field">{elem.lng}</li>
              <li className="text__field">{elem.address}</li>
              <li className="text__field">{elem.postalCode}</li>
              <li className="text__field">{elem.phoneNumber}</li>
              <li className="text__field">{elem.url}</li>
              <li className="text__field">{elem.website}</li>
              <li className="text__field">{elem.email}</li>
              <li className="text__field">
                <button onClick={() => deleteCompany(elem)}>delete</button>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
}
