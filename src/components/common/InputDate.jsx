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
  style
}) => {

  
  return (
    <div className={`form__demo-container-name ${animation}`} style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>{label}</label>
      <input
        className={"form__input-name"}
        style={style}
        type="date"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={dayjs().format("YYYY-MM-DD")}
        max={max}
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

export default InputDate;
