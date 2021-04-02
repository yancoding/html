<template>
  <div class="app-header">
    <div class="header-left"></div>
    <div class="header-right">
      <el-link
        class="right-item"
        icon="el-icon-s-management"
        :underline="false"
        @click="$router.push('/')"
      >推荐</el-link>
      <el-link
        class="right-item"
        icon="el-icon-s-management"
        :underline="false"
        @click="$router.push('/together/watch')"
      >一起看</el-link>
      <el-link
        class="right-item"
        icon="el-icon-s-management"
        :underline="false"
        @click="$router.push('/disk')"
      >磁盘</el-link>
      <el-link
        class="right-item"
        icon="el-icon-message-solid"
        :underline="false"
        @click="$router.push('/chat')"
      >消息</el-link>
      <el-link
        class="right-item"
        icon="el-icon-s-management"
        :underline="false"
        @click="$router.push('/manage')"
      >管理</el-link>
      <el-link
        class="right-item"
        icon="el-icon-upload"
        :underline="false"
        @click="$router.push('/upload')"
      >上传</el-link>
      <el-dropdown
        class="right-item"
        trigger="click"
        @command="handleCommand"
      >  
        <el-avatar src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1354268575,1268995723&fm=26&gp=0.jpg"></el-avatar>
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
    display: inline-table;

    .right-item {
      display: table-cell;

      &+.right-item {
        padding-left: 30px;
      }
    }
  }
}
</style>