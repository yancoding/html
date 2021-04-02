<template>
  <div class="video-list">
    <VideoCard
      v-for="video in videoList"
      :key="video.id"
      :video="video"
      @play="handlePlay"
    />
  </div>
</template>

<script>
import VideoCard from './VideoCard'
export default {
  components: {
    VideoCard,
  },
  data() {
    return {
      videoList: [],
    }
  },
  methods: {
    getVideoList() {
      this.$http.get('file')
        .then(res => {
          this.videoList = res.data.content
        })
    },
    handlePlay(video) {
      this.$emit('play', video)
    },
  },
  created() {
    this.getVideoList()
  },
}
</script>

<style lang="scss">
.video-list {
  width: 1074px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .video-card {
    margin-bottom: 10px;
  }
}
  
</style>