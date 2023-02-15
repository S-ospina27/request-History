import axios from "axios";
import React, { useEffect, useState } from "react";
import RoutesList from "../tools/RoutesList";
import { getHeader } from "../tools/SessionSettings";
const RequirementsSelector = ({ value, setValue, required }) => {
  const [Selector, setSelector] = useState([]);

  const readRequirementsSelector = () => {
    axios.get(RoutesList.api.companies.requirements.read.read_requirementSelector,getHeader()
      ).then((res) => {
        // console.log(res.data)
        setSelector(res.data)
      });
  };

  useEffect(() => {
    readRequirementsSelector();
  }, []);
  return (
    
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
   
      <label className={"form__label-name"}>Seleccione requerimiento</label>
      <select
        className={"form__select-name"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
      {/* {console.log(selector)} */}
        {Selector.map((item)=> (
          <option key={item.idrequirements} value={item.idrequirements}>
            {`RQ-${item.idrequirements} ${item.requirements_name}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RequirementsSelector;
