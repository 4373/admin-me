<style src='../styl/home.styl'>
</style>
<template>
  <div class="home bs1">
    <div class="home-left">
      <img 
        src="@/assets/logo.png" 
        class="my-3" 
        width=160>
      <div class="menu-box">
        <div 
          class="menu-parent" 
          v-for='(item, key) in routes' 
          :key='key'>
          <div class="parent-name">
            <i 
              class="iconfont" 
              :class='item.meta.icon'/>
            <span>{{ item.name }}</span>
          </div>
          <div class="menu-children">
            <router-link 
              :to='`/${item.path}/${i.path}`' 
              class="children-name" 
              v-for='(i, k) in item.children' 
              :key='k'>
              {{ i.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="home-right">

      <header>
        <div class="breadcrumb">
          <span 
            v-for='(item, key) in breadcrumb' 
            :key='key' 
            class="breadcrumb-item">
            <router-link 
              :to='item.path'>
              <i 
                class="iconfont" 
                :class="item.icon"/>
              <span>{{ item.name }}</span>
            </router-link>
            <span class="mx-2 split">|</span>
          </span>
          <span 
            class="mr-5 text-success" 
            v-show='activeApi'>正在请求{{ activeApi }} ..</span>
        </div>
      </header>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { Routes } from '@/router.js'
export default {
  name: 'Home',
  computed: {
    breadcrumb() {
      const matched = this.$route.matched
      const one = {
        name: matched[0].name,
        icon: 'icon-home',
        path: matched[0].redirect
      }
      const two = {
        name: matched[1].name,
        icon: matched[1].meta.icon,
        path: matched[1].redirect
      }
      const three = {
        name: matched[2].name,
        icon: 'icon-star',
        path: this.$route.path
      }
      if (matched.length > 3) {
        matched.slice(3).forEach(item => {
          if (item.name === undefined) {
            if (item.path.endsWith('list')) three.name += ` · 列表 `
            if (item.path.endsWith('deal')) three.name += ` · 处理 `
            if (item.path.endsWith('detail')) three.name += ` · 详情 `
          } else {
            three.name += `${item.name} ·`
          }
        })
      }
      return [one, two, three]
    },
    activeApi() {
      const api = this.$store.state.url
      if (api.length > 0) {
        return api[api.length - 1]
      }
      return ''
    }
  },
  data() {
    return {
      routes: Routes
    }
  },
  mounted() {}
}
</script>
