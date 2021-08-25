<template>
  <div class="message">
    <ChatUserList
      :userList="userList"
      :messageUser="messageUser"
    />
    <Chat
      :user="userInfo"
      :messageList="messageList"
      :messageUser="messageUser"
      @send="sendContent"
    />
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
    ...mapState('websocket', [
      'messageUser',
      'messageList',
    ]),
    ...mapState('websocket', {
      userList: state => state.userList,
    }),
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
  
  .chat {
    flex: auto;
  }
  
  .chat-user-list {
    margin-right: 10px;
  }
}
</style>
