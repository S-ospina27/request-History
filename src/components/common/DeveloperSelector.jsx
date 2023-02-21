import axios from "axios";
import React, { useEffect, useState } from "react";
import RoutesList from "../tools/RoutesList";
import { getHeader } from "../tools/SessionSettings";

const DeveloperSelector = ({ value, setValue, required,ignore=[],style={} }) => {
  const [developers, setDevelopers] = useState([]);

  const readDeveloperSelector = () => {
    axios.get(RoutesList.api.developer.read.select,getHeader()
      ).then((res) => {
        // console.log(res.data)
        setDevelopers(!res.data.status ? res.data : []);
      });
  };

  useEffect(() => {
    readDeveloperSelector();
  }, []);
  return (
    
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
   
      <label className={"form__label-name"}>Desarrolladores</label>
      <select
        style={style}
        className={"form__select-name"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
        <option value={""}>seleccione</option> 
        {developers.map((dev,index)=>
         !ignore.includes(dev.states_name) && (
          <option key={index} value={dev.iddevelopers}>
            {dev.fulldeveloper}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DeveloperSelector;
