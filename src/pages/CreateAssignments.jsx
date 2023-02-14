import { Box, Grid } from '@mui/material';
import React, { useState } from 'react'
import menu from "../assets/img/menu.png"
import DrawerLayout from '../components/Layout/DrawerLayout';

// import Draw from '../components/common/Draw';

const CreateAssignments = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <div className={"contaniner contenedor-requirement"}>
           <DrawerLayout helpOpen={helpOpen}  setHelpOpen={setHelpOpen}/>
         <img src={menu} width="50px" className={"img-menu"} onClick={ () => setHelpOpen(true) } />
          <h1 className={"h1-padre"}>Creación de asignaciónes</h1>
         <div className={"contenedor-body"}>
           <div className={"contenedor-informativo"}>
             <div className={"contenedores-hijos"}>
               <label>Aceptados: 4</label>
             </div>
             <div className={"contenedores-hijos"}>
               <label>Asignadas: 1</label>
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

export default CreateAssignments;