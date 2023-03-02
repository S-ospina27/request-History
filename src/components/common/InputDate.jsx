import dayjs from "dayjs";
import React from "react";
const InputDate = ({
  label,
  type,
  placeholder,
  required,
  disabled,
  readonly,
  value,
  setValue,
  animation,
  min,
  max,
  style={},
  containerInput,
  labelInputName,
  inputName,
}) => {

  
  return (
    <div className={`${containerInput} ${animation}`} style={{ marginBottom: "20px" }}>
      <label className={`${labelInputName}`}>{label}</label>
      <input
        className={`${inputName}`}
        style={style}
        type="date"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={dayjs().format("YYYY-MM-DD")}
        max={max}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          // event && event(e);
        }}
        readOnly={readonly}
      />
    </div>
  );
};

export default InputDate;
