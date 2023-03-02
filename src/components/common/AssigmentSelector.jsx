import axios from "axios";
import React, { useEffect, useState } from "react";
import RoutesList from "../tools/RoutesList";
import { getHeader } from "../tools/SessionSettings";

const AssigmentSelector = ({
  value,
  setValue,
  required,
  ignore = [],
  style = {},
}) => {
  const [assigments, setAsigments] = useState([]);

  const readAssigmentSelector = () => {
    axios
      .get(RoutesList.api.assignment.read.select, getHeader())
      .then((res) => {
        setAsigments(!res.data.status ? res.data : []);
      });
  };

  useEffect(() => {
    readAssigmentSelector();
  }, []);
  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>Asignaciónes</label>
      <select
        style={style}
        className={"form__select-name"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
        {/* {console.log(selector)} */}
        <option value={""}>{"Seleccione"}</option>
        {assigments.map(
          (assigment, index) =>
            !ignore.includes(assigment.states_name) && (
              <option key={index} value={assigment.idassignment_requirements}>
                {assigment.fullAsigments}
              </option>
            )
        )}
      </select>
    </div>
  );
};

export default AssigmentSelector;
