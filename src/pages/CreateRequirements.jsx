import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import "../assets/css/register.css";
import Teclab from "../assets/img/Teclab.png";
import ayuda from "../assets/img/ayuda.png";
import sindatos from "../assets/img/imagen-sindatos.png";
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import NormalInput from "../components/common/NormalInput";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import PrioritySelect from "../components/common/PrioritySelect";
import TextArea from "../components/common/TextArea";
import Cards from "../components/common/Cards";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuHelps from "../components/common/MenuHelps";
import Draw from "../components/common/Draw";

const CreateRequirements = () => {
  const [disappear, setDisappear] = useState(false);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(true);
  const [helpOpen, setHelpOpen] = useState(null);
  const [imagendatos, setImagendatos]= useState(true);

  const [name_requirement,setName_requirement]=useState("");
  const [priority,setPriority]=useState("");
  const [description,setDescription]=useState("");

  const hanledActionForm = () => {
    setDisappear(true);
    setDisplay(false);
  };

  const handlerCreateRequirements = (e) => {
    e.preventDefault();
    console.log(name_requirement);
    console.log(priority);
    console.log(description);
  
    clearInputs();
  };

  const clearInputs = () => {
    setName_requirement("");
    setPriority("");
    setDescription("");
    setLoading(true);
    setImagendatos(false)
  };
  return (
    <div className={" container contenedor"}>
    <Draw helpOpen={helpOpen}  setHelpOpen={setHelpOpen}/>
      <img src={Teclab} className={"foto-teclab-req"} />
      <img src={ayuda} className={"img-ayuda"} onClick={ () =>setHelpOpen(true) } />

      <Grid className={"pantalla-dividida-requirements"}>
        <Grid item className={"izquierda-requiremients"} >

          <form className={"caja-requirements"} onSubmit={handlerCreateRequirements} >
            <h1 className="h1-requirements">Crea tus requerimientos</h1>
            {display && (
              <button
                className={" btn botton-gigante"}
                onClick={() => hanledActionForm()}
              >
                HAGA CLICK AQUI
                <TouchAppIcon color="white" fontSize="large"/>
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
                  required />

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
                    onClick={() => setLoading(true)}
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
          {imagendatos &&
            <img src={sindatos} className={"img-sindatos"} />
          }
          {loading &&

          <h1 className="h1-requirements">SE AGREGO REQUERIMIENTO</h1>
          }
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateRequirements;
