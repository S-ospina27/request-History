const PrioritySelect = ({ value, setValue, required }) => {
  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>Seleccione Tipo</label>
      <select
        style={{ width: "98%" }}
        className={"form__select-name"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
        <option value={""}>
          {"Seleccione"}
        </option>

        {["Nuevo", "Novedad"].map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PrioritySelect;
