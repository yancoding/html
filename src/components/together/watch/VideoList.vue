<template>
  <div class="video-list">
    <ul>
      <li v-for="file in videoList" :key="file.id">
        {{file.name}}
        <el-button
          type="text"
          @click="play(file)"
        >播放</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoList: [],
    }
  },
  methods: {
    getVideoList() {
      this.$http.post('')
        .then(data => {
          this.videoList = data.data
        })
    },
    play(file) {
          console.log(file)
      this.$emit('play', file)
    },
  },
  created() {
    this.getVideoList()
  },
}
</script>

<style lang="scss">
  
</style>