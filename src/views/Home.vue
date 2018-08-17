<style src='../styl/home.styl'></style>
<template>
  <div class="home">
    <div class="home-left">
      <img src="@/assets/logo.png" class="my-3" width=160>
      <div class="menu-box">
        <div class="menu-parent" v-for='(item, key) in routes' :key='key'>
          <div class="parent-name">
            <i class="iconfont" :class='item.icon'></i>
            <span>{{item.name}}</span>
          </div>
          <div class="menu-children">
            <div class="children-name" v-for='(i, k) in item.children' :key='k'>
              <span>{{i.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { Routes } from '@/router.js'
  export default {
    name: 'home',
    data() {
      return {
        routes: Routes
      }
    }
  }
</script>
