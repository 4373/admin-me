<template>
  <Pagination 
    background
    :total='+total'
    layout='sizes,prev, pager, next, jumper, ->, total'
    :page-size='size'
    :current-page='current'
    :page-sizes='[5, 10, 20]'
    @current-change='currentChange'
    @prev-click='currentChange'
    @next-click='currentChange'
    @size-change='sizeChange'
  />
</template>
<script>
import { Pagination } from "element-ui";
export default {
  components: {
    Pagination
  },
  props: {
    start: {
      type: Number | String,
      default: 0
    },
    count: {
      type: Number | String,
      default: 20
    },
    total: {
      type: Number | String,
      default: 0
    }
  },
  data() {
    return {
      current: 1,
      size: 20
    };
  },
  watch: {
    start(n) {
      this.current = Math.ceil(n / this.count) + 1
    },
    count(n) {
      this.size = +n
    }
  },
  methods: {
    currentChange(n) {
      this.$emit('change', +n, +this.size)
    },
    sizeChange(n) {
      this.$emit('change', 1, +n)
    }
  },
  mounted() {
    this.current = Math.ceil(this.start / this.count) + 1
    this.size = +this.count
  }
};
</script>