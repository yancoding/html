<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row type="flex" justify="space-between">
          <!-- 搜索 -->
          <el-col :span="8">
            <el-input
              prefix-icon="el-icon-search"
              v-model="searchKey"
            ></el-input>
          </el-col>
          <!-- 头像 -->
          <el-col :span="2">
            <el-avatar src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1354268575,1268995723&fm=26&gp=0.jpg"></el-avatar>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="150px" class="hidden-xs-only">
          <el-menu :default-active="$route.path" :router="true">
            <el-menu-item index="/chat">chat</el-menu-item>
            <el-menu-item index="/disk">disk</el-menu-item>
            <el-menu-item index="/together/watch">together watch</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      searchKey: '',
    }
  },
}
</script>

<style lang="scss">
body {
  margin: 0;

  #app > .el-container {
    height: 100vh;
    
    & > .el-container {
      overflow: auto;
      
      & > .el-aside {
        display: flex;
        
        .el-menu {
          flex: auto;
        }
      }

      & > .el-main {
        display: flex;
        
        & > div {
          flex: auto; 
        }
      }
    }
  }
}
</style>
