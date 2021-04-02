<template>
  <el-carousel :interval="4000"  height="200px">
    <el-carousel-item v-for="item in carousel" :key="item.id">
      <img :src="item.thumbnail" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    carousel: Array,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
  
</style>