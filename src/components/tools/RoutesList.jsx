const host = import.meta.env.VITE_SERVER_URL_AUD;

export default {
  host: host,
  api: {
    auth:{
      login:`${host}/auth/login`,
    },
    roles:{
      read:`${host}/read-roles`
    },
    companies: {
      create: `${host}/companies/create`,
      read:{
        read_companies_selector:`${host}/companies/read-companies-selector`,
      },
      requirements:{
        create: `${host}/companies/requirements/create`,
        update: `${host}/companies/requirements/update`,
        read: {
          read_requirementsByclients:`${host}/companies/requirements/requirementsByclients`,
          read_pending:`${host}/companies/requirements/pending`,
          read_accept:`${host}/companies/requirements/accepted`,
          read_finished:`${host}/companies/requirements/finished`,
          read_requirementsByadmin:`${host}/companies/requirements/requirementsByadmin`,
          read_requirementSelector:`${host}/companies/requirements/requirements-selector`,
          read_StateSelector:`${host}/companies/requirements/stateselector`,
        }
      }
    },
    assignment:{
      create: `${host}/assignment/create`,
      read:{
        select:`${host}/assignment/read/select`,
      },
      developer:{
        create:`${host}/assignment/developers/create`,
        delete:`${host}/assignment/developers/delete`,
        update:`${host}/assignment/developers/update`,
        read:{
          bydevelopers:`${host}/assignment/developers/read/bydevelopers`,
          assigment:`${host}/assignment/developers/read/assigment`,
        }
      }
    },
    developer:{
        create:`${host}/developers/create`,
        update:`${host}/developers/update`,
      read:{
        full:`${host}/developers/read/`,
        select:`${host}/developers/read/select`,
      }
    }
  },
};
