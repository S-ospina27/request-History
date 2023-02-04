import { TextField } from "@mui/material";
import React from "react";

const TexfieldLinear = ({ label, type,disabled ,value,required,readOnly}) => {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      required={required}
      disabled={disabled}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        event && event(e);
      }}
      autoComplete={"off"}
      InputProps={{
        readOnly: readOnly,
      }}
      variant="standard"
      color="secondary"
      focused
    />
  );
};

export default TexfieldLinear;
