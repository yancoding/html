<template>
  <div class="upload-video">
    <el-upload
      drag
      multiple
      accept="video/*"
      :action="uploadUrl"
      :headers="{ Authorization: token }"
      :show-file-list="true"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传video/*文件，且不超过500M</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadUrl: `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/upload`,
      fileList: [],
      token: localStorage.getItem('token'),
    }
  },
  methods: {
    handleSuccess() {
      this.$message({
        type: 'success',
        message: '上传成功',
      })
    },
    handleError(err) {
      this.$message({
        type: 'error',
        message: `上传失败: ${err}`,
      })
    },
    handleProgress(e) {
      const progress = e.loaded / e.total * 100
      console.log({ progress })
    },
  },
  mounted() {
  },
}
</script>

<style lang="scss">
  
</style>