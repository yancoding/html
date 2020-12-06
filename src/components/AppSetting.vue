<template>
  <el-container class="app-setting">
    <el-header class="app-setting-header">
      <h1>设置</h1>
    </el-header>
    <el-container class="app-setting-body">
      <el-aside class="app-setting-aside">
        <el-menu :default-active="$route.path" :router="true">
          <el-menu-item index="/setting/profile">个人信息</el-menu-item>
          <el-menu-item index="/setting/other">其他</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="app-setting-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'AppSetting',
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.app-setting {
  max-width: 1200px;
  margin: auto;
  
  .app-setting-header {
    border-bottom: 1px solid gray;
  }

  .app-setting-aside {
    border: 1px solid gray;
  }
}
</style>