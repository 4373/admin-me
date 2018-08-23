import Vue from 'vue'
import Axios from './axios.config'
import qs from 'qs'

import { cnode, douban } from './api'

const list = cnode.concat(douban)

for (let i = 0; i < list.length; i++) {
  for (let j = 0; j < list.length; j++) {
    if (list[i].name === list[j].name && i !== j) {
      throw new Error('same name in api')
    }
  }
}
/**
 * 全局ajax接口
 * @param {String} name 接口名
 * @param {Object} params 參數
 * @param {Object | undefined} config 特殊化配置
 */
Vue.prototype.$http = function(name, params, config = {}) {
  const item = list.find(item => item.name === name)
  if (item === undefined) throw new Error(`there is no api named '${name}'`)
  //
  const cfg = {
    url: item.url,
    method: item.method
  }
  // // 如果接口是 /detail/:id/some/:id 形式
  if (config.append && Array.isArray(config.append)) {
    cfg.url = item.url.replace(/:\w+/g, () => {
      return config.append.shift()
    })
  }
  if (item.method === 'get') {
    cfg.params = params
  } else if (item.method === 'post') {
    cfg.data = qs.stringify(params)
  }
  return Axios(Object.assign(cfg, config))
}
