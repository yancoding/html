<template>
  <div class="rank-list-item">
    <span class="number" :class="{ 'on': number < 4 }">{{number}}</span>
    <span class="title" :title="title" @click="goVideoPage">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    id: [ Number, String ],
    number: [ Number, String ],
    title: String,
  },
  data() {
    return {
      videoList: [],
    }
  },
  computed: {
  },
  methods: {
    goVideoPage() {
      this.$router.push(`/video/${this.id}`)
    },
  },
}
</script>

<style lang="scss">
$hover-color: #00a1d6;

.rank-list-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  cursor: pointer;

  .number {
    &.on {
      color: #fff;
      background-color: #00a1d6;
    }

    font-size: 14px;
    line-height: 18px;
    color: #999;
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    text-align: center;
  }

  .title {
    &:hover {
      color: $hover-color;
    }

    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    width: 290px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color .3s;
  }
}
</style>
