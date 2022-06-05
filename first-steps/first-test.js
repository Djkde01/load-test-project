import http from "k6/http";

export default function () {
  let response = http.get("https://api.escuelajs.co/api/v1/products");
}
