import jwtDecode from "jwt-decode";
import { useState } from "react";
import { get } from "../components/tools/SessionSettings";
import NotAuthoritation from "../pages/NotAuthoritation";

function NotRolMiddleware({ children, roles }) {
  const [jwt, setJwt] = useState(jwtDecode(get("jwt")));
  return roles.includes(jwt.data.idroles) ? <NotAuthoritation /> : children;
}

export default NotRolMiddleware;
