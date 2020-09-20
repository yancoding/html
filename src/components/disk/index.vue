<template>
  <div v-loading="loading">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) of separatePath"
          :key="index">
          <a @click="getPathContent(item.path)">{{item.name}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
    <template v-for="item of pathContent">
      <div :key="item.path" style="display: inline-block;">
        <el-button type="text"  v-if="item.type === 'dir'" @click="getPathContent(item.path)">{{item.name}}</el-button>
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
  computed: {
    separatePath() {
      let separatePath = [{
          name: '根目录',
          path: '.'
        }]
      if (this.currentPath != '.') {
        const list = this.currentPath.split('/')
        for (let i = 0; i < list.length; i++) {
          separatePath.push({
            name: list[i],
            path: list.slice(0, i+1).join('/'),
          })
        }
      }
      return separatePath
    },
  },
  methods: {
    getPathContent(dir) {
      this.loading = true
      this.$http.post('/disk/dir', {
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