import http from "k6/http";
import { Trend } from "k6/metrics";

export const options = {
  vus: 100,
  duration: "30s",
};

const myTrend01 = new Trend("waiting_time_01");
const myTrend02 = new Trend("waiting_time_02");
const myTrend03 = new Trend("waiting_time_03");

export default function () {
  let categoriesResponse = http.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  myTrend01.add(categoriesResponse.timings.waiting);
  let usersResponse = http.get("https://api.escuelajs.co/api/v1/users");
  myTrend02.add(usersResponse.timings.waiting);
  let productsResponse = http.get("https://api.escuelajs.co/api/v1/products");
  myTrend03.add(productsResponse.timings.waiting);
}
