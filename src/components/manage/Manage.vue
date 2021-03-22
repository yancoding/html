<template>
  <el-container class="manage">
    <el-header class="manage-header">
      <h2>文件管理</h2>
    </el-header>
    <el-container class="manage-body">
      <ManageList/>
    </el-container>
  </el-container>
</template>

<script>
import ManageList from './ManageList'
export default {
  name: 'AppSetting',
  components: {
    ManageList,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.manage {
  max-width: 1200px;
  margin: auto;
  
  .manage-header {
    font-size: 16px;
    line-height: 28px;
    font-weight: bold;
    border-bottom: 1px solid gray;
  }

  .manage-body {
    text-align: center;

    .upload-video {
      margin: auto;
    }
  }
}
</style>