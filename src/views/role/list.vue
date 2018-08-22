<template>
  <div>
    <div class="search">
      <div class="item">日期：<input 
        type="date" 
        v-model='date'></div>
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
        <tr 
          v-for='(item, key) in count' 
          :key='key'>
          <td>{{ key }}</td>
          <td>{{ item % 3 * 300 }}</td>
          <td>{{ Number.parseInt(item / 3) }}</td>
          <td>active</td>
          <td>{{ new Date().toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: '',
      count: 20
    }
  },
  methods: {
    getSome() {
      this.$http('/v2/movie/top250').then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.getSome()
  }
}
</script>
