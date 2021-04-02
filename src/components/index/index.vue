<template>
  <el-container>
    <el-header>
      <AppHeader/>
    </el-header>
    <el-container class="app-body">
      <!-- <el-aside width="150px">
        <AppAside/>
      </el-aside> -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from './AppHeader'
// import AppAside from './AppAside'

export default {
  name: 'App',
  components: {
    AppHeader,
    // AppAside,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.el-container {
  // height: 100vh;
  
  .app-body {
    width: 1460px;
    margin: auto;
    overflow: auto;

    & > .el-main {
      display: flex;
      
      & > div {
        flex: auto; 
      }
    }
  }
}
</style>
