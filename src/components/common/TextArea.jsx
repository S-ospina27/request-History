import React from "react";

const TextArea = ({ label, value,required,disabled,setValue }) => {
  return (
    <div className="form__demo-container-name" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>{label}</label>
      <textarea
        className={"form__textarea-name"}
        type={"textarea"}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        required={required}
        disabled={disabled}
      ></textarea>
    </div>
  );
};

export default TextArea;
