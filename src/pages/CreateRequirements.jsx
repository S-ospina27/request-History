import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../assets/css/register.css";
import Teclab from "../assets/img/Teclab.png";
import ayuda from "../assets/img/ayuda.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import NormalInput from "../components/common/NormalInput";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import PrioritySelect from "../components/common/PrioritySelect";
import TextArea from "../components/common/TextArea";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Draw from "../components/common/Draw";
import axios from "axios";
import RoutesList from "../components/tools/RoutesList";
import DataTable from "../components/tools/DataTable";
import { getHeader } from "../components/tools/SessionSettings";
import ColumnsTable from "../components/tools/ColumnsTable";
import { remove } from "../components/tools/SessionSettings";
import { Form, useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const CreateRequirements = ({ setAlert }) => {
  const navigate = useNavigate();
  const [disappear, setDisappear] = useState(false);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(true);
  const [helpOpen, setHelpOpen] = useState(null);
  const [imagendatos, setImagendatos] = useState(false);
  const [readRequirements, setReadrequirements] = useState([]);

  const [idcompanies, setIdcompanies] = useState(sessionStorage.idcompanies);
  const [name_requirement, setName_requirement] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const hanledActionForm = () => {
    setDisappear(true);
    setDisplay(false);
  };

  const handlerCreateRequirements = (e) => {
    e.preventDefault();
    clearInputs();
    const form = new FormData();
    form.append("idcompanies", idcompanies);
    form.append("requirements_name", name_requirement);
    form.append("requirements_priority",priority);
    form.append("requirements_description", description);
    axios
      .post(RoutesList.api.companies.requirements.create, form, getHeader())
      .then((res) => {
        // console.log(res.data)

        if (res.data.status === "success") {
          setAlert({
            open: true,
            message: res.data.message,
            severity: res.data.status,
          });
          setLoading(true);
          handlerReadrequirementsByClients();
        }
        setAlert({
          open: true,
          message: res.data.message,
          severity: res.data.status,
        });
      });
  };

  const clearInputs = () => {
    setName_requirement("");
    setPriority("");
    setDescription("");
    setLoading(true);
    setImagendatos(false);
  };

  const handlerReadrequirementsByClients = () => {
    const form = new FormData();
    if (![undefined,null].includes(idcompanies)) {
      form.append("idcompanies", idcompanies);

    }
    axios
      .post(RoutesList.api.companies.requirements.read.read_requirementsByclients,form, getHeader())
      .then((res) => {
        setReadrequirements(res.data.status === "success"? []: res.data);
      });
  };

  const handlerClosepage = () => {
    remove("companies_nit");
    navigate("/register");
  };

  useEffect(() => {
    handlerReadrequirementsByClients();
  }, []);

  return (
    <div className={" container contenedor"}>
      <Draw helpOpen={helpOpen} setHelpOpen={setHelpOpen} />
      <img src={Teclab} className={"foto-teclab-req"} />
      <img
        src={ayuda}
        className={"img-ayuda"}
        onClick={() => setHelpOpen(true)}
      />

      <Grid className={"pantalla-dividida-requirements"}>
        <Grid item className={"izquierda-requiremients"}>
          <form
            className={"caja-requirements"}
            onSubmit={handlerCreateRequirements}
          >
            <h1 className="h1-requirements">Crea tus requerimientos</h1>
            {display && (
              <button
                className={" btn botton-gigante"}
                onClick={() => hanledActionForm()}
              >
                HAGA CLICK AQUI
                <TouchAppIcon color="white" fontSize="large" />
              </button>
            )}

            {disappear && (
              <>
                <NormalInput
                  label={"Nombre"}
                  type={"text"}
                  placeholder={"Ingrese nombre"}
                  value={name_requirement}
                  setValue={setName_requirement}
                  required
                />

                <PrioritySelect
                  value={priority}
                  setValue={setPriority}
                  required
                />

                <TextArea
                  label={"Descripción"}
                  value={description}
                  setValue={setDescription}
                  required
                />

                <Grid
                  item
                  className={"item__botton"}
                  style={{ marginTop: "2px" }}
                >
                  <Button
                    type={"submit"}
                    className={"Botton"}
                    color={"secondary"}
                    variant="contained"
                    size="large"
                    startIcon={
                      loading === false ? (
                        <MenuBookIcon />
                      ) : (
                        <CheckCircleOutlineIcon />
                      )
                    }
                  >
                    Agregar
                  </Button>
                </Grid>
              </>
            )}
          </form>
        </Grid>

        <Grid item className={"derecha_requerimients"}>
          <Box className={"caja-requirements-der"}>
            <div className="table-contenedor">
              <DataTable
                reload={handlerReadrequirementsByClients}
                rows={readRequirements}
                columns={ColumnsTable.requirements}
                getRowId={"idrequirements"}
                // onRowClick={{
                //   open: setOpenCreatTechnical,
                //   set: setFields,
                // }}
                sx={{
                  width: "600px",
                  height: "395px",
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
            </div>
            <div className={"Botton-cerrar"}>
              <Button
                type={"submit"}
                color={"secondary"}
                variant="contained"
                size="large"
                onClick={() => handlerClosepage()}
                startIcon={<ExitToAppIcon />}
              >
                Salir
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateRequirements;
