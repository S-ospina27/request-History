import React from "react";

const PrioritySelect = () => {
  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>Seleccione prioridad</label>
      <select className={"form__select-name"} required>
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>
    </div>
  );
};

export default PrioritySelect;
