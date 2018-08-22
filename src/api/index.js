import Vue from 'vue'
import Axios from './axios.config'
import qs from 'qs'

import { movie } from './api'

const list = movie.concat([])

for (let i = 0; i < list.length; i++) {
  for (let j = 0; j < list.length; j++) {
    if (list[i].name === list[j].name && i !== j) {
      throw new Error('same name in api')
    }
  }
}

Vue.prototype.$http = function(name, params, config = {}) {
  const item = list.find(item => item.name === name)
  if (item === undefined) throw new Error(`there is no api named '${name}'`)
  const cfg = {
    url: `${item.url}${config.append ? '/' + config.append : ''}`, // 豆瓣的详情接口是 /detail/:id 形式
    method: item.method
  }
  if (item.method === 'get') {
    cfg.params = params
  } else if (item.method === 'post') {
    cfg.data = qs.stringify(params)
  }
  return Axios(Object.assign(cfg, config))
}
