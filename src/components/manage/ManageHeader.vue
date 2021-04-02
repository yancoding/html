<template>
  <div class="manage-header">
    <div class="left">
      <span class="name">文件管理</span>
    </div>
    <div class="right">
      <BatchOperation/>
    </div>
  </div>
</template>

<script>
import BatchOperation from './BatchOperation'

export default {
  components: {
    BatchOperation,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.manage-header {
  display: flex;
  justify-content: space-between;

  .left {
    .name {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
    }
  }
}
</style>