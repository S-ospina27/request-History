import { LoadingButton } from "@mui/lab";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../assets/css/register.css";
import Teclab from "../assets/img/Teclab.png";
import pagina from "../assets/img/pagina.png";
import tiktok from "../assets/img/tiktok.png";
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import NormalInput from "../components/common/NormalInput";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import clound from "../assets/img/clound.png";
import "animate.css";
import axios from "axios";
import RoutesList from "../components/tools/RoutesList";
import { set, getHeader } from "../components/tools/SessionSettings";

const Register = ({ setAlert }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isuser, setIsuser] = useState(false);

  const [companies_nit, setCompanies_nit] = useState("");
  const [companies_business_name, setCompanies_business_name] = useState("");
  const [companies_email, setCompanies_email] = useState("");
  const [companies_username, setCompanies_username] = useState("");

  const handlerRegister = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("companies_nit", companies_nit);
    form.append("companies_business_name", companies_business_name);
    form.append("companies_email", companies_email);
    form.append("companies_username", companies_username);

    axios
      .post(RoutesList.api.companies.create, form, getHeader())
      .then((res) => {
        // console.log(res.data);

        if (res.data.status === "info") {
          clearInputs();
          set("companies_nit", res.data.data.companies_nit);
          set("idroles", res.data.data.idroles);
          set("idcompanies", res.data.data.idcompanies);

          setAlert({
            open: true,
            message: res.data.message,
            severity: res.data.status,
          });
        } else {
          setIsuser(true);
          setAlert({
            open: true,
            message: res.data.message,
            severity: res.data.status,
          });
        }
      });
  };

  const clearInputs = () => {
    setCompanies_nit("");
    setCompanies_business_name("");
    setCompanies_email("");
    setCompanies_username("");

    setTimeout(() => {
      setLoading(false);
      navigate("/create");
    }, 2000);
  };

  return (
    <>
      <img
        src={clound}
        className="img-clound animate__animated animate__zoomInDown "
      />

      <Grid className={"container pantalla-dividida"}>
        <Grid item className={"izquierda"}>
          <form
            className={
              "caja animate__animated animate__zoomInDown animate__delay-1s"
            }
            onSubmit={handlerRegister}
          >
            <img src={Teclab} className={"foto-teclab"} />
            <h1 className="h1">Bienvenidos (a)</h1>

            <NormalInput
              label={"Nit o Cedula"}
              type={"number"}
              placeholder={"Ingrese su nit"}
              value={companies_nit}
              setValue={setCompanies_nit}
              required
            />
            <NormalInput
              label={"Correo"}
              type={"email"}
              placeholder={"Ingrese su correo"}
              value={companies_email}
              setValue={setCompanies_email}
              required
            />
            {isuser && (
              <>
                <NormalInput
                  label={"Razón social"}
                  type={"text"}
                  placeholder={"Ingrese su razon social"}
                  value={companies_business_name}
                  setValue={setCompanies_business_name}
                  required
                  animation={"animate__animated animate__backInDown"}
                />
                <NormalInput
                  label={"Nombre usuario"}
                  type={"text"}
                  placeholder={"Ingrese su nombre"}
                  value={companies_username}
                  setValue={setCompanies_username}
                  required
                  animation={"animate__animated animate__backInDown"}
                />
              </>
            )}

            <div
              item="true"
              className={"item__botton"}
              style={{ marginTop: "20px", width: "40%" }}
            >
              <Button
                type={"submit"}
                className={"Botton botton-gigante"}
                color={"secondary"}
                variant="contained"
                size="large"
                startIcon={
                  loading === false ? <SaveIcon /> : <CheckCircleOutlineIcon />
                }
                sx={{ width: "100%" }}
              >
                Enviar
              </Button>
            </div>
          </form>
        </Grid>

        <section item="true" className={"derecha"}>
          <Box className={"caja-derecha animate__animated animate__zoomInDown"}>
            <h1 className={"text-contactanos"}>Contáctanos</h1>
            <p className="text-conoce">
              Conóce un poco más acerca de nosotros.
            </p>

            <div className={"link-direccon"}>
              <AddLocationAltRoundedIcon
                style={{ marginRight: "10px" }}
                color={"white"}
                mr={2}
                fontSize={"medium"}
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
              <img src={pagina} style={{ marginRight: "10px" }} />
              <a
                className={"link"}
                href="https://www.teclab.com.co/"
                target={"_blank"}
              >
                https://www.teclab.com.co/
              </a>
            </div>
            <div className="center-redes">
              <FacebookIcon
                color="white"
                fontSize={"large"}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100083192027360"
                  )
                }
              />

              <InstagramIcon
                color="white"
                fontSize={"large"}
                onClick={() =>
                  window.open("https://www.instagram.com/teclab_col/?hl=es")
                }
              />

              <img
                src={tiktok}
                width={"22px"}
                onClick={() =>
                  window.open("https://www.tiktok.com/@teclab.com.co")
                }
              />
            </div>
          </Box>
        </section>
      </Grid>
    </>
  );
};

export default Register;
