import axios from "axios";

const api = axios.create({
  // baseURL: "https://api.douban.com"
});

api.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function(response) {
    const { data } = response;
    return data;
  },
  function(error) {
    const { response } = error;
    const { data } = response;
    window.alert(data.msg);
    return Promise.reject(data);
  }
);

export { api };
