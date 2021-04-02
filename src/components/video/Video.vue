<template>
  <div class="video-player-page">
    <div class="left">
      <div class="video-name">{{video.name}}</div>
      <div class="video-player">
        <video 
          ref="player" 
          class="video-js"
        ></video>
      </div>
    </div>
    <div class="right">
      <div class="online">
        <OnlineUserList @invite="handleInvite"/>
      </div>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js'
import OnlineUserList from './OnlineUserList'

export default {
  components: {
    OnlineUserList,
  },
  data() {
    return {
      player: null,
      options: {
        width: '1100px',
        controls: true,
      },
      video: {},
    }
  },
  props: {
  },
  methods: {
    handleInvite(id) {
      this.$socket.sendObj({
        type: 'invite',
        content: {
          do: 'watch',
          userId: id,
          video: this.player.currentSource(),
        },
      })
    }
  },
  created() {
    this.$http.get('file', {
      params: {
        id: this.$route.params.id,
      }
    })
      .then(res => {
        if (res.success) {
          const { data } = res
          const sources = [
            {
              src: data.url
            }
          ]
          this.video = res.data
          this.player = videojs(this.$refs.player, { ...this.options, sources })
        }
      })
      .catch(err => {
        this.$message({
          type: 'error',
          message: `${err}`,
        })
      })
  },
  mounted() {
  },
  beforeDestroy() {
    this.player || this.player.dispose()
  },
}
</script>

<style lang="scss">
.video-player-page {
  display: flex;
  justify-content: space-between;

  .video-name {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    padding-bottom: 15px;
  }
}
</style>
