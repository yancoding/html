<template>
  <div>
    <audio 
      ref="videoPlayer" 
      class="video-js"
      :class="playerClass"></audio>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'BasePlayer',
  data() {
    return {
      player: null,
    }
  },
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
    playerClass: {
      type: [Array, Object],
    },
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.$emit('ready', this.player)
      
      const Component = videojs.getComponent('Component')
      const component = new Component(this.player, null, () => {
        const CurrentTimeDisplay = component.getComponent('CurrentTimeDisplay')
        CurrentTimeDisplay.show()
      })
      
      class TitleBar extends Component {
        constructor(player, options) {
          super(player, options)
          if (options.text) {
            this.updateTextContent(options.text)
          }
        }
        
        createEl() {
          return videojs.createEl('div', {
            className: 'vjs-title-bar',
          })
        }
        
        updateTextContent(text) {
          if (typeof text !== 'string') {
            text = 'Title Unknow'
          }
          videojs.emptyEl(this.el())
          videojs.appendContent(this.el(), text)
        }
      }
      
      videojs.registerComponent('TitleBar', TitleBar)
      
      this.player.addChild('TitleBar', {
        text: 'The Title of The Video',
      })
    })
},
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>

<style>
.video-js .vjs-title-bar {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  
  /*
    By default, do not show the title bar.
  */
  display: none;
  font-size: 2em;
  padding: .5em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

/* 
  Only show the title bar after playback has begun (so as not to hide
  the big play button) and only when paused or when the user is 
  interacting with the player.
*/
.video-js.vjs-paused.vjs-has-started .vjs-title-bar,
.video-js.vjs-user-active.vjs-has-started .vjs-title-bar{
  display: block;
}
</style>
