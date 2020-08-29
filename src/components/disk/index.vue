<template>
  <div v-loading="loading">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item of currentPath.split('/')" :key="item">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <template v-for="item of pathContent">
      <div :key="item.path" style="display: inline-block;">
        <el-button type="text"  v-if="item.type === 'dir'" @click="getPathContent(item.path)">{{item.path}}</el-button>
        <div v-else-if="item.type === 'file'" style="display: inline-block;">
          <el-image
            v-if="item.mime.indexOf('image') !== -1"
            :src="item.url" fit="contain"
            :preview-src-list="[item.url]"
            style="width: 200px; height: 200px;"></el-image>
          <audio v-else-if="item.mime.indexOf('audio') !== -1" :src="item.url" controls></audio>
          <video v-else-if="item.mime.indexOf('video') !== -1" :src="item.url" controls></video>
        </div>
      </div>
    </template>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      pathContent: [],
      currentPath: '.',
      loading: false,
    }
  },
  methods: {
    getPathContent(dir) {
      this.loading = true
      this.$http.post('http://localhost:8081/disk/dir', {
        dir,
      })
        .then(res => {
          if (res.data.success) {
            this.pathContent = res.data.data
            this.currentPath = dir
          }
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
  },
  mounted() {
    this.getPathContent('.')
  },
}
</script>
<style lang="scss">
  img,
  video {
    width: 300px;
  }
</style>