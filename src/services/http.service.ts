import axios from "axios";

axios.defaults.baseURL = `https://fir-memoryx-2-default-rtdb.europe-west1.firebasedatabase.app/`;

const httpService = {
  get: axios.get,
  post: axios.post,
};
export default httpService;
