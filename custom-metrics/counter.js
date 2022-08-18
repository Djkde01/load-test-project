import http from "k6/http";
import { Counter } from "k6/metrics";

export const options = {
  vus: 100,
  duration: "30s",
};

const categoriesCounter = new Counter("called_categories");
const usersCounter = new Counter("called_users");
const productsCounter = new Counter("called_products");

export default function () {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      let categoriesResponse = http.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      categoriesCounter.add(1);
      break;

    case 1:
      let usersResponse = http.get("https://api.escuelajs.co/api/v1/products");
      usersCounter.add(1);
      break;
    case 2:
      let productsResponse = http.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      productsCounter.add(1);
      break;
    default:
      break;
  }
}
