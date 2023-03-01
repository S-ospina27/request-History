import { Box, Button, Dialog, Divider, Grid } from "@mui/material";
import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import ColumnsTable from "../components/tools/ColumnsTable";
import DataTable from "../components/tools/DataTable";
import RoutesList from "../components/tools/RoutesList";
import { get, getHeader, remove } from "../components/tools/SessionSettings";
import { useNavigate } from "react-router-dom";
import DialogTransition from "../components/common/DialogTransition";
import NormalInput from "../components/common/NormalInput";
import TextArea from "../components/common/TextArea";

const Developers = ({ setAlert }) => {
  const navigate = useNavigate();
  const [helpOpen, setHelpOpen] = useState(false);
  const [readDevelopers, setReadDevelopers] = useState([]);
  const [readtasksAssignedStatus, setReadtasksAssignedStatus] = useState([]);
  const [readtasksFinishedStatus, setReadtasksFinishedStatus] = useState([]);
  const [open, setOpen] = useState(false);

  const [requirements_name, setRequirements_name] = useState("");
  const [requirements_priority, setRequirements_priority] = useState("");
  const [requirements_description, setRequirements_description] = useState("");
  const [requirements_date, setRequirements_date] = useState("");
  const [states_name_req, setStates_name_req] = useState("");

  const [assignment_requirements_date, setAssignment_requirements_date] =
    useState("");
  const [
    assignment_requirements_deadline,
    setAssignment_requirements_deadline,
  ] = useState("");
  const [
    assignment_requirements_finish_date,
    setAssignment_requirements_finish_date,
  ] = useState("");
  const [states_name_ar, setStates_name_ar] = useState("");

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
    row = {
      requirements_name: "",
      requirements_priority: "",
      requirements_description: "",
      requirements_date: "",
      states_name_req: "",
      assignment_requirements_date: "",
      assignment_requirements_deadline: "",
      assignment_requirements_finish_date: "",
      states_name_ar: "",
    }
  ) => {
    // console.log(row);
    setRequirements_name(row.requirements_name);
    setRequirements_priority(row.requirements_priority);
    setRequirements_description(row.requirements_description);
    setRequirements_date(row.requirements_date);
    setStates_name_req(row.states_name_req);
    setAssignment_requirements_date(row.assignment_requirements_date);
    setAssignment_requirements_deadline(row.assignment_requirements_deadline);
    setAssignment_requirements_finish_date(
      row.assignment_requirements_finish_date === null
        ? ""
        : row.assignment_requirements_finish_date
    );
    setStates_name_ar(row.states_name_ar);
  };

  const ReadtasksAssignedStatus = () => {
    axios
      .get(
        RoutesList.api.assignment.developer.read.tasks_assigned_status,
        getHeader()
      )
      .then((res) => {
        setReadtasksAssignedStatus(res.data.cont);
      });
  };

  const ReadtasksFinishedStatus = () => {
    axios
      .get(
        RoutesList.api.assignment.developer.read.tasks_finished_status,
        getHeader()
      )
      .then((res) => {
        setReadtasksFinishedStatus(res.data.cont);
      });
  };

  useEffect(() => {
    handleReadDevelopers();
    ReadtasksAssignedStatus();
    ReadtasksFinishedStatus();
  }, []);

  return (
    <div className={"contaniner contenedor-requirement"}>
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
            <label>Asignados: {readtasksAssignedStatus}</label>
          </div>
          <div className={"contenedores-hijos"}>
            <label>Terminados: {readtasksFinishedStatus}</label>
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
                  style={{ width: "89%" }}
                  label={"Nombre"}
                  value={requirements_name}
                  setValue={setRequirements_name}
                  readonly
                  required
                />
                <NormalInput
                  style={{ width: "94%" }}
                  label={"Fecha requerimiento"}
                  value={requirements_date}
                  setValue={setRequirements_date}
                  readonly
                  required
                />
              </div>

              <div className="contenedor-inputs-asign">
                <NormalInput
                  style={{ width: "89%" }}
                  label={"Estado"}
                  value={states_name_req}
                  setValue={setStates_name_req}
                  readonly
                />
                <NormalInput
                  style={{ width: "94%" }}
                  label={"Prioridad"}
                  value={requirements_priority}
                  setValue={setRequirements_priority}
                  readonly
                />
              </div>
              <div className="contenedor-inputs-asign">
                <TextArea
                  style={{ width: "100%" }}
                  label={"Descripción"}
                  value={requirements_description}
                  setValue={setRequirements_description}
                  required
                  readonly
                />
              </div>
              <h3>Asignación</h3>
              <div className="contenedor-inputs-asign">
                <NormalInput
                  style={{ width: "90%" }}
                  label={"Estado"}
                  value={states_name_ar}
                  setValue={setStates_name_ar}
                  readonly
                />
                <NormalInput
                  style={{ width: "94%" }}
                  label={"Fecha Asignación"}
                  value={assignment_requirements_date}
                  setValue={setAssignment_requirements_date}
                  readonly
                />
              </div>
              <div className="contenedor-inputs-asign">
                <NormalInput
                  style={{ width: "90%" }}
                  label={"Fecha Limite"}
                  value={assignment_requirements_deadline}
                  setValue={setAssignment_requirements_deadline}
                  readonly
                />
                <NormalInput
                  style={{ width: "94%" }}
                  label={"Fecha Finalización"}
                  value={assignment_requirements_finish_date}
                  setValue={setAssignment_requirements_finish_date}
                  readonly
                />
              </div>
            </form>
          </section>
        </div>
      </Dialog>
    </div>
  );
};

export default Developers;
