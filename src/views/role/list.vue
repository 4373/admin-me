<template>
  <div>
    <div class="search">
      <div class="item">日期：<input type="date" v-model='date'></div>
      <div class="item">角色：<input type="text"></div>
      <button>搜索</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>role name</th>
          <th>rank</th>
          <th>stutas</th>
          <th>create time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item, key) in count' :key='key'>
          <td>{{key}}</td>
          <td>{{item % 3 * 300}}</td>
          <td>{{Number.parseInt(item / 3)}}</td>
          <td>active</td>
          <td>{{new Date().toLocaleString()}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import { api } from '@/api/axios.config.js'
  export default {
    data() {
      return {
        date: '',
        count: 20
      }
    },
    methods: {
      getSome() {
        api.get('/v2/movie/top2503').then(res => {
          console.log('list: ' + res)
        }).catch(e => {
          console.log(e)
        })
      }
    },
    mounted() {
      this.getSome()
    }
  }
</script>
