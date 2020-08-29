<template>
  <div>
    <base-player
      ref="player"
      :options="videoOptions"
      :player-class="playerClass"
      @ready="handlePlayerReady"></base-player>
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
        controls: true,
        poster: "http://127.0.0.1:8081/picture/pic3.jpeg",
        sources: [
          {
            src: 'http://127.0.0.1:8081/movie.mp4',
            type: 'video/mp4',
          },
        ],
      },
      playerClass: {
        // 'vjs-theme-fantasy': true,
        'vjs-big-play-centered': true,
      },
    }
  },
  methods: {
    handlePlayerReady(player) {
      this.player = player
    },
  },
}
</script>
