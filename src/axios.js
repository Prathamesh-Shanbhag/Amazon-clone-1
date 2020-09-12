import axios from "axios";

const instance = axios.create({
  //baseURL: 'http://localhost:5001/cl-28a79/us-central1/api'   // localhost url
  baseURL: "https://us-central1-cl-28a79.cloudfunctions.net/api", // url for deployed version
});

export default instance;
