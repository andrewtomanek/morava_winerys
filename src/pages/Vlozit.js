import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import AddForm from "../components/AddForm";
import InputCard from "../components/InputCard";
import "../App.css";
import { v4 as uuidv4 } from "uuid";

export default function Form({ history }) {
  let [companyDatabase, setCompanyDatabase] = useState(
    JSON.parse(localStorage.getItem("businessList")) || null
  );
  const onSubmit = data => {
    let businessList = localStorage.getItem("businessList");
    let businessArray = [];
    if (businessList) {
      businessArray = JSON.parse(businessList);
    }

    businessArray.push({ ...data, businessId: uuidv4() });
    localStorage.setItem("businessList", JSON.stringify(businessArray));
    setCompanyDatabase(businessArray);
  };

  const deleteCompany = pickedCompany => {
    let filteredCompanys = companyDatabase.filter(
      item => item.businessId !== pickedCompany.businessId
    );
    localStorage.setItem("businessList", JSON.stringify(filteredCompanys));
    setCompanyDatabase(filteredCompanys);
  };

  return (
    <div className="add__container">
 <AddForm onSubmit={onSubmit}/>
      <div className="list__container">
        {companyDatabase &&
          companyDatabase.map((elem) => (
            <InputCard item={elem} pickItem={deleteCompany} buttonLabel={"Smazat"} key={elem.businessId}/>
            ))}
      </div>
            <button onClick={() => history.push("/upload")}>Odeslat</button>
    </div>
  );
}
