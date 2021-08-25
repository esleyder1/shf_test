import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "https://969rgz78f9.execute-api.us-east-1.amazonaws.com/dev/api/";

export default {
  //setear y estrablecer el nombre de usuario en Cookie
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },

  //puntos del API
  login() {
    return axios.get(ENDPOINT_PATH + "user");
  },
  getCategories() {
    return axios.get(ENDPOINT_PATH + "categories");
  },
  getStores(query) {
    return axios.get(ENDPOINT_PATH + "stores", {
      params: {
        q: query,
        _embed: "products"
      }
    })
  },
  getPromos() {
    return axios.get(ENDPOINT_PATH + "promos");
  }
};
