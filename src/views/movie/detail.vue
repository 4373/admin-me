<template>
  <div style="overflow:hidden">
    <code>
      <pre>{{ data }}</pre>
    </code>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    this.$http('movieDetail', null, {
      append: [this.$route.query.movieId]
    }).then(res => {
      this.data = res
    })
  }
}
</script>
