import { Box, Grid } from "@mui/material";
import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import menu from "../assets/img/menu.png";
import DrawerLayout from "../components/Layout/DrawerLayout";
import ColumnsTable from "../components/tools/ColumnsTable";
import DataTable from "../components/tools/DataTable";
import RoutesList from "../components/tools/RoutesList";
import { get, getHeader, remove } from "../components/tools/SessionSettings";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate} from "react-router-dom";


const Developers = ({ setAlert }) => {
  const navigate = useNavigate();
  const [helpOpen, setHelpOpen] = useState(false);
  const [readDevelopers, setReadDevelopers] = useState([]);

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

  useEffect(() => {
    handleReadDevelopers();
  }, []);

  return (
    <div className={"contaniner contenedor-requirement"}>
      {/* <DrawerLayout helpOpen={helpOpen} setHelpOpen={setHelpOpen} /> */}
      {/* <img
        src={menu}
        width="50px"
        className={"img-menu"}
        onClick={() => setHelpOpen(true)}
      /> */}
      <button
      className={"img-menu"}
      variant={"contained"}
      onClick={()=>{
        remove("jwt")
        navigate("/")
        }}
      >
      
      Salir
      </button>

      <h1 className={"h1-padre"}>Desarrolladores</h1>
      <div className={"contenedor-body"}>
        <section className={"contenedor-informativo"}>
          <div className={"contenedores-hijos"}>
            <label>Asignados: 4</label>
          </div>
          <div className={"contenedores-hijos"}>
            <label>Terminados: 1</label>
          </div>
        </section>

        <div className={"conteniedor-tabla"}>
          <div className="tabla-admin">
            <DataTable
                reload={handleReadDevelopers}
                rows={readDevelopers}
                columns={ColumnsTable.assigmentBydevelopers}
                getRowId={"idassignment_requirements"}
                // onRowClick={{
                //   open: setOpenDialogRequirements,
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
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
