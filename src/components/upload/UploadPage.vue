<template>
  <el-container class="upload-page">
    <el-header class="upload-page-header">
      <h1>上传视频</h1>
    </el-header>
    <el-container class="upload-page-body">
      <UploadVideo/>
    </el-container>
  </el-container>
</template>

<script>
import UploadVideo from './UploadVideo'
export default {
  name: 'AppSetting',
  components: {
    UploadVideo,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.upload-page {
  max-width: 1200px;
  margin: auto;
  
  .upload-page-header {
    border-bottom: 1px solid gray;
  }

  .upload-page-body {
    text-align: center;

    .upload-video {
      margin: auto;
    }
  }
}
</style>