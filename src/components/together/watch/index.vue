<template>
  <div>
    <BasePlayer
      ref="player"
      :options="videoOptions"
      :player-class="playerClass"
      @ready="handlePlayerReady"
    ></BasePlayer>
    <input
      type="file"
      placeholder="请选择文件"
      accept="video/*"
      @change="handleFileChange"
    />
  </div>
</template>

<script>
import BasePlayer from '../../base/BasePlayer'

export default {
  components: {
    BasePlayer,
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
    }
  },
  methods: {
    handlePlayerReady(player) {
      this.player = player
    },
    handleFileChange(e) {
      const file = e.target.files[0]
      const url = URL.createObjectURL(file)
      this.file.url = url
      this.player.options.text = "dd"
      this.player.src({
        type: file.type,
        src: url,
      })
    },
  },
}
</script>
