import axios from "axios";
import React, { useEffect, useState } from "react";
import RoutesList from "../tools/RoutesList";
import { getHeader } from "../tools/SessionSettings";

const StatesSelector = ({
    value,
    setValue,
    required,
    ignore=[],
    style={}
  }) => {

  const [states, setStates] = useState([]);

  const readStatesSelector = () => {
    axios.get(RoutesList.api.companies.requirements.read.read_StateSelector,getHeader()
      ).then((res) => {

        setStates(res.data)
      });
  };

  useEffect(() => {
    readStatesSelector();
  }, []);
  return (

    <div className="form__demo-container-select-type" style={{ marginBottom: "20px" }}>

      <label className={"form__label-name"}>Estado</label>
      <select
        style={style}
        className={"form__select-name"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
      <option value={""}>Seleccione</option>
        {states.map((item)=>
         !ignore.includes(item.states_name) && (
          <option key={item.idstates} value={item.idstates}>
            {item.states_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatesSelector;
