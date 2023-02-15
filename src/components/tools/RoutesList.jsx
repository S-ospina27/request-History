const host = import.meta.env.VITE_SERVER_URL_AUD;

export default {
  host: host,
  api: {
    companies: {
      create: `${host}/companies/create`,
      requirements:{
        create: `${host}/companies/requirements/create`,
        read: {
          read_requirementsByclients:`${host}/companies/requirements/requirementsByclients`,
          read_pending:`${host}/companies/requirements/pending`,
          read_accept:`${host}/companies/requirements/accepted`,
          read_finished:`${host}/companies/requirements/finished`,
        }
      }
    },
  },
};
