
// import RouteListNavigation from "./RouteListNavigation";

// const roles = {
//   administrator: 1,
//   technical: 2,
//   distributor: 3,
//   provider: 4,
// };

// const rolesDisplay = {
//   1: "Administrador",
//   2: "Técnico",
//   3: "Distribuidor",
//   4: "Proveedor",
// };

export function remove(item) {
  sessionStorage.removeItem(item);
}

export function get(item) {
  return sessionStorage.getItem(item);
}

export function set(key, item) {
  sessionStorage.setItem(key, item);
}

// export function getRol(rol, display = false) {
//   if (!display) {
//     return roles[rol];
//   }

//   return rolesDisplay[rol];
// }

// export function navigationLinks() {
//   if (!session()) {
//     return RouteListNavigation.offline;
//   } else {
//     const jwt = getJWT();

//     return jwt.data.idroles === 1
//       ? RouteListNavigation.online.administrator
//       : jwt.data.idroles === 2
//       ? RouteListNavigation.online.technical
//       : jwt.data.idroles === 3
//       ? RouteListNavigation.online.dealer
//       : jwt.data.idroles === 4
//       ? RouteListNavigation.online.provider
//       : [];
//   }
// }

export function getHeader() {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ` + get("jwt"),
    },
  };
}

export function getHeaderMultipart() {
  const header = getHeader();
  header.headers["Content-Type"] = "multipart/form-data";
  return header;
}

