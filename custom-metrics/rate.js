import http from "k6/http";
import { Rate } from "k6/metrics";

export const options = {
  vus: 100,
  duration: "30s",
};

const myRate = new Rate("called_products");

export default function () {
  const request = http.get(
    `https://api.escuelajs.co/api/v1/products/${Math.floor(
      Math.random() * 300
    )}`
  );
  if (request.status != 404) {
    myRate.add(1);
  } else {
    myRate.add(0);
  }
}
