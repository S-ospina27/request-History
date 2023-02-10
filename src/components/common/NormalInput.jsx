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
}) => {
  return (
    <div className={`form__demo-container-name ${animation}`} style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>{label}</label>
      <input
        className={"form__input-name"}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        // readonly={readonly}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          // event && event(e);
        }}
      />
    </div>
  );
};

export default NormalInput;
