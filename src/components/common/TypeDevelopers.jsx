import React, { useState } from "react";
const TypeDevelopers = ({ value, setValue, required ,style={} }) => {

  const [typedevelopers, setTypeDevelopers] = useState(["BACKEND","FRONTEND","FULLSTACK"]);
  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>Tipo</label>
      <select
       style={!style ?{width:"98%"} : style}
        className={"form__select-name"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
      <option value={""}>Seleccióne</option>
      {typedevelopers.map( (typedeveloper, index)=>(
        <option 
          key={index}
          value={typedeveloper}
        >{typedeveloper}
        </option>
      ))


      }
      </select>
    </div>
  );
};

export default TypeDevelopers;
