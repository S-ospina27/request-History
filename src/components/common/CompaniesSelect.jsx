import axios from "axios";
import React, { useEffect, useState } from "react";
import RoutesList from "../tools/RoutesList";
import { getHeader } from "../tools/SessionSettings";

const CompaniesSelect = ({
    value,
    setValue,
    required,
    setRender,
    ignore=[],
    disabled,
    style={}
  }) => {
  const [companies, setCompanies] = useState([]);

  const readCompaniessSelector = () => {
    axios
      .get(RoutesList.api.companies.read.read_companies_selector, getHeader())
      .then((res) => {
        setCompanies(!res.data.status ? res.data : []);
      });
  };

  useEffect(() => {
    readCompaniessSelector();
  }, []);

  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>{" Compañias"}</label>

      <select
        style={!style ?{ width: "98%" } : style}
        className={"form__select-name"}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          if (![null, ""].includes(e.target.value)) {
            setValue(e.target.value);
            setRender(false);
            setTimeout(() => setRender(true), 100);
          } else {
            setValue(e.target.value);
            setRender(false);
          }
        }}
        required={required}
      >
        <option value={""}>{"Seleccione"}</option>

        {companies.map((companie, index) =>
          !ignore.includes(companie.states_name) &&  (
          <option key={index} value={companie.idcompanies}>
            {`${companie.companies_nit} - ${companie.companies_business_name} `}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompaniesSelect;
