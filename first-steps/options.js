import http from "k6/http";

export const options = {
  stages: [
    { duration: "10s", target: 10 },
    { duration: "10s", target: 100 },
    { duration: "10s", target: 100 },
    { duration: "10s", target: 10 },
  ],
};

export default function () {
  let response = http.get("https://api.escuelajs.co/api/v1/products");
}
