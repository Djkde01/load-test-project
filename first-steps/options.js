import http from "k6/http";

export const options = {
  stages: [
    { duration: "60s", target: 100 },
    { duration: "180s", target: 100 },
    { duration: "60s", target: 0 },
  ],
};

export default function () {
  let response = http.get("https://api.escuelajs.co/api/v1/products");
}
