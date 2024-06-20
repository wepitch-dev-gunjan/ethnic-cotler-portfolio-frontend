import config from "../../setup/config";

const BASE_URL = config.backend_url;

const API_ENDPOINTS = {
  ADMINS: `${BASE_URL}/admins`,
  APPOINTMENTS: `${BASE_URL}/appointments`,
  DOCTORS: `${BASE_URL}/doctors`,
  PATIENTS: `${BASE_URL}/patients`,
  NOTIFICATIONS: `${BASE_URL}/notifications`,
}

export default API_ENDPOINTS;