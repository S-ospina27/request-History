export default {
  assigmentBydevelopers: [
    {
      field: "idassignment_requirements",
      headerName: "ASIGNACIÓN",
      width: 140,
      valueFormatter: ({ value }) => {
        return "AS-" + value;
      },
    },
    { field: "requirements_name", headerName: "REQUERIMIENTO", width: 220 },
    { field: "idstates", headerName: "ESTADO DE ASIGNACIÓN", width: 200 },
    {
      field: "assignment_requirements_deadline",
      headerName: "FECHA DE ENTREGA",
      width: 180,
    },
    { field: "requirements_priority", headerName: "TIPO", width: 180 },
    { field: "states_name", headerName: "ESTADO", width: 200 },
  ],
  fullDevelopers: [
    { field: "developers_name", headerName: "NOMBRE", width: 180 },
    { field: "developerscol_type", headerName: "TIPO", width: 130 },
    { field: "states_name", headerName: "ESTADO", width: 200 },
  ],
  assigmentHasDevelopers: [
    {
      field: "idassignment_requirements",
      headerName: "ASIGNACIÓN",
      width: 180,
      valueFormatter: ({ value }) => {
        return "AS-" + value;
      },
    },
    { field: "developers_name", headerName: "DESARROLLADOR", width: 240 },
    { field: "states_name", headerName: "ESTADO", width: 190 },
  ],
  requirements: [
    {
      field: "idrequirements",
      headerName: "IDENTIFICADOR",
      width: 180,
      valueFormatter: ({ value }) => {
        return "RQ-" + value;
      },
    },
    { field: "requirements_name", headerName: "NOMBRE", width: 240 },
    { field: "states_name", headerName: "ESTADO", width: 180 },
  ],
  requirementsAdmin: [
    {
      field: "idrequirements",
      headerName: "IDENTIFICADOR",
      width: 180,
      valueFormatter: ({ value }) => {
        return "RQ-" + value;
      },
    },
    { field: "companies_business_name", headerName: "COMPAÑIA", width: 240 },
    {
      field: "requirements_name",
      headerName: "NOMBRE REQUERIMIENTO",
      width: 240,
    },
    { field: "requirements_priority", headerName: "TIPO", width: 180 },
    { field: "states_name", headerName: "ESTADO", width: 180 },
    { field: "requirements_date", headerName: "FECHA", width: 200 },
  ],
};
