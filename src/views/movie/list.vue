<template>
  <div>
    <el-input></el-input>
  </div>
</template>
<script>
  export default {

    mounted() {
      this.$http('movieNow', {
        start: 20,
        count: 20
      }).then(res => {
        console.log(res)
      })
    }
  }
</script>
