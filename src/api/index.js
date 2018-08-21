import Vue from "vue";
import Axios from "./axios.config";
import qs from "qs";

import { movie } from "./api";

const list = movie.concat([]);

for (let i = 0; i < list.length; i++) {
  for (let j = 0; j < list.length; j++) {
    if (list[i].name === list[j].name && i !== j) {
      throw new Error("same name in api");
    }
  }
}

Vue.prototype.$http = async function(name, params) {
  const item = list.find(item => item.name === name);
  if (item === undefined) throw new Error(`there is no api named '${name}'`);
  const config = {
    url: item.url,
    method: item.method
  };
  if (item.method === "get") {
    config.params = params;
  } else if (item.method === "post") {
    config.data = qs.stringify(params);
  }
  return Axios(config);
};
