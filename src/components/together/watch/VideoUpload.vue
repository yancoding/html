<template>
  <div class="video-upload">
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
      uploadUrl: `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/file/upload`,
      fileList: [],
      token: localStorage.getItem('token')
    }
  },
  methods: {
    // handleFileChange(e) {
    //   const file = e.target.files[0]
    //   const data = new FormData()
    //   data.append('file', file)
    //   this.$http.post('/upload', data, {
    //     onUploadProgress(e) {
    //       const progress = e.loaded / e.total * 100
    //       console.log({ progress })
    //     },
    //   })
    //     .then(data => {
    //       console.log({ data })
    //       this.$message({
    //         type: 'success',
    //         message: '上传成功',
    //       })
    //     })
    //     .catch(err => {
          
    //     })
      
    // },
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
    console.log(this.$http.baseURL)
  },
}
</script>

<style lang="scss">
  
</style>