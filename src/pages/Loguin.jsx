import { Button } from '@mui/material'
import React from 'react'
import NormalInput from '../components/common/NormalInput'
import "../components/Layout/Layout.css"
import teclab from "../assets/img/teclab blanco.png";
const Loguin = () => {
  return (
    <div className={"Contenedor__padre__loguin"}>
        <section className={"section__izq"}>
           <form className={"form__loguin"}>
            <h1 className='loguin__title'>Login</h1>
            <div className="asignaciones__loguin__container">
                <NormalInput
                    label={"Usuario"}
                />
                <NormalInput
                    label={"Contraseña"}
                />

                <Button
                  className={"Botton botton-gigante"}
                  type="submit"
                  style={{ marginTop: "15px" }}
                  variant="contained"
                >
                  {"Ingresar"}
                </Button>
            </div>
           </form> 
        </section> 

        <section className={"section__der"}>
           <div className={"loguin__container_foto_teclab"}>
            <img className={"loguin__foto_teclab"} src={teclab} />
            <p className='parrafo__loguin'>¡Has que tus ideas despeguen!</p>
           </div> 
        </section> 
    </div>
  )
}

export default Loguin
