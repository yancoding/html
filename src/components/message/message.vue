<template>
  <div class="message">
    <ChatUserList/>
    <Chat
      title="yan"
      :userId="userInfo.id"
      :messages="messages"
      @send="sendContent"></Chat>
  </div>
</template>
<script>
import Chat from './Chat'
import ChatUserList from './ChatUserList'

import { mapState, mapMutations } from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  components: {
    Chat,
    ChatUserList,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('user', [
      'userInfo',
    ]),
    ...mapState('chat', [
      'messages',
      'toMessageUser',
    ]),
  },
  methods: {
    ...mapMutations('chat', [
      types.PUSH_MESSAGE,
    ]),
    sendContent(content) {
      // this.$socket.send(content)
      this.$socket.emit('chat', this.toMessageUser.id, content, res => {
        if (res.success) {
          console.log('发送成功')
        }
      })
      this[types.PUSH_MESSAGE]({
        date: Date.now(),
        content,
        user: this.userInfo,
      })
    },
  },
}
</script>
<style lang="scss">
.el-container {
  height: 100vh;
}
.message {
  display: flex;
  
  .container {
    flex: auto;
  }
}
</style>
