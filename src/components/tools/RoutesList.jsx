const host = import.meta.env.VITE_SERVER_URL_AUD;

export default {
  host: host,
  api: {
    companies: {
      create: `${host}/companies/create`,
      read:{
        read_companies_selector:`${host}/companies/readCompaniesSelector`,
      },
      requirements:{
        create: `${host}/companies/requirements/create`,
        read: {
          read_requirementsByclients:`${host}/companies/requirements/requirementsByclients`,
          read_pending:`${host}/companies/requirements/pending`,
          read_accept:`${host}/companies/requirements/accepted`,
          read_finished:`${host}/companies/requirements/finished`,
          read_requirementsByadmin:`${host}/companies/requirements/requirementsByadmin`,
          read_requirementSelector:`${host}/companies/requirements/requirementselector`,
          read_StateSelector:`${host}/companies/requirements/stateselector`,
        }
      }
    },
    assignment:{
      create: `${host}/assignment/create`,
    }
  },
};
