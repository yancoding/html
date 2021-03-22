<template>
  <div class="video-list-card" @click="handleClick">
    <div class="card-body">
      <img :src="video.thumbnail">
    </div>
    <div class="card-footer">
      <div class="video-name">{{video.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      videoList: [],
    }
  },
  methods: {
    handleClick() {
      this.$emit('play', this.video)
    },
  },
}
</script>

<style lang="scss">
.video-list-card {
  display: inline-block;
  width: 200px;
  cursor: pointer;
  
  .card-body {
    img {
      width: 100%;
      height: 125px;
      object-fit: cover;
    }
  }

  .card-footer {
    .video-name {
      font-size: 14px;
      line-height: 18px;
      color: #3a3e51;
    }
  }
}
</style>