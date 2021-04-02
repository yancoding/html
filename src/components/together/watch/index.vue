<template>
  <div>
    <!-- <VideoPlayer
      ref="player"
      :options="videoOptions"
      :player-class="playerClass"
      @ready="handlePlayerReady"
    ></VideoPlayer> -->
    <OnlineUserList
      @invite="handleInvite"
    />
    <VideoList
      @play="handlePlay"
    />
  </div>
</template>

<script>
// import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import OnlineUserList from './OnlineUserList'

import { mapState } from 'vuex'

export default {
  components: {
    // VideoPlayer,
    VideoList,
    OnlineUserList,
  },
  data() {
    return {
      player: null,
      videoOptions: {
        width: '600px',
        controls: true,
        // poster: "http://127.0.0.1:4000/beauty/D6-sCwsUcAAB6Q3.jpg",
        // sources: [
        //   {
        //     src: 'http://127.0.0.1:8081/movie.mp4',
        //     type: 'video/mp4',
        //   },
        // ],
      },
      playerClass: {
        // 'vjs-theme-fantasy': true,
        // 'vjs-big-play-centered': true,
      },
      file: {},
      syncDone: true,
      text: 'haha',
    }
  },
  computed: {
    ...mapState([
      'currentSource',
    ]),
  },
  watch: {
    currentSource(value) {
      console.log(value)
      this.player.src(value)
    },
  },
  methods: {
    handlePlayerReady(player) {
      this.player = player
      this.player.on('play', e => {
        e.preventDefault()
        console.log('play: ', e)
        console.log(this.player.currentTime())
        if (this.syncDone) {
          const currentTime = this.player.currentTime()
          this.$socket.sendObj({
            type: 'sync',
            event: 'play',
            currentTime,
          })
        }
        this.syncDone = true
      })
      this.player.on('pause', e => {
        console.log('pause: ', e)
        console.log(this.player.currentTime())
        if (this.syncDone) {
          const currentTime = this.player.currentTime()
          this.$socket.sendObj({
            type: 'sync',
            event: 'pause',
            currentTime,
          })
        }
        this.syncDone = true
      })
      // this.player.on('timeupdate', e => {
      //   console.log('timeupdate: ', e)
      //   console.log(this.player.currentTime())
      // })
      this.player.on('seeked', e => {
        console.log('seeked: ', e)
        console.log(this.player.currentTime())
        if (this.syncDone) {
          const currentTime = this.player.currentTime()
          this.$socket.sendObj({
            type: 'sync',
            event: 'seeked',
            currentTime,
          })
        }
        this.syncDone = true
      })

      this.$options.sockets.onmessage =  e => {
        let message = JSON.parse(e.data)
        console.log({ message })
        if (message.type === 'sync') {
          switch(message.event) {
            case 'play':
              console.log('play!!!')
              this.syncDone = false
              this.player.currentTime(message.currentTime)
              this.player.play()
              break
            case 'pause':
              this.syncDone = false
              this.player.currentTime(message.currentTime)
              this.player.pause()
              break
            case 'seeked':
              this.syncDone = false
              this.player.currentTime(message.currentTime)
              break
          }
        }
      }
    },
    handlePlay(file) {
      this.player.options.text = `${file.name}`
      const { url: src, name } = file
      this.player.src({
        src,
        name,
      })
      this.player.poster(file.thumbnail)
    },
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
}
</script>
