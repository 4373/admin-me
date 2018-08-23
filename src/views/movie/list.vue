<template>
  <div>
    
    <table class="table">
      <caption>
        <div class="search">
          <div class="item"><input 
            type="text"
            placeholder="输入关键字进行搜索"
            @input='query.tag = ""'
            v-model='query.q'></div>
          <div class="item">
            <select 
              v-model='query.tag' 
              @change='change'> 
              <option 
                :value="item" 
                v-for="item in tags" 
                :key='item'>
                {{ item }}
              </option>
            </select>
          </div>
          <button @click='search()'>搜索</button>
        </div>
      </caption>
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
            <router-link :to='"/other/movie/detail?movieId=" + item.id'>{{ item.title }}</router-link>
          </td>
          <td>
            <span 
              v-for = '(i, k) in item.directors' 
              :key='k' 
              class="mr-2">{{ i.name }}</span>
          </td>
          <td>
            <span 
              v-for = '(i, k) in item.casts' 
              :key='k' 
              class="mr-2">{{ i.name }}</span>
          </td>
          <td>
            <span 
              v-for = '(i, k) in item.genres' 
              :key='k' 
              class="mr-2">{{ i }}</span>
          </td>
          <td>{{ item.collect_count }}</td>
          <td>{{ item.rating.average }}</td>
        </tr>
      </tbody>
    </table>
    <ipage 
      @change='pageChange' 
      :total='total' 
      :start='query.start' 
      :count='query.count'/>
  </div>
</template>
<script>
import query from '@/mixins/query.js'
export default {
  mixins: [query],
  data() {
    return {
      list: [],
      total: 0,
      query: {
        start: 0,
        count: 20,
        q: '',
        tag: '剧情'
      },
      tags: [
        '剧情',
        '喜剧',
        '动作',
        '爱情',
        '科幻',
        '悬疑',
        '惊悚',
        '恐怖',
        '犯罪',
        '同性',
        '音乐',
        '歌舞',
        '传记',
        '历史',
        '战争',
        '西部',
        '奇幻',
        '冒险',
        '灾难',
        '武侠',
        '情色'
      ]
    }
  },
  methods: {
    refresh() {
      this.$http('movieSearch', this.query).then(res => {
        this.list = res.subjects
        this.total = res.total
      })
    },
    reviews() {
      this.$http('reviews', {
        music: '34',
        title: '神奇',
        content: '非常好听'
      })
    },
    change() {
      this.query.q = ''
      this.search()
    }
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>
