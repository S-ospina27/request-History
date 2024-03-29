export default {
  assigments: [
    {
      field: "idassignment_requirements",
      headerName: "AS",
      width: 70,
      valueFormatter: ({ value }) => {
        return "AS-" + value;
      },
    },
    { field: "requirements_name", headerName: "REQUERIMIENTO", width: 140 },
    { field: "states_name", headerName: "ESTADO", width: 115 },
    {
      field: "assignment_requirements_date",
      headerName: "FECHA CREACIÓN",
      width: 150,
    },
    {
      field: "assignment_requirements_deadline",
      headerName: "FECHA LIMITE",
      width: 120,
    },
    {
      field: "assignment_requirements_finish_date",
      headerName: "FECHA CIERRE",
      width: 144,
    },
  ],
  assigmentBydevelopers: [
    {
      field: "idassignment_requirements",
      headerName: "AS-DEV",
      width: 200,
      valueFormatter: ({ value }) => {
        return "AS-" + value;
      },
    },
    { field: "states_name", headerName: "ESTADO AS-DEV", width: 200 },
    { field: "states_name_ar", headerName: "ESTADO ASIGNACIÓN", width: 200 },
    {
      field: "assignment_requirements_deadline",
      headerName: "FECHA DE ENTREGA",
      width: 240,
    },
    { field: "requirements_name", headerName: "REQUERIMIENTO", width: 240 },
    { field: "states_name_req", headerName: "ESTADO RQ", width: 200 },
  ],
  fullDevelopers: [
    { field: "developers_name", headerName: "NOMBRE", width: 200 },
    { field: "developerscol_type", headerName: "TIPO", width: 130 },
    { field: "states_name", headerName: "ESTADO", width: 130 },
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
