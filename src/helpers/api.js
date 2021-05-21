import { req } from "./request";
import { endpoints } from "./config";

export function getProducts(query, setResults) {
  return req()
    .get(endpoints.get.products(query))
    .then((response) => {
      setResults(response.data);
    })
    .catch((error) => {
      if (error.response) {
        const { data } = error.response;
        setResults({ data: data.message, status: data.status });
      }
    });
}
