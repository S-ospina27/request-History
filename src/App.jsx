import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Alert, Slide, Snackbar, ThemeProvider } from "@mui/material";
import Styles from "./components/tools/Styles";
import { Create } from "@mui/icons-material";
import CreateRequirements from "./pages/CreateRequirements";
import Requeriments from "./pages/Requeriments";
import CreateAssignments from "./pages/CreateAssignments";
import AssignDevelopers from "./pages/AssignDevelopers";
import ClientsWithAuthenticationMiddleware from "./middleware/ClientsWithAuthenticationMiddleware";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: "",
  });

  return (
    <ThemeProvider theme={Styles}>
      {alert.open && (
        <Snackbar
          open={alert.open}
          autoHideDuration={alert.time ? alert.time : 1950}
          onClose={(reason) => {
            if (reason === "clickaway") return;

            setAlert({
              open: false,
              severity: "",
              message: "",
            });
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          TransitionComponent={(props) => <Slide {...props} direction="up" />}
        >
          <Alert
            severity={
              [
                "error",
                "route-error",
                "database-error",
                "existence-error",
                "session-error",
              ].includes(alert.severity)
                ? "error"
                : alert.severity
            }
          >
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      <Routes>
        <Route 
          path="/register" 
          element={
          <ClientsWithAuthenticationMiddleware setAlert={setAlert}  >
            <Register setAlert={setAlert} />
          </ClientsWithAuthenticationMiddleware>
          } 
        />

        <Route 
          path="/create"
          element={
            <ClientsWithAuthenticationMiddleware setAlert={setAlert}  >
              <CreateRequirements setAlert={setAlert} />
            </ClientsWithAuthenticationMiddleware>
          }
        />
        
        <Route path="/" element={<Login  setAlert={setAlert} />} />
        <Route path="/requirements" element={<Requeriments setAlert={setAlert} />} />
        <Route path="/create-assignments" element={<CreateAssignments />} />
        
        <Route path="/Developers-assignments" element={<AssignDevelopers />} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
