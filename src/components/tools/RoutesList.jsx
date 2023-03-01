const host = import.meta.env.VITE_SERVER_URL_AUD;

export default {
  host: host,
  api: {
    auth: {
      login: `${host}/api/auth/login`,
    },
    roles: {
      read: `${host}/api/read-roles`,
    },
    companies: {
      create: `${host}/api/companies/create`,
      read: {
        read_companies_selector: `${host}/api/companies/read-companies-selector`,
      },
      requirements: {
        create: `${host}/api/companies/requirements/create`,
        update: `${host}/api/companies/requirements/update`,
        read: {
          read_requirementsByclients: `${host}/api/companies/requirements/requirementsByclients`,
          read_pending: `${host}/api/companies/requirements/pending`,
          read_accept: `${host}/api/companies/requirements/accepted`,
          read_finished: `${host}/api/companies/requirements/finished`,
          read_requirementsByadmin: `${host}/api/companies/requirements/requirementsByadmin`,
          read_requirementSelector: `${host}/api/companies/requirements/requirements-selector`,
          read_StateSelector: `${host}/api/companies/requirements/stateselector`,
        },
      },
    },
    assignment: {
      create: `${host}/api/assignment/create`,
      update: `${host}/api/assignment/update`,
      read: {
        select: `${host}/api/assignment/read/select`,
        read_assigments: `${host}/api/assignment/read/read_assigments`,
      },
      developer: {
        create: `${host}/api/assignment/developers/create`,
        delete: `${host}/api/assignment/developers/delete`,
        update: `${host}/api/assignment/developers/update`,
        read: {
          bydevelopers: `${host}/api/assignment/developers/read/bydevelopers`,
          assigment: `${host}/api/assignment/developers/read/assigment`,
          tasks_assigned_status: `${host}/api/assignment/developers/read/tasks-assigned-status`,
          tasks_finished_status: `${host}/api/assignment/developers/read/tasks-finished-status`,
        },
      },
    },
    developer: {
      create: `${host}/api/developers/create`,
      update: `${host}/api/developers/update`,
      read: {
        full: `${host}/api/developers/read/`,
        select: `${host}/api/developers/read/select`,
      },
    },
  },
};
