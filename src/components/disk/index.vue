<template>
  <div>
    <template v-for="item of pathContent">
      <div :key="item.path" style="display: inline-block;">
        <el-button type="text"  v-if="item.type === 'dir'" @click="getPathContent(item.path)">{{item.path}}</el-button>
        <div v-else-if="item.type === 'file'" style="display: inline-block;">
          <el-image v-if="item.mime.indexOf('image') !== -1" :src="item.url" fit="contain" style="width: 200px; height: 200px;"></el-image>
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
    }
  },
  methods: {
    getPathContent(dir) {
      this.$http.post('http://localhost:8081/disk/dir', {
        dir,
      })
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.pathContent = res.data.data
          }
        })
        .catch(err => console.log(err))
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