<template>
  <div id="chat">
    <yan-chat
      title="yan"
      :userId="user.id"
      :messages="messages"
      @send="sendContent"></yan-chat>
  </div>
</template>
<script>
import YanChat from '../components/YanChat.vue'
import {
  mapState,
  mapMutations,
} from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  components: {
    YanChat,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'user',
    ]),
    ...mapState({
      messages: state => state.chat.messages
    }),
  },
  methods: {
    ...mapMutations({
      pushMessage: types.PUSH_MESSAGE,
    }),
    sendContent(content) {
      this.$socket.send(content)
      this.pushMessage({
        date: Date.now(),
        content,
        user: {
          id: 1,
          name: 'yan',
          avatar: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1354268575,1268995723&fm=26&gp=0.jpg',
        },
      })
    },
  },
}
</script>
<style lang="scss">
#chat {
  display: flex;
  
  .container {
    flex: auto;
  }
}
</style>
