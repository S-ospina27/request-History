import { Button, Dialog, Divider } from "@mui/material";
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
import NormalInput from "../components/common/NormalInput";
import RequirementsSelector from "../components/common/RequirementsSelector";
import StatesSelector from "../components/common/StatesSelector";
import DataTableBlack from "../components/tools/DataTableBlack";
import CompaniesSelect from "../components/common/CompaniesSelect";
import InputDate from "../components/common/InputDate";
import dayjs from "dayjs";
import AssigmentSelector from "../components/common/AssigmentSelector";
import DeveloperSelector from "../components/common/DeveloperSelector";

const Requeriments = ({ setAlert }) => {
  const [pending, setPending] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [finished, setFinished] = useState([]);
  const [readAssigmentHasDevelopers, setReadAssigmentHasDevelopers] = useState(
    []
  );
  const [readRequirementsAdm, setReadRequirementsAdm] = useState([]);
  const [render, setRender] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [idcompanies, setIdcompanies] = useState("");
  const [idrequirements, setIdrequirements] = useState("");
  const [
    assignment_requirements_deadline,
    setAssignment_requirements_deadline,
  ] = useState("");
  const [idassignment_requirements, setIdassignment_requirements] =
    useState("");
  const [iddevelopers, setIddevelopers] = useState("");

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
        // console.log(res.data)
        setReadRequirementsAdm(res.data);
      });
  };

  const handleCreateAssingments = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("idrequirements", idrequirements);
    form.append(
      "assignment_requirements_deadline",
      assignment_requirements_deadline
    );

    axios
      .post(RoutesList.api.assignment.create, form, getHeader())
      .then((res) => {
        setIdcompanies("");
        setIdrequirements("");
        setAssignment_requirements_deadline("");
        setAlert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      });
  };

  const HandleAsigmentDevelopers = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("idassignment_requirements", idassignment_requirements);
    form.append("iddevelopers", iddevelopers);

    axios
      .post(RoutesList.api.assignment.developer.create, form, getHeader())
      .then((res) => {
        setIdassignment_requirements("");
        setIddevelopers("");
        setAlert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      });
  };

  const handleReadAssigmentHasDevelopers = () => {
    axios
      .get(RoutesList.api.assignment.developer.read.assigment, getHeader())
      .then((res) => {
        setReadAssigmentHasDevelopers(res.data);
        console.log(res.data)
      });
  };
  useEffect(() => {
    handlerPending();
    handlerAccept();
    handlerfinished();
    readRequirementsByAdmin();
    handleReadAssigmentHasDevelopers();
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
        <h1 className={"h1-padre"}>{"Requerimientos"}</h1>

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
                toolbar={
                  <Button
                    type="button"
                    color="white"
                    onClick={() => {
                      setOpen(true);
                    }}
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
        <div>
          <span className="parrafo-modal">Crear Asignaciónes</span>
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

        <div className="asignaciones__container">
          <section className="asignaciones__container--form">
            <form
              className="form-asignacion"
              onSubmit={handleCreateAssingments}
            >
              <div className="contenedor-inputs-asign">
                <CompaniesSelect
                  ignore={["TERMINADO", "PENDIENTE"]}
                  value={idcompanies}
                  setValue={setIdcompanies}
                  setRender={setRender}
                  required
                />

                {render && (
                  <RequirementsSelector
                    value={idrequirements}
                    setValue={setIdrequirements}
                    idcompanies={idcompanies}
                    required
                  />
                )}
              </div>

              <div className="contenedor-inputs-asign">
                <InputDate
                  style={{ width: "82%" }}
                  value={assignment_requirements_deadline}
                  setValue={setAssignment_requirements_deadline}
                  label={"Fecha limite"}
                  // min={"2023-02-16"}
                  required
                />
              </div>

              <div className="botton-assigrequirement">
                <Button
                  type="submit"
                  // style={{backgroundImage: "radial-gradient(circle at -11.24% 85.36%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%);"}}
                  // color="secondary"
                  variant="contained"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  {"Crear"}
                </Button>
              </div>
            </form>

            <form
              className="form-asignacion"
              onSubmit={HandleAsigmentDevelopers}
            >
              <div className="contenedor-inputs-asign">
                <AssigmentSelector
                  value={idassignment_requirements}
                  setValue={setIdassignment_requirements}
                  style={{ width: "95%" }}
                  ignore={["ASIGNADO", "TERMINADO"]}
                  required
                />

                <DeveloperSelector
                  value={iddevelopers}
                  setValue={setIddevelopers}
                  ignore={["INACTIVO"]}
                  required
                />

                {/* <StatesSelector
                  style={{width:"95%"}}
                  ignore={["ACEPTADO", "TERMINADO", "INACTIVO", "NOVEDAD"]}
                /> */}
              </div>

              <div className="botton-assigrequirement">
                <Button
                  type="submit"
                  variant="contained"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  {"Asignar"}
                </Button>
              </div>
            </form>
          </section>

          <section className="asignaciones__container--table">
            <DataTableBlack
              reload={handleReadAssigmentHasDevelopers}
              rows={readAssigmentHasDevelopers}
              columns={ColumnsTable.assigmentHasDevelopers}
              getRowId={"idassignment_requirements"}
              // onRowClick={{
              //   open: setOpenCreatTechnical,
              //   set: setFields,
              // }}
              sx={{
                "@media screen and (max-width: 1024px)": {
                  width: "96%",
                  margin: "auto",
                },
                marginTop: "10px",
                marginBottom: "20px",
                width: "640px",
                height: "470px",
                borderRadius: "15px",
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
      </Dialog>
    </>
  );
};

export default Requeriments;
