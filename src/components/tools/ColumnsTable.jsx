export default {
  requirements:[
    { field: "idrequirements", headerName: "IDENTIFICADOR", width: 180,valueFormatter: ({ value }) => {
      return  "RQ-"+ value;
      }
    },
    { field: "requirements_name", headerName: "NOMBRE", width: 240 },
    { field: "states_name", headerName: "ESTADO", width: 180 },
  ]
};
