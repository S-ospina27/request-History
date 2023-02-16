export default {
  requirements:[
    { field: "idrequirements", headerName: "IDENTIFICADOR", width: 180,valueFormatter: ({ value }) => {
      return  "RQ-"+ value;
      }
    },
    { field: "requirements_name", headerName: "NOMBRE", width: 240 },
    { field: "states_name", headerName: "ESTADO", width: 180 },
  ],
  requirementsAdmin:[
    { field: "idrequirements", headerName: "IDENTIFICADOR", width: 180,valueFormatter: ({ value }) => {
      return  "RQ-"+ value;
      }
    },
    { field: "companies_business_name", headerName: "COMPAÑIA", width: 240 },
    { field: "companies_username", headerName: "USUARIO", width: 180 },
    { field: "requirements_name", headerName: "NOMBRE REQUERIMIENTO", width: 180 },
    { field: "requirements_priority", headerName: "TIPO", width: 180 },
    { field: "requirements_description", headerName: "DESCRIPCIÓN", width: 180 },
    { field: "states_name", headerName: "ESTADO", width: 180 },
    { field: "requirements_date", headerName: "FECHA", width: 180 },
  ]
};
