import React from "react";

const NormalInput = ({
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
  containerInput,
  labelInputName,
  inputName,
  style={}
}) => {
  return (
    <div className={`${containerInput} ${animation}`} style={{ marginBottom: "4px" }}>
      <label className={`${labelInputName}`}>{label}</label>
      <input
        className={`${inputName}`}
        style={style  }
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={min}
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

export default NormalInput;
