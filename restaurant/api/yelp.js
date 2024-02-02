import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 81abSyJfQTXAXom-BiC60xZcKBB8eV_LQW0iu1Ir6gvnu4puEaJRC-uRNNLa5we3TrB4-q3ljddNlX7Y27L25g3c6Mr438uVz3lJ3nyyUH4ICFkFZ69GJdKyXTm5ZXYx",
  },
});
