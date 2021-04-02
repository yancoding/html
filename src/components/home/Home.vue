<template>
  <div class="home">
    <!-- <HomeHeader :carousel="carouselList"/> -->
    <div class="module">
      <VideoList title="电影" :videoList="movieModule.videoList"/>
      <RankList :rankList="movieModule.rankList"/>
    </div>
    <div class="module">
      <VideoList title="美剧" :videoList="ustvModule.videoList"/>
      <RankList :rankList="ustvModule.rankList"/>
    </div>
    <div class="module">
      <VideoList title="MV" :videoList="mvModule.videoList"/>
      <RankList :rankList="mvModule.rankList"/>
    </div>
  </div>
</template>

<script>
// import HomeHeader from './HomeHeader'
import VideoList from './VideoList'
import RankList from './RankList'

export default {
  components: {
    VideoList,
    RankList,
    // HomeHeader,
  },
  data() {
    return {
      videoList: [],
      rankList: [],
      carouselList: [],
      movieModule: {
        videoList: [],
        rankList: [],
      },
      ustvModule: {
        videoList: [],
        rankList: [],
      },
      mvModule: {
        videoList: [],
        rankList: [],
      },
    }
  },
  methods: {
    getCarouselList() {
      this.$http.get('file/carousel')
        .then(res => {
          if (res.success) {
            this.carouselList = res.data
            console.log(res.data)
          }
        })
    },
    getVideoList() {
      this.$http.get('file', {
        params: { page: 1, size: 10 }
      })
        .then(res => {
          if (res.success) {
            this.videoList = res.data.content
          }
        })
    },
    getRankList() {
      this.$http.get('file')
        .then(res => {
          if (res.success) {
            this.rankList = res.data.content
          }
        })
    },
    getMovieModule() {
      this.$http.get('file/movie')
        .then(res => {
          if (res.success) {
            this.movieModule.videoList = res.data.videoList
            this.movieModule.rankList = res.data.rankList
          }
        })
    },
    getUsTvModule() {
      this.$http.get('file/ustv')
        .then(res => {
          if (res.success) {
            this.ustvModule.videoList = res.data.videoList
            this.ustvModule.rankList = res.data.rankList
          }
        })
    },
    getMvModule() {
      this.$http.get('file/mv')
        .then(res => {
          if (res.success) {
            this.mvModule.videoList = res.data.videoList
            this.mvModule.rankList = res.data.rankList
          }
        })
    }
  },
  created() {
    // this.getCarouselList()
    // this.getVideoList()
    // this.getRankList()
    this.getMovieModule()
    this.getUsTvModule()
    this.getMvModule()
  },
}
</script>

<style lang="scss">
.home {
  .module {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
}
</style>