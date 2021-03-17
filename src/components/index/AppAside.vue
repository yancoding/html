<template>
  <el-menu :default-active="$route.path" :router="true">
    <el-menu-item index="/chat">聊天</el-menu-item>
    <el-menu-item index="/disk">磁盘</el-menu-item>
    <el-menu-item index="/together/watch">一起看</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AppAside',
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.el-aside {
  display: flex;
  
  .el-menu {
    flex: auto;
  }
}
</style>