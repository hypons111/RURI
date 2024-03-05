import axios from 'axios';
import URL from "./url";

function axiosGet(apiName) {
  return axios.get(URL.url(apiName)).then((response) => {
    return response
  });
}

function axiosPost() {

}

function axiosPut() {

}

function axiosDelete() {

}

export default {
  axiosGet,
  axiosPost,
  axiosPut,
  axiosDelete
}
