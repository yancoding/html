<template>
  <div class="video-list">
    <VideoListCard
      v-for="video in videoList"
      :key="video.id"
      :video="video"
      @play="handlePlay"
    />
  </div>
</template>

<script>
import VideoListCard from './VideoListCard'
export default {
  components: {
    VideoListCard,
  },
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
  width: 840px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .video-list-card {

  }
}
  
</style>