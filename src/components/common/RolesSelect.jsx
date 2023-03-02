import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import RoutesList from "../tools/RoutesList";
import { getHeader } from "../tools/SessionSettings";
const RolesSelect = ({ 
  value,
  setValue,
  required,
  ignore = [],
  style={} 
}) => {
  const [roles, setRoles] = useState([]);

  const handleReadRoles = () => {
    axios.get(RoutesList.api.roles.read, getHeader()).then((res) => {
      setRoles(!res.data.status ? res.data : []);
    });
  };

  useEffect(() => {
    handleReadRoles();
  }, []);
  return (
    <div className="form__demo-container-roles-select" style={{ marginBottom: "20px" }}>
      <label className={"form__label-name"}>Seleccione Rol</label>
      <select
         style={style}
        className={"form__select-name"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
        <option value={""}>Seleccione</option>
        {roles.map(
          (role) =>
            !ignore.includes(role.roles_name) && (
              <option key={role.idroles} value={role.idroles}>
                {role.roles_name}
              </option>
            )
        )}
      </select>
    </div>
  );
};

export default RolesSelect;
