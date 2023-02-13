import { Box, Grid } from '@mui/material';
import React, { useState } from 'react'
import DrawersPages from '../components/Layout/Drawerspages';
import menu from "../assets/img/menu.png"
import DrawerLayout from '../components/Layout/DrawerLayout';

// import Draw from '../components/common/Draw';

const Requeriments = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <div className={"contaniner contenedor-requirement"}>
           <DrawerLayout helpOpen={helpOpen}  setHelpOpen={setHelpOpen}/>
         <img src={menu} width="50px" className={"img-menu"} onClick={ () => setHelpOpen(true) } />
          <h1 className={"h1-padre"}>Requerimientos</h1>
         <div className={"contenedor-body"}>
           <div className={"contenedor-informativo"}>
             <div className={"contenedores-hijos"}>
               <label>Pendientes: 4</label>
             </div>
             <div className={"contenedores-hijos"}>
               <label>Aceptadas: 1</label>
             </div>
             <div className={"contenedores-hijos"}>
               <label>Terminadas: 3</label>
             </div>
           </div>

           <div className={"conteniedor-tabla"}>

           </div>
         </div>

      </div>

  )
}

export default Requeriments;