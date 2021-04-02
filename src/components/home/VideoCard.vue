<template>
  <div class="video-card" @click="handleClick">
    <div class="card-pic" @click="goVideoPage">
      <img :src="video.thumbnail">
      <div class="count">
        <div class="left"></div>
        <div class="right">{{duration}}</div>
      </div>
    </div>
    <div class="title" :title="video.name" @click="goVideoPage">{{video.name}}</div>
    <div class="up">
      <i class="icon el-icon-user"></i>
      <span>{{video.uploader}}</span>
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
  computed: {
    duration() {
      let duration = Math.round(this.video.duration)
      let second = duration % 60
      let minute = Math.floor((duration % 3600) / 60)
      let hour = Math.floor(duration / 3600)
      return `${hour.toString().padStart(2, 0)}:${minute.toString().padStart(2, 0)}:${second.toString().padStart(2, 0)}`
    },
  },
  methods: {
    handleClick() {
      this.$emit('play', this.video)
    },
    goVideoPage() {
      this.$router.push(`/video/${this.video.id}`)
    },
  },
}
</script>

<style lang="scss">
$hover-color: #00a1d6;

.video-card {
  display: inline-block;
  width: 206px;
  cursor: pointer;

  .card-pic {
    height: 116px;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 48px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=) repeat-x;
      position: absolute;
      bottom: 0;
      border-radius: 2px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2px;
    }

    .count {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 6px 8px;
      position: absolute;
      bottom: 0;
      line-height: 16px;
      color: #fff;
    }
  }

  .title {
    &:hover {
      color: $hover-color;
    }

    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    height: 40px;
    margin: 10px 0;
    padding: 0 10px 0 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    transition: color .3s;
  }

  .up {
    display: flex;
    font-size: 12px;
    line-height: 16px;
    color: #999;

    &:hover {
      color: $hover-color;
    }

    .icon {
      margin-right: 4px;
    }
  }
}
</style>
