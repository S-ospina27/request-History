import { LoadingButton } from "@mui/lab";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import "../assets/css/register.css";
import Teclab from "../assets/img/Teclab.png";
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TexfieldLinear from "../components/common/TexfieldLinear";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NormalInput from "../components/common/NormalInput";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
const Register = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Grid className={"container pantalla-dividida"}>
      <Grid item className={"izquierda"}>
        <Box className={"caja"}>
          <img src={Teclab} className={"foto-teclab"} />
          <h1 className="h1">Bienvenidos (a)</h1>

          <NormalInput
            label={"Razón social"}
            type={"text"}
            placeholder={"Ingrese su razon social"}
            // disabled={"disabled"}
            required
          />
          <NormalInput
            label={"Nit de la Empresa"}
            type={"number"}
            placeholder={"Ingrese su nit"}
            // disabled={"disabled"}
            required
          />
          <NormalInput
            label={"Nombre de la Empresa"}
            type={"text"}
            placeholder={"Ingrese su nombre"}
            // disabled={"disabled"}
            required
          />

          <Grid item className={"item__botton"} style={{ marginTop: "20px" }}>
            <Button
              className={"Botton"}
              color={"secondary"}
              variant="contained"
              size="large"
              onClick={() => setLoading(true)}
              startIcon={
                loading === false ? <SaveIcon /> : <CheckCircleOutlineIcon />
              }
            >
              Enviar
            </Button>
            {/* <LoadingButton
          size="large"
          color="secondary"
          onClick={()=> setLoading(true)}
          // loading={loading}
          loadingPosition="start"
          startIcon={ loading ===false ? <SaveIcon /> :<CheckCircleOutlineIcon/> }
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton> */}
          </Grid>
        </Box>
      </Grid>

      <Grid item className={"derecha"}>
        <Box className={"caja-derecha"}>
          <h1 className={"text-contactanos"}>Contáctanos</h1>
          <p className="text-conose">Cónose un poco más acerca de nosotros.</p>

          <div className={"link-direccon"}>
            <AddLocationAltRoundedIcon
              color={"white"}
              mr={2}
              fontSize={"large"}
            />
            <a
              className={"link"}
              href="https://www.google.com/maps/place/Cl.+30A+%2365B-59,+Medell%C3%ADn,+Bel%C3%A9n,+Medell%C3%ADn,+Antioquia/@6.2331603,-75.586624,17z/data=!3m1!4b1!4m5!3m4!1s0x8e44298bfc5217b3:0xe7c3ade44ef22777!8m2!3d6.233155!4d-75.5844353?hl=es"
              target={"_blank"}
            >
              CL 30A # 65B - 59 Medellin, Belen Fatima.
            </a>
          </div>

          <div className={"center-link"}>
            <TravelExploreRoundedIcon color="white" mr={2} fontSize={"large"} />
            <a
              className={"link"}
              href="https://www.teclab.com.co/"
              target={"_blank"}
            >
              https://www.teclab.com.co/
            </a>
          </div>
          <div className="center-redes">
          <FacebookIcon color="white" fontSize={"large"}/>
          <InstagramIcon color="white" fontSize={"large"}/>
          <AudiotrackIcon color="white" fontSize={"large"}/>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
