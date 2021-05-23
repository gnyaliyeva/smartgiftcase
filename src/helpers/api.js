import { req } from "./request";
import { endpoints } from "./config";

export function getProducts(query, setResults) {
  setResults({ isLoading: true });
  return req()
    .get(endpoints.get.products(query))
    .then((response) => {
      setResults({ ...response.data, isLoading: false });
    })
    .catch((error) => {
      if (error.response) {
        const { data } = error.response;
        setResults({
          data: data.message,
          status: data.status,
          isLoading: false,
        });
      }
    });
}
