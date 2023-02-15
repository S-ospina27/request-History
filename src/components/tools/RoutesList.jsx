const host = import.meta.env.VITE_SERVER_URL_AUD;

export default {
  host: host,
  api: {
    companies: {
      create: `${host}/companies/create`,
      requirements:{
        create: `${host}/companies/requirements/create`,
        read: `${host}/companies/requirements/read`,
      }
    },
  },
};
