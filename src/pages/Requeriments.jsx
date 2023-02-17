import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import menu from "../assets/img/menu.png";
import DrawerLayout from "../components/Layout/DrawerLayout";
import DataTable from "../components/tools/DataTable";
import RoutesList from "../components/tools/RoutesList";
import { getHeader } from "../components/tools/SessionSettings";
import ColumnsTable from "../components/tools/ColumnsTable";
import "../components/Layout/Layout.css";
import DialogTransition from "../components/common/DialogTransition";
import PrioritySelect from "../components/common/PrioritySelect";
import { display } from "@mui/system";
import NormalInput from "../components/common/NormalInput";
import RequirementsSelector from "../components/common/RequirementsSelector";
import useMediaQuery from "@mui/material/useMediaQuery";
import StatesSelector from "../components/common/StatesSelector";
import DataTableBlack from "../components/tools/DataTableBlack";
import { Margin } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
const Requeriments = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const [pending, setPending] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [finished, setFinished] = useState([]);
  const [readRequirementsAdm, setReadRequirementsAdm] = useState([]);
  const [helpOpen, setHelpOpen] = useState(false);
  const [open, setOpen] = useState(false);

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
      .get(
        RoutesList.api.companies.requirements.read.read_finished,
        getHeader()
      )
      .then((res) => {
        setFinished(res.data.terminado);
      });
  };

  const readRequirementsByAdmin = () => {
    axios
      .get(
        RoutesList.api.companies.requirements.read.read_requirementsByadmin,
        getHeader()
      )
      .then((res) => {
        setReadRequirementsAdm(res.data);
      });
  };

  const handleCreateAssingments = () => {};

  useEffect(() => {
    handlerPending();
    handlerAccept();
    handlerfinished();
    readRequirementsByAdmin();
  }, []);

  return (
    <>
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

          <div className={"conteniedor-tabla"}>
            <div className="tabla-admin">
              <DataTable
                reload={readRequirementsByAdmin}
                rows={readRequirementsAdm}
                columns={ColumnsTable.requirementsAdmin}
                getRowId={"idrequirements"}
                // onRowClick={{
                //   open: setOpenCreatTechnical,
                //   set: setFields,
                // }}
                sx={{
                  "@media screen and (max-width: 768px)": {
                    height: "98%",
                  },
                  marginTop: "4%",
                  width: "500px",
                  height: "370px",
                  borderRadius: "15px",
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  "& .MuiDataGrid-iconButtonContainer": {
                    button: {
                      color: "#FFFFFF",
                    },
                  },
                  ".MuiTablePagination-root": {
                    color: "#FFFFFF",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    borderColor: "#FFFFFF",
                  },
                  "& .MuiDataGrid-cell": {
                    borderColor: "#FFFFFF",
                  },
                }}
                toolbar={
                  <Button
                    type="button"
                    color="white"
                    // disabled={items.length > 0 ? false : true}
                    onClick={() => {
                      setOpen(true);
                    }}
                    // startIcon={<PriceCheckIcon />}
                  >
                    {"Asignaciónes"}
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Dialog
        fullWidth
        maxWidth={"xl"}
        open={open}
        sx={{
          borderRadius: "55px",
        }}
        onClose={() => {
          setOpen(false);
        }}
        TransitionComponent={DialogTransition}
      >
        <form onSubmit={handleCreateAssingments}>
          <div>
        <span className="parrafo-modal">Crear Asignaciónes</span>
          </div>
            <p className="button--close">cerrar</p>
          <Divider/>

          <div className="asignaciones__container">
            <section className="asignaciones__container--form">

              <form className="form-asignacion">

                <div className="contenedor-inputs-asign">
                  <RequirementsSelector />
                  <NormalInput
                    label={"Fecha de entrega"}
                    type={"date"}
                    min={"2023-02-16"}
                    placeholder={"Ingrese nombre"}
                    required
                  />
                </div>

                <div className="contenedor-inputs-asign">
                  <StatesSelector
                    ignore={[
                       "INACTIVO",
                       "NOVEDAD",
                       "ACEPTADO",
                       "ACTIVO",
                       "RECHAZADO",
                       "DESARROLLO",
                       "RETRAZADO"
                       ]}
                  />
                </div>

                <div className="botton-assigrequirement">
                  <Button
                    type="button"
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    {"Asignaciónes"}
                  </Button>
                </div>

              </form>
              <Divider/>

              <form className="form-asignacion">
              <div className="contenedor-inputs-asign">
                  <RequirementsSelector />
                  <NormalInput
                    label={"Desarrollador"}
                    type={"text"}
                    min={"2023-02-16"}
                    placeholder={"Ingrese nombre"}
                    required
                  />
                </div>
                <div className="contenedor-inputs-asign">
                  <StatesSelector
                    ignore={["ASIGNADO", "PENDIENTE", "INACTIVO", "NOVEDAD"]}
                  />
                </div>
                <div className="botton-assigrequirement">
                  <Button
                    type="button"
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    {"Asignaciónes"}
                  </Button>
                </div>
              </form>
            </section>
            <section className="asignaciones__container--table">
              <DataTableBlack
                  reload={readRequirementsByAdmin}
                  rows={readRequirementsAdm}
                  columns={ColumnsTable.requirementsAdmin}
                  getRowId={"idrequirements"}
                  // onRowClick={{
                  //   open: setOpenCreatTechnical,
                  //   set: setFields,
                  // }}
                  sx={{
                    "@media screen and (max-width: 1024px)":{
                      width:"96%",
                      margin:"auto"
                    },
                    // margin: "auto",
                    width: "640px",
                    height: "520px",
                    // borderRadius: "15px",
                    borderColor: "#0000000",
                    color: "#0000000",
                    "& .MuiDataGrid-iconButtonContainer": {
                      button: {
                        color: "#0000000",
                      },
                    },
                    ".MuiTablePagination-root": {
                      color: "#0000000",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      borderColor: "#0000000",
                    },
                    "& .MuiDataGrid-cell": {
                      borderColor: "#00000",
                    },
                  }}
                />
            </section>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Requeriments;
