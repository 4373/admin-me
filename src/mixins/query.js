let o = {} // create 的query
let e = {} // enter的query
let d = {} // diff between create and enter
export default {
  beforeRouteEnter(to, from, next) {
    e = JSON.parse(JSON.stringify(to.query))
    next()
  },
  created() {
    // 刷新 进入组件 的时候
    o = JSON.parse(JSON.stringify(this.query))
    for (let i in o) {
      // 循环o  如果e里面没有 o里面的属性 或者e里面有o没有的属性
      if (e[i] && e[i] != o[i]) {
        // 如果路由有 query里面的属性 并且属性不想等
        //从地址栏的参数来看 无法确认某个参数原始数据类型是字符串还是数组。所以这里判断下
        // 比如 ?id=1&id=4 很明显id是个数组，但是 ?id=1， 他可能是 id:1, 或者 id:[1]
        if (Array.isArray(o[i]) && !Array.isArray(e[i])) {
          d[i] = [e[i]]
          this.query[i] = [e[i]]
        } else {
          d[i] = e[i]
          this.query[i] = e[i]
        }
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 改变时 this.router, this.o
    for (let i in o) {
      if (to.query[i] === undefined) {
        this.query[i] = o[i]
      } else {
        this.query[i] = to.query[i]
      }
    }
    next()
    this.refresh && this.refresh()
  },
  mounted() {
    this.refresh()
    document.addEventListener('keydown', this.whenEnter)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.whenEnter)
  },
  methods: {
    pageChange(page, size) {
      this.query.start = (page - 1) * size
      this.query.count = size
      this.search()
    },
    search() {
      d = {}
      for (let i in o) {
        if (this.query[i] !== o[i]) {
          d[i] = this.query[i]
        }
      }
      this.$router.push({ query: d })
    },
    whenEnter(e) {
      if (e.keyCode === 13) {
        this.search()
      }
    }
  }
}
