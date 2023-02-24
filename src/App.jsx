import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Alert, Slide, Snackbar, ThemeProvider } from "@mui/material";
import Styles from "./components/tools/Styles";
import { Create } from "@mui/icons-material";
import CreateRequirements from "./pages/CreateRequirements";
import Requeriments from "./pages/Requeriments";
import CreateAssignments from "./pages/CreateAssignments";
import Developers from "./pages/Developers";
import ClientsWithAuthenticationMiddleware from "./middleware/ClientsWithAuthenticationMiddleware";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import NotRolMiddleware from "./middleware/NotRolMiddleware";
import WithAuthenticationMiddleware from "./middleware/WithAuthenticationMiddleware";
import session from "./components/tools/SessionSettings";

function App() {
  const [userSession, setUserSession] = useState(session());
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
          path="/"
          element={
            <Login setAlert={setAlert} setUserSession={setUserSession} />
          }
        />

        <Route
          path="/developers"
          element={
            <NotRolMiddleware roles={[1, 2, 4]}>
              <Developers setAlert={setAlert} />
            </NotRolMiddleware>
          }
        />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/register"
          element={
            <ClientsWithAuthenticationMiddleware setAlert={setAlert}>
              <Register setAlert={setAlert} />
            </ClientsWithAuthenticationMiddleware>
          }
        />

        <Route
          path="/create"
          element={
            <ClientsWithAuthenticationMiddleware setAlert={setAlert}>
              <CreateRequirements setAlert={setAlert} />
            </ClientsWithAuthenticationMiddleware>
          }
        />

        <Route
          path="/requirements"
          element={
            <WithAuthenticationMiddleware
              setAlert={setAlert}
              setUserSession={setUserSession}
            >
              <NotRolMiddleware roles={[2, 3]}>
                <Requeriments setAlert={setAlert} />
              </NotRolMiddleware>
            </WithAuthenticationMiddleware>
          }
        />

        <Route
          path="/create-assignments"
          element={
            <WithAuthenticationMiddleware
              setAlert={setAlert}
              setUserSession={setUserSession}
            >
              <NotRolMiddleware roles={[2, 3]}>
                <CreateAssignments />
              </NotRolMiddleware>
            </WithAuthenticationMiddleware>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
