// A diferencia de process, hay un comando donde se pueden tener solo los resultados del test, tal como  aparecen en la terminal
// Para eso, se debe correr el siguiente comando, que mandará los resultados, a un .json que podremos usar después
// `k6 run --summary-export=export.json output/results.js`

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
