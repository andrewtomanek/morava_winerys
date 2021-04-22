import React, { useState } from "react";
import AddForm from "../components/forms/AddForm";
import InputCard from "../components/cards/InputCard";

import { v4 as uuidv4 } from "uuid";

export default function Form({ history }) {
  let [companyDatabase, setCompanyDatabase] = useState(
    JSON.parse(localStorage.getItem("businessList")) || null
  );
  const onSubmit = (data) => {
    let businessList = localStorage.getItem("businessList");
    let businessArray = [];
    if (businessList) {
      businessArray = JSON.parse(businessList);
    }

    businessArray.push({ ...data, businessId: uuidv4() });
    localStorage.setItem("businessList", JSON.stringify(businessArray));
    setCompanyDatabase(businessArray);
  };

  const deleteCompany = (pickedCompany) => {
    let filteredCompanys = companyDatabase.filter(
      (item) => item.businessId !== pickedCompany.businessId
    );
    localStorage.setItem("businessList", JSON.stringify(filteredCompanys));
    setCompanyDatabase(filteredCompanys);
  };

  return (
    <div className="add__container">
      <AddForm onSubmit={onSubmit} />
      {companyDatabase && (
        <>
          <div className="upload__box">
            {companyDatabase.map((elem) => (
              <InputCard
                item={elem}
                pickItem={deleteCompany}
                buttonLabel={"Smazat"}
                key={elem.businessId}
              />
            ))}
          </div>
          <button
            className="upload__button"
            onClick={() => history.push("/upload")}
            disabled={!companyDatabase}
          >
            Odeslat
          </button>
        </>
      )}
    </div>
  );
}
