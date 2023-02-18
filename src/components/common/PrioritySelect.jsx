import React, { useState } from "react";
const PrioritySelect = ({ value, setValue, required }) => {

  const [prioritys, setPrioritys] = useState(["Nuevo","Novedad"]);
  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>Seleccione Tipo</label>
      <select
       style={{width:"98%"}}
        className={"form__select-name"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
      {prioritys.map( (item, index)=>(
        <option 
          key={index}
          value={item}
        >{item}
        </option>
      ))


      }
      </select>
    </div>
  );
};

export default PrioritySelect;
