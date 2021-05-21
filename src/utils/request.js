import axios from "axios";

export const req = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const headers = {
    'Content-Type': 'application/json',
    'x-smartgift-app-id': process.env.REACT_APP_ID,
    'x-smartgift-app-secret': process.env.REACT_APP_SECRET_KEY,
  };

  return axios.create({
    baseURL,
    headers,
    validateStatus(status) {
      return status >= 200 && status < 300;
    },
  });
};