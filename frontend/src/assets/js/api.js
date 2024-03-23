import axios from 'axios';
import URL from "./url";

const requestConfig = {
  headers: {
    "Content-Type": 'application/json'
  }
};

function axiosGet(apiName) {
  return axios.get(URL.url(apiName))
}

function axiosPost(apiName, requestData) {
  return axios.post(URL.url(apiName), requestData, requestConfig)
}

function axiosPut() { }

function axiosDelete() { }

export default {
  axiosGet,
  axiosPost,
  axiosPut,
  axiosDelete
}
