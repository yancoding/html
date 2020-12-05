<template>
  <el-menu :default-active="$route.path" :router="true">
    <el-menu-item index="/chat">chat</el-menu-item>
    <el-menu-item index="/disk">disk</el-menu-item>
    <el-menu-item index="/together/watch">together watch</el-menu-item>
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