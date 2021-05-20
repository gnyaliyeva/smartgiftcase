import { req } from "../utils/request";
import { endpoints } from "../config";

export function getProductsApi(query) {
  return req()
    .get(endpoints.get.products(query))
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
