<template>
  <div class="rank-list">
    <RankListHeader/>
    <RankListItem
      v-for="(video, index) in rankList"
      :key="video.id"
      :id="video.id"
      :number="index + 1"
      :title="video.name"
    />
  </div>
</template>

<script>
import RankListHeader from './RankListHeader'
import RankListItem from './RankListItem'

export default {
  components: {
    RankListItem,
    RankListHeader,
  },
  props: {
    rankList: Array,
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
.rank-list {
  width: 320px;
  justify-content: space-between;
  flex-wrap: wrap;

  .video-card {
    margin-bottom: 10px;
  }
}
  
</style>