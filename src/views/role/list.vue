<template>
  <div>
    <div class="search">
      <input type="text">
      <input type="date" v-model='date'>
    </div>
    <table class="table table-striped table-hover">
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
        <tr v-for = '(item, key) in count' :key='key'>
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
  export default {
    data() {
      return {
        date: '',
        count: 20
      }
    }
  }
</script>
