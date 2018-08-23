<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>序号</th>
          <th>名称</th>
          <th>导演</th>
          <th>主演</th>
          <th>类型</th>
          <th>收藏</th>
          <th>评分</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for ='(item, key) in list' 
          :key='key'>
          <td>{{ key + 1 }}</td>
          <td>
            <span>{{ item.title }}</span>
          </td>
          <td>
            {{ item.reply_count }}
          </td>
          <td>
            {{ item.visit_count }}
          </td>
          <td>
            <span>{{ item.tab }}</span>
          </td>
          <td>{{ item.collect_count }}</td>
          <td>{{ item.top }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      total: 0
    }
  },
  mounted() {
    this.$http('cnodeList', {
      page: 1,
      limit: 20
    }).then(res => {
      this.list = res.data
    })
  }
}
</script>
