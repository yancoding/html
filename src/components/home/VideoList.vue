<template>
  <div class="video-list">
    <VideoListHeader :title="title"/>
    <div class="list-box">
      <VideoCard
        v-for="video in videoList"
        :key="video.id"
        :video="video"
      />
    </div>
  </div>
</template>

<script>
import VideoListHeader from './VideoListHeader'
import VideoCard from './VideoCard'

export default {
  components: {
    VideoListHeader,
    VideoCard,
  },
  props: {
    videoList: Array,
    title: String,
  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
  },
}
</script>

<style lang="scss">
.video-list {
  .list-box {
    width: 1074px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .video-card {
      margin-bottom: 10px;
    }
  }
}
</style>
