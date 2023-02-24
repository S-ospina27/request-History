import session from "../components/tools/SessionSettings";
import Login from "../pages/Login";

function WithAuthenticationMiddleware({ setAlert, children, setUserSession }) {
  return !session() ? (
    <Login setAlert={setAlert} setUserSession={setUserSession} />
  ) : (
    children
  );
}

export default WithAuthenticationMiddleware;
