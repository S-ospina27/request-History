import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import menu from "../assets/img/menu.png";
import DrawerLayout from "../components/Layout/DrawerLayout";
import RoutesList from "../components/tools/RoutesList";
import { getHeader } from "../components/tools/SessionSettings";

const Requeriments = () => {
  const [pending, setPending] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [finished, setFinished] = useState([]);
  const [helpOpen, setHelpOpen] = useState(false);

  const handlerPending = () => {
    axios
      .get(RoutesList.api.companies.requirements.read.read_pending, getHeader())
      .then((res) => {
        setPending(res.data.pendientes);
      });
  };

  const handlerAccept = () => {
    axios
      .get(RoutesList.api.companies.requirements.read.read_accept, getHeader())
      .then((res) => {
        setAccepted(res.data.aceptado);
      });
  };

  const handlerfinished = () => {
    axios
      .get(RoutesList.api.companies.requirements.read.read_finished, getHeader())
      .then((res) => {
        setFinished(res.data.terminado);
      });
    };
    
    console.log(finished)
  useEffect(() => {
    handlerPending();
    handlerAccept();
    handlerfinished();
  }, []);

  return (
    <div className={"contaniner contenedor-requirement"}>
      <DrawerLayout helpOpen={helpOpen} setHelpOpen={setHelpOpen} />
      <img
        src={menu}
        className={"img-menu"}
        onClick={() => setHelpOpen(true)}
      />
      <h1 className={"h1-padre"}>Requerimientos</h1>
      <div className={"contenedor-body"}>
        <div className={"contenedor-informativo"}>
          <div className={"contenedores-hijos"}>
            <label>Pendientes: {pending}</label>
          </div>
          <div className={"contenedores-hijos"}>
            <label>Aceptadas: {accepted}</label>
          </div>
          <div className={"contenedores-hijos"}>
            <label>Terminadas: {finished}</label>
          </div>
        </div>

        <div className={"conteniedor-tabla"}></div>
      </div>
    </div>
  );
};

export default Requeriments;
