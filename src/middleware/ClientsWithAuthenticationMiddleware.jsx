import {clientsession} from "../components/tools/SessionSettings";

import Register from "../pages/Register";

function ClientsWithAuthenticationMiddleware({ setAlert, children }) {
  return !clientsession() ? <Register setAlert={setAlert} /> : children;
}

export default ClientsWithAuthenticationMiddleware;
