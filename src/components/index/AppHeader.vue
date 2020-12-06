<template>
  <div class="app-header">
    <div class="header-left">
      <el-input
        prefix-icon="el-icon-search"
        v-model="searchKey"
      ></el-input>
    </div>
    <div class="header-right">
      <el-dropdown class="dropdown-avatar" trigger="click" @command="handleCommand">
        <span>
          <el-avatar src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1354268575,1268995723&fm=26&gp=0.jpg"></el-avatar>
          <i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setting">设置</el-dropdown-item>
          <el-dropdown-item command="signout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    
  </div>
</template>

<script>
// import * as types from '@/store/mutation-types'
// import { mapMutations } from 'vuex'

export default {
  name: 'AppHeader',
  data() {
    return {
      searchKey: '',
    }
  },
  methods: {
    signout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    handleCommand(command) {
      switch(command) {
        case 'setting':
          this.$router.push('/setting')
          break;
        case 'signout':
          this.signout()
          break;
      }
    },
  },
}
</script>

<style lang="scss">
.app-header {
  border-bottom: 1px solid gray;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  .header-left {
    float: left;
  }

  .header-right {
    float: right;
  }
}
</style>