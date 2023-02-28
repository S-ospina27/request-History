import axios from "axios";
import React, { useEffect, useState } from "react";
import RoutesList from "../tools/RoutesList";
import { getHeader } from "../tools/SessionSettings";

const RequirementsSelector = ({ value, setValue, required, idcompanies }) => {
  const [requirementsSelector, setRequirementsSelector] = useState([]);

  const readRequirementsSelector = () => {
    if (![undefined, null, ""].includes(idcompanies)) {
      const id = idcompanies;
      const route =
        RoutesList.api.companies.requirements.read.read_requirementSelector;

      axios.get(route + `/${id}`, getHeader()).then((res) => {
        // console.log(res.data);
        setRequirementsSelector(!res.data.status ? res.data : []);
      });
    }
  };

  useEffect(() => {
    readRequirementsSelector();
  }, []);

  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>{"Requerimiento"}</label>

      <select
        className={"form__select-name"}
        style={{ width: "98%" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
        <option value={""}>{"Seleccione"}</option>

        {requirementsSelector.map((requirement, index) => (
          <option key={index} value={requirement.idrequirements}>
            {`RQ-${requirement.idrequirements} ${requirement.requirements_name}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RequirementsSelector;
