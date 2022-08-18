import { check } from "k6";
import http from "k6/http";

export const options = {
  vus: 20,
  duration: "15s",
};

export default function () {
  const response = http.get("https://api.escuelajs.co/api/v1/products");
  check(response, {
    "status is 200": (r) => r.status === 200,
    "transaction is below 500ms": (r) => r.timings.duration < 500,
  });
}
