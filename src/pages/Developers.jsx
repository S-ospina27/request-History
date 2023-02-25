import { Box, Button, Dialog, Divider, Grid } from "@mui/material";
import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import menu from "../assets/img/menu.png";
import DrawerLayout from "../components/Layout/DrawerLayout";
import ColumnsTable from "../components/tools/ColumnsTable";
import DataTable from "../components/tools/DataTable";
import RoutesList from "../components/tools/RoutesList";
import { get, getHeader, remove } from "../components/tools/SessionSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import DialogTransition from "../components/common/DialogTransition";
import NormalInput from "../components/common/NormalInput";
import TextArea from "../components/common/TextArea";
const Developers = ({ setAlert }) => {
  const navigate = useNavigate();
  const [helpOpen, setHelpOpen] = useState(false);
  const [readDevelopers, setReadDevelopers] = useState([]);
  const [open ,setOpen]= useState(false)

  const handleReadDevelopers = () => {
    const jwt = jwtDecode(get("jwt"));
    const iddevelopers = jwt.data.iddevelopers;
    axios
      .get(
        RoutesList.api.assignment.developer.read.bydevelopers +
          `/${iddevelopers}`,
        getHeader()
      )
      .then((res) => {
        setReadDevelopers(!res.data.status ? res.data : []);
      });
  };

  const setFields = (
    row={

  }) =>{

  }
  useEffect(() => {
    handleReadDevelopers();
  }, []);

  return (
    <div className={"contaniner contenedor-requirement"}>
      {/* <DrawerLayout helpOpen={helpOpen} setHelpOpen={setHelpOpen} /> */}
      {/* <img
        src={menu}
        width="50px"
        className={"img-menu"}
        onClick={() => setHelpOpen(true)}
      /> */}
      <button
        className={"img-menu"}
        variant={"contained"}
        onClick={() => {
          remove("jwt");
          navigate("/");
        }}
      >
        Salir
      </button>

      <h1 className={"h1-padre"}>Desarrolladores</h1>
      <div className={"contenedor-body"}>
        <section className={"contenedor-informativo"}>
          <div className={"contenedores-hijos"}>
            <label>Asignados: 4</label>
          </div>
          <div className={"contenedores-hijos"}>
            <label>Terminados: 1</label>
          </div>
        </section>

        <div className={"conteniedor-tabla"}>
          <section className="tabla-admin">
            <DataTable
              reload={handleReadDevelopers}
              rows={readDevelopers}
              columns={ColumnsTable.assigmentBydevelopers}
              getRowId={"idassignment_requirements"}
              onRowClick={{
                open: setOpen,
                set: setFields,
              }}
              sx={{
                "@media screen and (max-width: 768px)": {
                  height: "98%",
                },
                marginTop: "3%",
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
            />
          </section>
        </div>
      </div>
      
      <Dialog
        fullWidth
        maxWidth={"md"}
        open={open}
        sx={{
          borderRadius: "55px",
        }}
        onClose={() => {
          setOpen(false);
        }}
        TransitionComponent={DialogTransition}
      >
        <div>
          <span className="parrafo-modal">Visualizar datos</span>
        </div>

        <span
          className="button--close"
          onClick={() => {
            setOpen(false);
          }}
        >
          x
        </span>

        <Divider />

        <div className="contenedor__visualizar-container">
          <section className="asignaciones__edit-container--form">
            <form
              className="form-visualizar-datos-developers"
              // onSubmit={handleEditRequirements}
            >
              <h3>Requerimiento</h3>
              <div className="contenedor-inputs-asign">
                <NormalInput
                style={{width:"89%" }}
                  label={"Nombre"}
                 />
                <NormalInput
                 style={{width:"94%" }}
                label={"Fecha requerimiento"}
                 />
              </div>

              <div className="contenedor-inputs-asign">
                <NormalInput 
                 style={{width:"89%" }}
                   label={"Estado"}
                />
                <NormalInput
                style={{width:"94%" }}
                label={"prioridad"}
                 />                
              </div>
              <div className="contenedor-inputs-asign">
              <TextArea
                  style={{ width: "100%" }}
                  label={"Descripción"}
                  required
                />
              </div>

              <div className="botton-assigrequirement">
                {/* <Button
                  type="submit"
                  style={{ marginBottom: "10px" }}
                  // color="secondary"
                  variant="contained"
                >
                  {"Editar"}
                </Button> */}
              </div>
            </form>
          </section>
        </div>
      </Dialog>

    </div>
    
  );
};

export default Developers;
