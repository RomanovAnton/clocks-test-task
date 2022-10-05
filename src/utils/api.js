const BASE_URL = "https://633c6ee9f11701a65f762100.mockapi.io/clocks/items";
const getData = () => {
  return fetch(BASE_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

export default getData;
