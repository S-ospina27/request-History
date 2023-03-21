import { Button, Dialog, Divider } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import DrawerLayout from "../components/Layout/DrawerLayout";
import DataTable from "../components/tools/DataTable";
import RoutesList from "../components/tools/RoutesList";
import { getHeader, remove } from "../components/tools/SessionSettings";
import ColumnsTable from "../components/tools/ColumnsTable";
import "../components/Layout/Layout.css";
import DialogTransition from "../components/common/DialogTransition";
import NormalInput from "../components/common/NormalInput";
import RequirementsSelector from "../components/common/RequirementsSelector";
import StatesSelector from "../components/common/StatesSelector";
import DataTableBlack from "../components/tools/DataTableBlack";
import CompaniesSelect from "../components/common/CompaniesSelect";
import InputDate from "../components/common/InputDate";
import AssigmentSelector from "../components/common/AssigmentSelector";
import DeveloperSelector from "../components/common/DeveloperSelector";
import TextArea from "../components/common/TextArea";
import DataTableCheckBox from "../components/tools/DataTableCheckBox";
import TypeDevelopers from "../components/common/TypeDevelopers";
import RolesSelect from "../components/common/RolesSelect";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { SHA256 } from "crypto-js";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Requeriments = ({ setAlert }) => {
  const navigate = useNavigate();
  const [pending, setPending] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [finished, setFinished] = useState([]);
  const [readAssigmentHasDevelopers, setReadAssigmentHasDevelopers] = useState(
    []
  );
  const [readFullDevelopers, setReadFullDevelopers] = useState([]);
  const [readRequirementsAdm, setReadRequirementsAdm] = useState([]);
  const [items, setItems] = useState([]);

  const [readAssigmentsRequirements, setReadAssigmentsRequirements] = useState(
    []
  );

  const [render, setRender] = useState(false);
  const [renderAssigments, setRenderAssigments] = useState(true);
  const [helpOpen, setHelpOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openeditAssigmentStates, setOpeneditAssigmentStates] = useState(false);
  const [openDialogRequirements, setOpenDialogRequirements] = useState(false);
  const [openDialogEditHasDevelopers, setOpenDialogEditHasDevelopers] =
    useState(false);
  const [openDialogCreateDevelopers, setOpenDialogCreateDevelopers] =
    useState(false);

  const [openDialogEditDevelopers, setOpenDialogEditDevelopers] =
    useState(false);
  const [openeditAssigments, setOpeneditAssigments] = useState(false);
  const [idrequirements, setIdrequirements] = useState("");
  const [idcompanies, setIdcompanies] = useState("");
  const [
    assignment_requirements_deadline,
    setAssignment_requirements_deadline,
  ] = useState("");
  const [idassignment_requirements, setIdassignment_requirements] =
    useState("");
  const [iddevelopers, setIddevelopers] = useState("");

  const [requirements_name, setRequirements_name] = useState("");
  const [requirements_description, setRequirements_description] = useState("");
  const [idstates, setIdstates] = useState("");
  const [requirements_date, setRequirements_date] = useState("");
  const [idstatesHasDevelopers, setIdstatesHasDevelopers] = useState("");
  const [
    idassignment_requirements_has_developers,
    setIdassignment_requirements_has_developers,
  ] = useState("");

  const [iddevelopersEdit, setiddevelopersEdit] = useState("");
  const [idroles, setIdroles] = useState("");
  const [idstatesCreate, setIstatesCreate] = useState("");
  const [developers_nameCreate, setDevelopers_nameCreate] = useState("");
  const [developerscol_type, setDeveloperscol_type] = useState("");
  const [developers_email, setDdevelopers_email] = useState("");
  const [developers_password, setDevelopers_password] = useState("");
  const [idstatesedit, setIdstatesedit] = useState("");
  const [idassignment_requirementsedit, setIdassignment_requirementsedit] =
    useState("");

  const setFieldsAssigmentEdit = (
    row = {
      idstatesedit: "",
      idstates: "",
      idassignment_requirementsedit: "",
    }
  ) => {
    // console.log(row);
    setIdstatesedit(row.idstates);
    setIdassignment_requirementsedit(row.idassignment_requirements);
  };

  const setFields = (
    row = {
      idrequirements: "",
      idcompanies: "",
      requirements_name: "",
      requirements_description: "",
      idstates: "",
      requirements_date: "",
    }
  ) => {
    // console.log(row);
    setIdrequirements(row.idrequirements);
    setIdcompanies(row.idcompanies);
    setRequirements_name(row.requirements_name);
    setRequirements_description(row.requirements_description);
    setIdstates(row.idstates);
    setRequirements_date(row.requirements_date);
  };

  const setFieldsHasDevelopers = (
    row = {
      idstatesHasDevelopers: "",
      idassignment_requirements_has_developers: "",
    }
  ) => {
    // console.log(row);
    setIdstatesHasDevelopers(row.idstates);
    setIdassignment_requirements_has_developers(
      row.idassignment_requirements_has_developers
    );
  };

  const setDialogEditofCreateDevelopers = (
    row = {
      developers_name: "",
      idstates: "",
      iddevelopers: "",
      iddevelopersEdit: "",
      idroles: "",
      idstatesCreate: "",
      developers_nameCreate: "",
      developerscol_type: "",
      developers_email: "",
      developers_password: "",
    }
  ) => {
    setiddevelopersEdit(row.iddevelopers);
    setIdroles(row.idroles);
    setIstatesCreate(row.idstates);
    setDevelopers_nameCreate(row.developers_name);
    setDeveloperscol_type(row.developerscol_type);
    setDdevelopers_email(row.developers_email);
  };

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

  const readDevelopers = () => {
    axios
      .get(
        import.meta.env.VITE_SERVER_URL_AUD + "/api/developers/read",
        getHeader()
      )
      .then((res) => {
        setReadFullDevelopers(!res.data.status ? res.data : []);
      });
  };

  const handleClearFieldDevelopers = () => {
    setDevelopers_nameCreate("");
    setDeveloperscol_type("");
    setDdevelopers_email("");
    setDevelopers_password("");
  };

  const handleCreateDevelopers = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("developers_name", developers_nameCreate);
    form.append("developerscol_type", developerscol_type);
    form.append("developers_email", developers_email);
    form.append("developers_password", SHA256(developers_password));

    axios
      .post(RoutesList.api.developer.create, form, getHeader())
      .then((res) => {
        console.log(res.data);
        setAlert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });

        if (res.data.status === "success") {
          readDevelopers();
          handleClearFieldDevelopers();
        }
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
        setAlert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });

        setIdcompanies("");
        setIdrequirements("");
        setAssignment_requirements_deadline("");
        setRender(false);
        setRenderAssigments(false);
        setTimeout(() => setRenderAssigments(true), 600);
        handleReadAssigmentsRequirements();
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
        handleReadAssigmentHasDevelopers();
        handleReadAssigmentsRequirements();
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
        setReadAssigmentHasDevelopers(!res.data.status ? res.data : []);
      });
  };

  const handleEditRequirements = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("idrequirements", idrequirements);
    form.append("idcompanies", idcompanies);
    form.append("requirements_name", requirements_name);
    form.append("requirements_description", requirements_description);
    form.append("idstates", idstates);
    form.append("requirements_date", requirements_date);

    axios
      .post(RoutesList.api.companies.requirements.update, form, getHeader())
      .then((res) => {
        readRequirementsByAdmin();
        setAlert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });

        setFields();
        setOpenDialogRequirements(false);
        handlerfinished();
        handlerAccept();
        handlerPending();
      });
  };

  const handleDeleteAssigmentDevelopers = () => {
    if (items.length > 0) {
      const form = new FormData();
      items.forEach((item) =>
        form.append("idassignment_requirements_has_developers[]", item)
      );
      axios
        .post(RoutesList.api.assignment.developer.delete, form, getHeader())
        .then((res) => {
          console.log(res.data);

          handleReadAssigmentHasDevelopers();
          setAlert({
            open: true,
            message: res.data.message,
            severity: res.data.status,
          });
        });
    }
  };

  const handleEditAssigmentsHasDevelopers = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append(
      "idassignment_requirements_has_developers",
      idassignment_requirements_has_developers
    );
    form.append("idstates", idstatesHasDevelopers);

    axios
      .post(RoutesList.api.assignment.developer.update, form, getHeader())
      .then((res) => {
        setAlert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      });
    handleReadAssigmentHasDevelopers();
    setOpenDialogEditHasDevelopers(false);
  };

  const handleEditOfCreateDevelopers = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("iddevelopers", parseInt(iddevelopersEdit));
    form.append("idroles", idroles);
    form.append("idstates", idstatesCreate);
    form.append("developers_name", developers_nameCreate);
    form.append("developerscol_type", developerscol_type);
    form.append("developers_email", developers_email);
    form.append("developers_password", SHA256(developers_password));

    axios
      .post(RoutesList.api.developer.update, form, getHeader())
      .then((res) => {
        setAlert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });

        if (res.data.status === "success") {
          setOpenDialogEditDevelopers(false);
          readDevelopers();
          handleClearFieldDevelopers();
        }
      });
  };

  const handleReadAssigmentsRequirements = () => {
    axios
      .get(RoutesList.api.assignment.read.read_assigments, getHeader())
      .then((res) => {
        setReadAssigmentsRequirements(res.data);
        // console.log(res.data)
      });
  };

  const handleAssigmentEdit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("idassignment_requirements", idassignment_requirementsedit);
    form.append("idstates", idstatesedit);

    axios
      .post(RoutesList.api.assignment.update, form, getHeader())
      .then((res) => {
        // console.log(res.data);

        setAlert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
        setOpeneditAssigments(false);
        handleReadAssigmentsRequirements();
      });
  };

  useEffect(() => {
    setFields();
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [openeditAssigmentStates]);

  useEffect(() => {
    setOpenDialogCreateDevelopers(false);
  }, [openDialogEditDevelopers]);

  useEffect(() => {
    setOpen(false);
  }, [openDialogEditHasDevelopers]);

  useEffect(() => {
    handlerPending();
    handlerAccept();
    handlerfinished();
    readRequirementsByAdmin();
    handleReadAssigmentHasDevelopers();
    readDevelopers();
    handleReadAssigmentsRequirements();
  }, []);

  return (
    <>
      <div className={"contaniner contenedor-requirement"}>
        {/* <DrawerLayout helpOpen={helpOpen} setHelpOpen={setHelpOpen} /> */}

        {/* <img
          src={menu}
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
                onRowClick={{
                  open: setOpenDialogRequirements,
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
                toolbar={
                  <>
                    <Button
                      type="button"
                      color="white"
                      onClick={() => {
                        setOpen(true);
                      }}
                      startIcon={<AddToPhotosIcon fontSize="small" />}
                    >
                      {"Asignaciónes"}
                    </Button>

                    <Button
                      type="button"
                      color="white"
                      onClick={() => {
                        setOpenDialogCreateDevelopers(true);
                      }}
                      startIcon={<PersonAddIcon fontSize="small" />}
                    >
                      {"developers"}
                    </Button>
                  </>
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
                  value={assignment_requirements_deadline}
                  setValue={setAssignment_requirements_deadline}
                  label={"Fecha limite"}
                  required
                  containerInput={"form__demo-container-date"}
                  labelInputName={"form__label-name"}
                  inputName={"form__input-name"}
                />
              </div>

              <div className="botton-assigrequirement">
                <Button
                  type="submit"
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
                {renderAssigments && (
                  <AssigmentSelector
                    value={idassignment_requirements}
                    setValue={setIdassignment_requirements}
                    style={{ width: "95%" }}
                    ignore={["ASIGNADO", "TERMINADO"]}
                    required
                  />
                )}
                <DeveloperSelector
                  value={iddevelopers}
                  setValue={setIddevelopers}
                  ignore={["INACTIVO"]}
                  required
                />
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
            <DataTableCheckBox
              setValue={setItems}
              reload={handleReadAssigmentHasDevelopers}
              rows={readAssigmentHasDevelopers}
              columns={ColumnsTable.assigmentHasDevelopers}
              getRowId={"idassignment_requirements_has_developers"}
              onRowClick={{
                open: setOpenDialogEditHasDevelopers,
                set: setFieldsHasDevelopers,
              }}
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
              toolbar={
                <>
                  <Button
                    type="button"
                    color="primary"
                    startIcon={<AssignmentIcon />}
                    onClick={() => {
                      setOpeneditAssigmentStates(true);
                    }}
                  >
                    {"asignación"}
                  </Button>

                  <Button
                    disabled={items.length > 0 ? false : true}
                    type="button"
                    color="error"
                    onClick={handleDeleteAssigmentDevelopers}
                    startIcon={<DeleteOutlineIcon />}
                  >
                    {"Eliminar"}
                  </Button>
                </>
              }
            />
          </section>
        </div>
      </Dialog>

      <Dialog
        fullWidth
        maxWidth={"xl"}
        open={openDialogRequirements}
        sx={{
          borderRadius: "55px",
        }}
        onClose={() => {
          setOpenDialogRequirements(false);
        }}
        TransitionComponent={DialogTransition}
      >
        <div>
          <span className="parrafo-modal">Editar requerimientos</span>
        </div>

        <span
          className="button--close"
          onClick={() => {
            setOpenDialogRequirements(false);
          }}
        >
          x
        </span>

        <Divider />

        <div className="asignaciones__edit-container">
          <section className="EditarRequerimientos__Dialog">
            <form
              className="EditarRequerimientos__Form_Dialog"
              onSubmit={handleEditRequirements}
            >
              <div className="contenedor-inputs-asign">
                <StatesSelector
                  value={idstates}
                  setValue={setIdstates}
                  ignore={
                    idstates === 3
                      ? [
                          "PENDIENTE",
                          "ACTIVO",
                          "INACTIVO",
                          "ASIGNADO",
                          "RETRAZADO",
                          "NOVEDAD",
                          "RECHAZADO",
                          "DESARROLLO",
                        ]
                      : [
                          "ACTIVO",
                          "INACTIVO",
                          "ASIGNADO",
                          "RETRAZADO",
                          "NOVEDAD",
                          "RECHAZADO",
                          "DESARROLLO",
                        ]
                  }
                  required
                  disabled={idstates === 7 ? true : false}
                />

                <NormalInput
                  value={requirements_date}
                  setValue={setRequirements_date}
                  label={"Creación"}
                  required
                  readonly
                  containerInput={"form__demo-container-edit-develop"}
                  labelInputName={"form__label-name"}
                  inputName={"form__input-name"}
                />
              </div>

              <div className="contenedor-inputs-asign">
                <NormalInput
                  value={idrequirements}
                  setValue={setAssignment_requirements_deadline}
                  label={"Requerimiento"}
                  readonly
                  required
                  containerInput={"form__demo-container-edit-develop"}
                  labelInputName={"form__label-name"}
                  inputName={"form__input-name"}
                />
                <NormalInput
                  value={requirements_name}
                  setValue={setRequirements_name}
                  label={"Nombre"}
                  readonly
                  required
                  containerInput={"form__demo-container-edit-develop"}
                  labelInputName={"form__label-name"}
                  inputName={"form__input-name"}
                />
              </div>
              <div className="contenedor-inputs-asign">
                <CompaniesSelect
                  value={idcompanies}
                  setValue={setIdcompanies}
                  required
                  disabled
                />
              </div>
              <div className="contenedor-inputs-asign">
                <TextArea
                  style={{ width: "100%" }}
                  label={"Descripción"}
                  value={requirements_description}
                  setValue={setRequirements_description}
                  required
                />
              </div>

              <div className="botton-assigrequirement">
                <Button
                  type="submit"
                  style={{ marginBottom: "10px" }}
                  // color="secondary"
                  variant="contained"
                >
                  {"Editar"}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </Dialog>

      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={openDialogEditHasDevelopers}
        sx={{
          borderRadius: "55px",
        }}
        onClose={() => {
          setOpenDialogEditHasDevelopers(false);
        }}
        TransitionComponent={DialogTransition}
      >
        <div>
          <span className="parrafo-modal">Editar Tarea</span>
        </div>

        <span
          className="button--close"
          onClick={() => {
            setOpenDialogEditHasDevelopers(false);
          }}
        >
          x
        </span>

        <Divider />

        <div className="asignaciones__edit-container">
          <section className="EditarTarea__Seccion">
            <form
              className="EditarTarea__Dialog"
              onSubmit={handleEditAssigmentsHasDevelopers}
            >
              <div className="contenedor-inputs-asignedit-developers">
                <StatesSelector
                  style={{
                    width: "100%",
                  }}
                  value={idstatesHasDevelopers}
                  setValue={setIdstatesHasDevelopers}
                  ignore={[
                    "PENDIENTE",
                    "ACEPTADO",
                    "ACTIVO",
                    "INACTIVO",
                    "RETRAZADO",
                    "NOVEDAD",
                    "RECHAZADO",
                    "DESARROLLO",
                  ]}
                  required
                  disabled={idstatesHasDevelopers === 7 ? true : false}
                />
              </div>

              <div className="botton-assigrequirement-has-developers">
                <Button
                  type="submit"
                  style={{ marginBottom: "10px", width: "60%" }}
                  // color="secondary"
                  variant="contained"
                >
                  {"Editar"}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </Dialog>

      <Dialog
        fullWidth
        maxWidth={"xl"}
        open={openDialogCreateDevelopers}
        sx={{
          borderRadius: "55px",
        }}
        onClose={() => {
          setOpenDialogCreateDevelopers(false);
        }}
        TransitionComponent={DialogTransition}
      >
        <div>
          <span className="parrafo-modal">Crear desarrollador</span>
        </div>

        <span
          className="button--close"
          onClick={() => {
            setOpenDialogCreateDevelopers(false);
          }}
        >
          x
        </span>

        <Divider />

        <div className="asignaciones__container">
          <section className="asignaciones__container--form">
            <form className="form-asignacion" onSubmit={handleCreateDevelopers}>
              <div className="contenedor-inputs-asign">
                <NormalInput
                  value={developers_nameCreate}
                  setValue={setDevelopers_nameCreate}
                  label={"Nombre"}
                  type={"text"}
                  required
                  containerInput={"form__demo-container-date"}
                  labelInputName={"form__label-name"}
                  inputName={"form__input-name"}
                />

                <TypeDevelopers
                  value={developerscol_type}
                  setValue={setDeveloperscol_type}
                  required
                />
              </div>

              <div className="contenedor-inputs-asign">
                <NormalInput
                  value={developers_password}
                  setValue={setDevelopers_password}
                  label={"Contraseña"}
                  type={"password"}
                  required
                  containerInput={"form__demo-container-date"}
                  labelInputName={"form__label-name"}
                  inputName={"form__input-name"}
                />

                <NormalInput
                  value={developers_email}
                  setValue={setDdevelopers_email}
                  label={"Email"}
                  type={"email"}
                  required
                  containerInput={"form__demo-container-date"}
                  labelInputName={"form__label-name"}
                  inputName={"form__input-name"}
                />
              </div>

              <div className="botton-assigrequirement">
                <Button
                  type="submit"
                  style={{ marginBottom: "10px" }}
                  // color="secondary"
                  variant="contained"
                >
                  {"Crear"}
                </Button>
              </div>
            </form>
          </section>

          <section className="asignaciones__container--table">
            <DataTableBlack
              reload={readDevelopers}
              rows={readFullDevelopers}
              columns={ColumnsTable.fullDevelopers}
              getRowId={"iddevelopers"}
              onRowClick={{
                open: setOpenDialogEditDevelopers,
                set: setDialogEditofCreateDevelopers,
              }}
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

      <Dialog
        fullWidth
        maxWidth={"xl"}
        open={openDialogEditDevelopers}
        sx={{
          borderRadius: "55px",
        }}
        onClose={() => {
          setOpenDialogEditDevelopers(false);
          setDialogEditofCreateDevelopers();
        }}
        TransitionComponent={DialogTransition}
      >
        <div>
          <span className="parrafo__editardev">Editar Desarrolladores</span>
        </div>

        <span
          className="button--close"
          onClick={() => {
            setOpenDialogEditDevelopers(false);
            setDialogEditofCreateDevelopers();
          }}
        >
          x
        </span>

        <Divider />

        <div className="EditarDesarrolladores__Container">
          <section className="EditarDesarrolladores__section">
            <form
              className="editardesarrolladores__formulario"
              onSubmit={handleEditOfCreateDevelopers}
            >
              <div className="contenedor-inputs-asign">
                <NormalInput
                  value={developers_nameCreate}
                  setValue={setDevelopers_nameCreate}
                  label={"Nombre"}
                  type={"text"}
                  required
                  containerInput={"form__demo-container-edit-develop"}
                  labelInputName={"form__label-name"}
                  inputName={"form__input-name"}
                />

                <TypeDevelopers
                  value={developerscol_type}
                  setValue={setDeveloperscol_type}
                  required
                />
              </div>

              <div className="contenedor-inputs-asign">
                <NormalInput
                  value={developers_email}
                  setValue={setDdevelopers_email}
                  label={"Email"}
                  type={"email"}
                  required
                  containerInput={"form__demo-container-edit-develop"}
                  labelInputName={"form__label-name"}
                  inputName={"form__input-name"}
                />
                <StatesSelector
                  value={idstatesCreate}
                  setValue={setIstatesCreate}
                  ignore={[
                    "NOVEDAD",
                    "PENDIENTE",
                    "ACEPTADO",
                    "TERMINADO",
                    "ASIGNADO",
                    "RETRAZADO",
                    "DESARROLLO",
                    "RECHAZADO",
                  ]}
                />
              </div>

              <div className="contenedor-inputs-asign">
                <RolesSelect
                  value={idroles}
                  setValue={setIdroles}
                  // style={{ width: "70%" }}
                  ignore={["Clientes", "Administrador"]}
                />
              </div>

              <div className="botton-assigrequirement">
                <Button
                  type="submit"
                  style={{ marginBottom: "10px" }}
                  variant="contained"
                >
                  {"Editar"}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </Dialog>

      <Dialog
        fullWidth
        maxWidth={"md"}
        open={openeditAssigmentStates}
        sx={{
          borderRadius: "55px",
        }}
        onClose={() => {
          setOpeneditAssigmentStates(false);
        }}
        TransitionComponent={DialogTransition}
      >
        <div>
          <span className="parrafo-modal">Asignaciónes</span>
        </div>

        <span
          className="button--close"
          onClick={() => {
            setOpeneditAssigmentStates(false);
          }}
        >
          x
        </span>

        <Divider />

        <div className="asignaciones__edit-container">
          <section className="sectionAsigacion__container--table">
            <DataTableBlack
              reload={handleReadAssigmentsRequirements}
              rows={readAssigmentsRequirements}
              columns={ColumnsTable.assigments}
              getRowId={"idassignment_requirements"}
              onRowClick={{
                open: setOpeneditAssigments,
                set: setFieldsAssigmentEdit,
              }}
              sx={{
                width: "796px",
                "@media screen and (max-width: 1024px)": {
                  width: "96%",
                  margin: "auto",
                },
                marginTop: "10px",
                marginBottom: "20px",
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

      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={openeditAssigments}
        sx={{
          borderRadius: "55px",
        }}
        onClose={() => {
          setOpeneditAssigments(false);
        }}
        TransitionComponent={DialogTransition}
      >
        <div>
          <span className="parrafo-modal">Editar Asignación</span>
        </div>

        <span
          className="button--close"
          onClick={() => {
            setOpeneditAssigments(false);
          }}
        >
          x
        </span>

        <Divider />

        <div className="asignaciones__edit-container">
          <section className="EditarAsignacion__Dialog">
            <form
              className="EditarAsignacion__formDialog"
              onSubmit={handleAssigmentEdit}
            >
              <div className="contenedor-inputs-asignedit-developers">
                <StatesSelector
                  style={{
                    width: "100%",
                  }}
                  value={idstatesedit}
                  setValue={setIdstatesedit}
                  ignore={
                    idstatesedit === 9
                      ? [
                          "ASIGNADO",
                          "PENDIENTE",
                          "ACEPTADO",
                          "ACTIVO",
                          "INACTIVO",
                          "RETRAZADO",
                          "NOVEDAD",
                          "RECHAZADO",
                        ]
                      : idstatesedit === 7
                      ? [
                          "DESARROLLO",
                          "ASIGNADO",
                          "PENDIENTE",
                          "ACEPTADO",
                          "ACTIVO",
                          "INACTIVO",
                          "RETRAZADO",
                          "NOVEDAD",
                          "RECHAZADO",
                        ]
                      : [
                          "ASIGNADO",
                          "PENDIENTE",
                          "ACEPTADO",
                          "ACTIVO",
                          "INACTIVO",
                          "RETRAZADO",
                          "NOVEDAD",
                          "RECHAZADO",
                        ]
                  }
                  required
                  disabled={idstatesedit === 7 ? true : false}
                />
              </div>

              <div className="botton-assigrequirement-has-developers">
                <Button
                  type="submit"
                  style={{ marginBottom: "10px", width: "60%" }}
                  // color="secondary"
                  variant="contained"
                >
                  {"Editar"}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </Dialog>
    </>
  );
};

export default Requeriments;
