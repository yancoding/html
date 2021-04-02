<template>
  <div class="upload-page">
    <div class="upload-page-body">
      <UploadVideo/>
    </div>
  </div>
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
  // margin: auto;
  
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