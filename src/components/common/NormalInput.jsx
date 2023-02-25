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
  style={}
}) => {
  return (
    <div className={`form__demo-container-name ${animation}`} style={{ marginBottom: "4px" }}>
      <label className={"form__label-name"}>{label}</label>
      <input
        className={"form__input-name"}
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
