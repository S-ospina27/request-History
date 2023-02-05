import React, { useState } from "react";
const PrioritySelect = ({ value, setValue, required }) => {

  const [prioritys, setPrioritys] = useState(["Alta","Media","Baja"]);
  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>Seleccione prioridad</label>
      <select
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
