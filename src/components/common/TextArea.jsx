import React from "react";

const TextArea = ({ label, value,required,disabled,setValue,style={}, readonly }) => {
  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px"}}>
      <label className={"form__label-name"}>{label}</label>
      <textarea
        style={style}
        className={"form__textarea-name"}
        type={"textarea"}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        required={required}
        disabled={disabled}
        readOnly={readonly}
      ></textarea>
    </div>
  );
};

export default TextArea;
