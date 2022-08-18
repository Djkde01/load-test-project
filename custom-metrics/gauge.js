import http from "k6/http";
import { Gauge } from "k6/metrics";

export const options = {
  vus: 100,
  duration: "30s",
};

const myGauge = new Gauge("last_call_time");

export default function () {
  const request = http.get("https://api.escuelajs.co/api/v1/products");
  myGauge.add(request.timings.waiting);
  console.log(myGauge.name);
}
