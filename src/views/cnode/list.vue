<template>
  <div>
    <table class="table">
      <thead slot="thead">
        <tr>
          <th>序号</th>
          <th>标题</th>
          <th>作者</th>
          <th>分类</th>
          <th>评论/浏览数</th>
          <th>创建时间</th>
        </tr>
      </thead>
      <tbody slot='tbody'>
        <tr 
          v-for ='(item, key) in list' 
          :key='key'>
          <td>{{ key + 1 }}</td>
          <td>
            <span class="ell">{{ item.title }}</span>
          </td>
          <td> 
            {{ item.author.loginname }} 
          </td>
          <td>
            {{ item.tab }}
          </td>
          <td>
            <span class="text-success">{{ item.reply_count }}</span> / <span class="text-primary">{{ item.visit_count }}</span>
          </td>
          <td>{{ item.create_at }}</td>
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
