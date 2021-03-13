<template>
  <div class="video-upload">
    <input
      type="file"
      placeholder="请选择文件"
      accept="video/*"
      @change="handleFileChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadUrl: `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/upload`,
      fileList: [],
    }
  },
  methods: {
    getVideoList() {
      this.$http('upload', )
    },
    handleFileChange(e) {
      const file = e.target.files[0]
      const data = new FormData()
      data.append('file', file)
      this.$http.post('/upload', data, {
        onUploadProgress(e) {
          const progress = e.loaded / e.total * 100
          console.log({ progress })
        },
      })
        .then(data => {
          console.log({ data })
          this.$message({
            type: 'success',
            message: '上传成功',
          })
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: `上传失败: ${err}`,
          })
        })
      
    },
  },
  mounted() {
    console.log(this.$http.baseURL)
  },
}
</script>

<style lang="scss">
  
</style>