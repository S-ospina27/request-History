import { Button } from "@mui/material";
import React, { useState } from "react";
import NormalInput from "../components/common/NormalInput";
import "../components/Layout/Layout.css";
import teclab from "../assets/img/teclab blanco.png";
import RoutesList from "../components/tools/RoutesList";
import axios from "axios";
import { getHeader, set } from "../components/tools/SessionSettings";
import { SHA256 } from "crypto-js";
import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";

const Login = ({ setAlert, setUserSession }) => {
  const navigate = useNavigate();
  const [developers_password, setDevelopers_password] = useState("");
  const [developers_email, setDevelopers_email] = useState("");

  const handleAuthLogin = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("developers_email", developers_email);
    form.append("developers_password", SHA256(developers_password));

    axios.post(RoutesList.api.auth.login, form, getHeader()).then((res) => {
      // console.log(res.data);
      setAlert({
        open: true,
        message: res.data.message,
        severity: res.data.status,
      });

      if (res.data.status === "success") {
        setUserSession(true);
        set("jwt", res.data.data.jwt);
        const jwt = jwtDecode(res.data.data.jwt);
        navigate(jwt.data.idroles === 3 ? "/developers" : "/requirements");
      }
    });
  };

  return (
    <div className={"Contenedor__padre__loguin"}>
      <section className={"section__izq"}>
        <form className={"form__loguin"} onSubmit={handleAuthLogin}>
          <h1 className="loguin__title">Login</h1>
          <div className="asignaciones__loguin__container">
            <NormalInput
              label={"Usuario"}
              value={developers_email}
              setValue={setDevelopers_email}
              type={"email"}
              containerInput={"form__demo-container-name"}
              labelInputName={"form__label-name"}
              inputName={"form__input-name"}
            />
            <NormalInput
              label={"Contraseña"}
              value={developers_password}
              setValue={setDevelopers_password}
              type={"password"}
              containerInput={"form__demo-container-name"}
              labelInputName={"form__label-name"}
              inputName={"form__input-name"}
            />

            <Button
              className={"Botton botton-gigante"}
              type="submit"
              style={{ marginTop: "15px" }}
              variant="contained"
            >
              {"Ingresar"}
            </Button>
          </div>
        </form>
      </section>

      <section className={"section__der"}>
        <div className={"loguin__container_foto_teclab"}>
          <img className={"loguin__foto_teclab"} src={teclab} />
          <p className="parrafo__loguin">¡Has que tus ideas despeguen!</p>
        </div>
      </section>
    </div>
  );
};

export default Login;
