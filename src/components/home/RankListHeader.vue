<template>
  <header class="rank-header">
    <span class="name">排行榜</span>
  </header>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
  },
}
</script>

<style lang="scss">
.rank-header {
  height: 36px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .name {
    font-size: 20px;
    line-height: 28px;
    color: #212121;
    display: inline-block;
  }
}
  
</style>