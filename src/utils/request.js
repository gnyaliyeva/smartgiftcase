import axios from "axios";

export const req = (baseURL = process.env.REACT_APP_BASE_URL) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'x-smartgift-app-id': 'zOdeE81mInZIiPLrdHRd0IVZ1a2vv42p6tvh8SX3',
    'x-smartgift-app-secret': 'ldPn67Cf7e0NboidnQ30KTtrfD1nqPpoSqs69EfH',
  };

  return axios.create({
    baseURL,
    headers: defaultHeaders,
    validateStatus(status) {
      return status >= 200 && status < 300;
    },
  });
};